import svgPaths from "./svg-auz65n7skm";

function Group() {
  return (
    <div className="h-[26.516px] relative shrink-0 w-[57.601px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.9998 33.145">
        <g id="Group 1">
          <path d={svgPaths.p31a1b080} fill="var(--fill-0, #1E1E1E)" id="Subtract" />
          <path d={svgPaths.p11bb8600} fill="var(--fill-0, #1E1E1E)" id="Vector" />
          <path d={svgPaths.p498c800} fill="var(--fill-0, #1E1E1E)" id="Vector_2" />
          <path d={svgPaths.p22a4d100} fill="var(--fill-0, #1E1E1E)" id="Vector_3" />
          <path d={svgPaths.p35bb8e00} fill="var(--fill-0, #1E1E1E)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[25.6px] items-center leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[14.4px] tracking-[-0.288px] whitespace-nowrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">HOME</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0">ABOUT</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0">CONTACT</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0">SHOP</p>
    </div>
  );
}

function MaterialSymbolsLightShoppingBagOutline() {
  return (
    <div className="relative shrink-0 size-[25.6px]" data-name="material-symbols-light:shopping-bag-outline">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="material-symbols-light:shopping-bag-outline">
          <path d={svgPaths.p3b67fb00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[345.6px] items-center px-[80px] py-[16px] relative size-full">
      <Group />
      <Frame />
      <MaterialSymbolsLightShoppingBagOutline />
    </div>
  );
}