const imgSkincareRoutineCloseUp2 = "/skincare-hero.png";

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] items-start relative shrink-0 w-full">
      <div className="font-['Alethia_Pro:Regular',sans-serif] leading-none relative shrink-0 text-[74.4px] tracking-[-2.976px] w-full">
        <p className="mb-0">YOUR SKIN.</p>
        <p>YOUR STANDARD.</p>
      </div>
      <div className="font-['Inter:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[14.4px] tracking-[-0.288px] w-full">
        <p className="mb-0">{`Men don't need complicated skincare routines.`}</p>
        <p>{`JUNSO focuses on precision formulas designed for men's skin.`}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-none relative shrink-0 text-[16px] w-full">PRECISION SKINCARE FOR MEN</p>
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#09103a] content-stretch flex items-center justify-center p-[12.8px] relative shrink-0">
      <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[14.4px] text-white whitespace-nowrap">EXPLORE PRODUCTS</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f9f9f9] flex-[1_0_0] h-[785.6px] min-h-px min-w-px relative">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[38.4px] items-start justify-end px-[80px] py-[96px] relative size-full">
          <Frame1 />
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-[1_0_0] flex-col h-[785.6px] items-start justify-center min-h-px min-w-px relative">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Skincare Routine Close-Up 2">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgSkincareRoutineCloseUp2} />
          <div className="absolute bg-[rgba(9,16,58,0.1)] inset-0" />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Hero Section">
      <Frame2 />
      <Frame3 />
    </div>
  );
}