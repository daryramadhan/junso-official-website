import os
import re

TARGET_DIR = './src/imports'
SCALE_FACTOR = 0.8

def scale_match(match):
    num_str = match.group(1)
    try:
        val = float(num_str)
        scaled_val = val * SCALE_FACTOR
        # If it's a whole number, format as integer, else up to 3 decimal places
        if scaled_val.is_integer():
            return f"[{int(scaled_val)}px]"
        else:
            return f"[{round(scaled_val, 3)}px]"
    except ValueError:
        return match.group(0)

def scale_match_without_brackets(match):
    num_str = match.group(1)
    try:
        val = float(num_str)
        scaled_val = val * SCALE_FACTOR
        if scaled_val.is_integer():
            return f"{int(scaled_val)}px"
        else:
            return f"{round(scaled_val, 3)}px"
    except ValueError:
        return match.group(0)

# Pattern 1: [80px] or [-1.92px] or [120.5px] -> typical tailwind arbitrary pixel values
pattern1 = re.compile(r'\[([-+]?[0-9]*\.?[0-9]+)px\]')

# Pattern 2: calc(50%+120.5px) -> pixels inside a calc or similar unbracketed contexts
pattern2 = re.compile(r'([-+]?[0-9]*\.?[0-9]+)px')

def process_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # First pass: replace everything inside [ ...px ]
    new_content = pattern1.sub(scale_match, content)

    # Second pass: we have some inline styles or other places where pixels are not in brackets?
    # Actually, in the code we saw classes like:
    #   content-stretch flex flex-col gap-[48px] items-start left-[100px] top-[calc(50%+120.5px)]
    # So the pattern1 covers `[48px]` -> `[38px]` and `[100px]` -> `[80px]`.
    # But `[calc(50%+120.5px)]` has `120.5px` INSIDE the brackets.
    # We can just process the whole file for any `number`px and scale it, but there could be risks 
    # (e.g., if there's a URL or string that just happens to end in px, though unlikely).
    # Since we use tailwind everywhere, let's just do a blanket regex for everything that looks like a pixel value
    # EXCEPTION: we don't want to scale 1px borders to 0.8px, it might look bad or not render on some screens.
    
    def blanket_scale(m):
        val = float(m.group(1))
        if val == 1.0 or val == -1.0: # Keep 1px borders/lines as 1px
            return m.group(0)
        scaled_val = val * SCALE_FACTOR
        if scaled_val.is_integer():
            return f"{int(scaled_val)}px"
        else:
            return f"{round(scaled_val, 3)}px"
            
    final_content = pattern2.sub(blanket_scale, content)
    
    if final_content != content:
        with open(filepath, 'w') as f:
            f.write(final_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk(TARGET_DIR):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.css'):
            process_file(os.path.join(root, file))
