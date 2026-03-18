function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0 w-full">
      <p className="font-['Alethia_Pro:Regular',sans-serif] not-italic relative shrink-0 text-[16px] tracking-[-0.32px] w-full">JUNSO DAILY FACE CLEANSER</p>
      <p className="font-['Inter:Light_Italic',sans-serif] font-light italic relative shrink-0 text-[11.2px] tracking-[-0.224px] w-full">{`Removes oil & impurities. Starts clean.`}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] items-start leading-[1.2] relative size-full text-[#1e1e1e]">
      <p className="font-['Inter:Light',sans-serif] font-light not-italic relative shrink-0 text-[14.4px] tracking-[-0.288px] w-full">100ml</p>
      <Frame1 />
    </div>
  );
}