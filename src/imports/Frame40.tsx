function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[1.2] not-italic relative shrink-0 text-[#1e1e1e] text-[9.6px] md:text-[12.8px] tracking-[-0.192px] md:tracking-[-0.256px] whitespace-nowrap">© 2026 PT Prima Indah Esthera. All rights reserved.</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex font-['Inter:Light',sans-serif] font-light gap-[12.8px] md:gap-[19.2px] items-center leading-[1.2] not-italic relative shrink-0 text-[9.6px] md:text-[12.8px] text-black tracking-[-0.192px] md:tracking-[-0.256px] underline whitespace-nowrap">
      <p className="decoration-solid relative shrink-0">Privacy Policy</p>
      <p className="decoration-solid relative shrink-0">Terms of Use</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center md:justify-between w-full">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-4 md:px-[80px] py-5 md:py-[25.6px] relative w-full">
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-solid border-t inset-0 pointer-events-none" />
      <div className="w-full">
        <Frame1 />
      </div>
    </div>
  );
}
