import svgPaths from "./svg-x38u6tshu3";

function Group() {
  return (
    <div className="h-[35.2px] md:h-[44.194px] relative shrink-0 w-[64px] md:w-[96px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120 55.2415">
        <g id="Group 1">
          <path d={svgPaths.p31072452} fill="var(--fill-0, #1E1E1E)" id="Subtract" />
          <path d={svgPaths.p621c9f2} fill="var(--fill-0, #1E1E1E)" id="Vector" />
          <path d={svgPaths.p2112d800} fill="var(--fill-0, #1E1E1E)" id="Vector_2" />
          <path d={svgPaths.p2366b700} fill="var(--fill-0, #1E1E1E)" id="Vector_3" />
          <path d={svgPaths.p30ef1200} fill="var(--fill-0, #1E1E1E)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[9.6px] md:gap-[12.8px] items-start relative shrink-0 w-full">
      <Group />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[1.5] not-italic relative shrink-0 text-[#1e1e1e] text-[11.2px] md:text-[14.4px] tracking-[-0.224px] md:tracking-[-0.288px]">
        Precision Skincare For Men.
        <br aria-hidden="true" />
        Confidence Starts With Simple Care.
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative shrink-0 w-full md:w-[303.2px]">
      <Frame5 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[11.2px] md:text-[14.4px]">SHOP</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[11.2px] md:text-[12.8px]">All Products</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[11.2px] md:text-[14.4px]">DISCOVER</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[11.2px] md:text-[12.8px]">Our Story</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[11.2px] md:text-[12.8px]">Our Ingredients</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[11.2px] md:text-[12.8px]">The Routine</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[11.2px] md:text-[14.4px]">CUSTOMER SERVICE</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[11.2px] md:text-[12.8px]">{`Help & FAQ`}</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[11.2px] md:text-[12.8px]">Secure payment</p>
      <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0 text-[11.2px] md:text-[12.8px]">Contact</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-row flex-wrap gap-x-[25.6px] gap-y-[19.2px] md:gap-[25.6px] items-start leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[11.2px] md:text-[14.4px] tracking-[-0.224px] md:tracking-[-0.288px] whitespace-nowrap w-full md:w-[496px]">
      <Frame2 />
      <Frame4 />
      <Frame6 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-start md:justify-between gap-10 md:gap-0 pb-12 md:pb-[120px] pt-10 md:pt-[96px] px-4 md:px-[80px] relative w-full">
      <Frame3 />
      <Frame />
    </div>
  );
}
