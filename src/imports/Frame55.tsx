import svgPaths from "./svg-g7vkziav63";

function MaterialSymbolsLightKeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[19.2px]" data-name="material-symbols-light:keyboard-arrow-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:keyboard-arrow-down">
          <path d={svgPaths.p16c91580} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative size-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[14.4px] tracking-[-0.288px] whitespace-nowrap">PRODUCT</p>
      <MaterialSymbolsLightKeyboardArrowDown />
    </div>
  );
}