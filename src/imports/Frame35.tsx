import svgPaths from "./svg-0dt4ad5nv8";

function MaterialSymbolsLightArrowRightAlt() {
  return (
    <div className="relative shrink-0 size-[16px] md:size-[19.2px]" data-name="material-symbols-light:arrow-right-alt">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:arrow-right-alt">
          <path d={svgPaths.p1d2b5300} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MaterialSymbolsLightClose() {
  return (
    <div className="relative shrink-0 size-[16px] md:size-[19.2px]" data-name="material-symbols-light:close">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:close">
          <path d={svgPaths.p31419900} fill="white" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function AnnouncementBar({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[#09103a] flex items-center justify-center px-4 md:px-[80px] h-[48px] relative w-full">
      <div aria-hidden="true" className="absolute border-[#09103a] border-b border-solid inset-0 pointer-events-none" />
      {/* Content */}
      <div className="flex gap-[8px] md:gap-[12.8px] items-center justify-center">
        <p className="font-['Inter',sans-serif] font-light leading-[1.2] not-italic relative shrink-0 text-white text-[10.4px] md:text-[14.4px] tracking-[-0.208px] md:tracking-[-0.288px] whitespace-nowrap">
          FREE SHIPPING ON FIRST ORDER
        </p>
        <div className="flex gap-[4.8px] md:gap-[6.4px] items-center relative shrink-0">
          <p className="decoration-solid font-['Inter',sans-serif] font-light leading-[1.2] not-italic relative shrink-0 text-white text-[10.4px] md:text-[14.4px] tracking-[-0.208px] md:tracking-[-0.288px] underline whitespace-nowrap">
            SHOP NOW
          </p>
          <MaterialSymbolsLightArrowRightAlt />
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute right-4 md:right-[80px] cursor-pointer bg-transparent border-none p-0 flex items-center justify-center hover:opacity-60 transition-opacity duration-200"
        aria-label="Dismiss announcement"
      >
        <MaterialSymbolsLightClose />
      </button>
    </div>
  );
}