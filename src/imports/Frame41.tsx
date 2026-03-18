const imgScreenshot20260314At0301373 = "/skincare-bottles.png";

// Desktop-only product image collage
function Group() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+284.4px)] top-[-154.888px]">
      {/* <div className="-translate-x-1/2 absolute h-[468.486px] left-[calc(50%+407.072px)] top-[-59.688px] w-[323.456px]" data-name="Screenshot 2026-03-14 at 03.01.37 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260314At0301373} />
      </div> */}
      {/* <div className="-translate-x-1/2 absolute h-[324.388px] left-[calc(50%+111.984px)] top-[26.48px] w-[223.966px]" data-name="Screenshot 2026-03-14 at 03.01.37 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260314At0301373} />
      </div> */}
      <div className="-translate-x-1/2 absolute h-[562.61px] left-[calc(50%+224.024px)] top-[-154.888px] w-[480.442px]" data-name="Screenshot 2026-03-14 at 03.01.37 5">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260314At0301373} />
      </div>
      {/* <div className="-translate-x-1/2 absolute h-[273.986px] left-[calc(50%+327.04px)] top-[134.616px] w-[189.167px]" data-name="Screenshot 2026-03-14 at 03.01.37 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260314At0301373} />
      </div> */}
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[9.6px] md:gap-[12.8px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Alethia_Pro:Regular',sans-serif] leading-none relative shrink-0 text-[#09103a] text-[25.6px] md:text-[51.2px] tracking-[-1.024px] md:tracking-[-2.048px] w-full">CONFIDENCE STARTS WITH SIMPLE CARE.</p>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[#1e1e1e] text-[12px] md:text-[14.4px] w-full">Precision Skincare For Men.</p>
    </div>
  );
}

function Frame() {
  return (
    <button className="content-stretch flex items-center justify-center p-[11.2px] md:p-[12.8px] relative shrink-0 cursor-pointer border border-[#1e1e1e] bg-transparent hover:bg-[#1e1e1e] transition-colors duration-200 group">
      <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[12.8px] md:text-[14.4px] whitespace-nowrap group-hover:text-white transition-colors duration-200">SEE US ON SHOPEE!</p>
    </button>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white w-full px-4 md:px-[200px] py-[48px] md:py-[96px]">
      {/* Mobile: simple stacked text + button (no complex image collage) */}
      <div className="md:hidden flex flex-col gap-8">
        <Frame4 />
        <Frame />
      </div>

      {/* Desktop: side-by-side with image collage */}
      <div className="hidden md:block h-[326.4px] relative shrink-0 w-full">
        <Group />
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[25.6px] items-start left-0 top-1/2 w-[396.8px]">
          <Frame4 />
          <Frame />
        </div>
      </div>
    </div>
  );
}
