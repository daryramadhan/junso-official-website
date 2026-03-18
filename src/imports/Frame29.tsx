const imgScreenshot20260314At0301372 = "https://placehold.co/600x400";

function Frame() {
  return (
    <div className="bg-[#f9f9f9] h-[275.2px] overflow-clip relative shrink-0 w-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[554.4px] left-[calc(50%+0.24px)] top-[calc(50%-0.4px)] w-[383.2px]" data-name="Screenshot 2026-03-14 at 03.01.37 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot20260314At0301372} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0 w-full">
      <p className="font-['Alethia_Pro:Regular',sans-serif] not-italic relative shrink-0 text-[16px] tracking-[-0.32px] w-full">CLEANSE GENTLE FOAMING CLEANSER</p>
      <p className="font-['Inter:Light_Italic',sans-serif] font-light italic relative shrink-0 text-[14.4px] tracking-[-0.288px] w-full">{`Removes oil & impurities. Starts clean.`}</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] items-start leading-[1.2] relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['Inter:Light',sans-serif] font-light not-italic relative shrink-0 text-[14.4px] tracking-[-0.288px] w-full">100ml</p>
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[19.2px] items-start relative shrink-0 w-full">
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-0.4px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270.4 1">
            <path d="M0 0.5H270.4" id="Vector 1" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[25.6px] items-start relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}