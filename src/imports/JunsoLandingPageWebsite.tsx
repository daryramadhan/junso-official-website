const image_ae70ab7429a75b97a66b07c40e3ec811aae148d4 = "/skincare-hero.png";
const imgPhilosophyBanner = "/laboratory.png";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import AnnouncementBar from "./Frame35";
import ConfidenceBannerSection from "./Frame41";
import FooterSection from "./Frame39";
import CopyrightBar from "./Frame40";
import svgPaths from "./svg-c4uvp3a8ff";
import svgPathsNav from "./svg-auz65n7skm";
import svgPathsArrow from "./svg-g7vkziav63";
const imgSkincareRoutineCloseUp2 = "/skincare-hero.png";
const imgScreenshot20260314At0301372 = "/skincare-bottle.png";
const imgImage1 = "/skincare-hero.png";

// --- Fixed Navbar ---

function NavLogo({ fill = "#09103A" }: { fill?: string }) {
  return (
    <div className="h-[26.516px] relative shrink-0 w-[57.601px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 71.9998 33.145"
      >
        <g id="NavGroup1">
          <path d={svgPathsNav.p31a1b080} fill={fill} />
          <path d={svgPathsNav.p11bb8600} fill={fill} />
          <path d={svgPathsNav.p498c800} fill={fill} />
          <path d={svgPathsNav.p22a4d100} fill={fill} />
          <path d={svgPathsNav.p35bb8e00} fill={fill} />
        </g>
      </svg>
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[19.2px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <path d={svgPathsArrow.p16c91580} fill="white" />
      </svg>
    </div>
  );
}

const PRODUCTS = [
  {
    id: "daily-face-cleanser",
    label: "JUNSO DAILY FACE CLEANSER",
  },
  { id: "sun-shield-spray", label: "JUNSO SUN SHIELD SPRAY" },
  {
    id: "acne-calming-toner-serum",
    label: "JUNSO ACNE CALMING TONER SERUM",
  },
  {
    id: "acne-spot-treatment",
    label: "JUNSO ACNE SPOT TREATMENT",
  },
  {
    id: "styling-hair-cream",
    label: "JUNSO STYLING HAIR CREAM",
  },
];

function ProductsDropdown({
  style,
  onMouseEnter,
  onMouseLeave,
}: {
  style: React.CSSProperties;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  return (
    <div
      className="fixed z-[60] w-[224px] overflow-hidden shadow-lg bg-[#09103a]"
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {PRODUCTS.map((product, i) => (
        <a
          key={i}
          href={`#${product.id}`}
          className="block px-[12.8px] py-[9.6px] cursor-pointer transition-colors duration-200 no-underline"
          style={{
            backgroundColor: hoveredIdx === i ? "rgba(255,255,255,0.1)" : "#09103a",
          }}
          onMouseEnter={() => setHoveredIdx(i)}
          onMouseLeave={() => setHoveredIdx(null)}
          onClick={() => { }}
        >
          <p
            className="font-['Inter:Light',sans-serif] font-light leading-[1.2] not-italic text-[12.8px] transition-colors duration-200"
            style={{ color: "white" }}
          >
            {product.label}
          </p>
        </a>
      ))}
    </div>
  );
}

function FixedNavbar({
  onMobileMenuToggle,
  mobileMenuOpen,
}: {
  onMobileMenuToggle: () => void;
  mobileMenuOpen: boolean;
}) {
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    if (productsRef.current) {
      const rect = productsRef.current.getBoundingClientRect();
      setDropdownPos({ top: rect.bottom + 8, left: rect.left });
    }
    setProductsOpen(true);
  };

  const closeDropdown = () => {
    hideTimeoutRef.current = setTimeout(() => setProductsOpen(false), 80);
  };

  return (
    <>
      <div className="w-full bg-transparent">
        <div className="flex items-center justify-between px-4 md:px-[80px] py-[12.8px] md:py-[16px]">
          <NavLogo fill="white" />

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-[25.6px] items-center leading-[1.2] not-italic text-white text-[14.4px] tracking-[-0.32px] whitespace-nowrap">
            <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0">HOME</p>
            <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0">ABOUT</p>
            {/* Products dropdown trigger */}
            <div
              ref={productsRef}
              className="flex gap-[6.4px] items-center cursor-pointer"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0">PRODUCTS</p>
              <KeyboardArrowDown />
            </div>
            <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0">CONTACT</p>
            <p className="font-['Inter:Light',sans-serif] font-light relative shrink-0">SHOP</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop: cart icon */}
            <div className="hidden md:block relative shrink-0 size-[25.6px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <path d={svgPathsNav.p3b67fb00} fill="white" />
              </svg>
            </div>

            {/* Mobile: hamburger / close toggle */}
            <button
              className="md:hidden cursor-pointer bg-transparent border-none p-1 flex items-center justify-center"
              onClick={onMobileMenuToggle}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6.4 18.308L5.692 17.6L11.292 12L5.692 6.4L6.4 5.692L12 11.292L17.6 5.692L18.308 6.4L12.708 12L18.308 17.6L17.6 18.308L12 12.708L6.4 18.308Z" fill="white" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop dropdown — portalled to body to escape mix-blend-difference */}
      {productsOpen &&
        createPortal(
          <ProductsDropdown
            style={{ top: dropdownPos.top, left: dropdownPos.left }}
            onMouseEnter={() => {
              if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
              setProductsOpen(true);
            }}
            onMouseLeave={closeDropdown}
          />,
          document.body
        )}
    </>
  );
}

// --- Hero Section ---

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[9.6px] md:gap-[12.8px] items-start relative shrink-0 w-full">
      <div className="font-['Alethia_Pro:Regular',sans-serif] leading-none relative shrink-0 text-[38.4px] md:text-[74.4px] tracking-[-1.536px] md:tracking-[-2.976px] w-full">
        <p className="mb-0">YOUR SKIN.</p>
        <p>YOUR STANDARD.</p>
      </div>
      <div className="font-['Inter:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[12px] md:text-[14.4px] tracking-[-0.288px] w-full">
        <p className="mb-0">{`Men don't need complicated skincare routines.`}</p>
        <p>{`JUNSO focuses on precision formulas designed for men's skin.`}</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[19.2px] md:gap-[40px] items-start not-italic relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['Inter:Light',sans-serif] font-light leading-none relative shrink-0 text-[12.8px] md:text-[16px] w-full">
        PRECISION SKINCARE FOR MEN
      </p>
      <Frame51 />
    </div>
  );
}

function Frame() {
  return (
    <button
      className="bg-[#09103a] content-stretch flex items-center justify-center p-[11.2px] md:p-[12.8px] relative shrink-0 cursor-pointer border border-[#09103a] hover:opacity-80 transition-opacity duration-200"
      onClick={() => document.getElementById("lineup")?.scrollIntoView({ behavior: "smooth" })}
    >
      <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12.8px] md:text-[14.4px] text-white whitespace-nowrap">
        EXPLORE PRODUCTS
      </p>
    </button>
  );
}

// Desktop-only absolute text overlay
function Frame22() {
  return (
    <div className="hidden md:flex -translate-y-1/2 absolute content-stretch flex-col gap-[38.4px] items-start left-[80px] top-[calc(50%+96.4px)] w-[517.6px]">
      <Frame21 />
      <Frame />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f9f9f9] h-[100svh] min-h-[480px] relative shrink-0 w-full">

      {/* Desktop: two equal panels side-by-side */}
      <div className="hidden md:flex items-stretch h-full w-full">
        {/* Left panel — 50% width, text anchored to bottom */}
        <div className="w-1/2 bg-[#f9f9f9] flex flex-col justify-end px-[80px] py-[96px]">
          <div className="flex flex-col gap-[38.4px] items-start">
            <Frame21 />
            <Frame />
          </div>
        </div>
        {/* Right panel — 50% width, full-bleed image with subtle overlay */}
        <div className="w-1/2 relative overflow-hidden" data-name="Skincare Routine Close-Up 2">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <img
              alt=""
              className="absolute inset-0 size-full max-w-none object-cover"
              src={image_ae70ab7429a75b97a66b07c40e3ec811aae148d4}
            />
            <div className="absolute bg-[rgba(9,16,58,0.1)] inset-0" />
          </div>
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="md:hidden flex flex-col h-full">
        {/* Image top ~42% */}
        <div className="relative overflow-hidden" style={{ flex: "0 0 42%" }}>
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
            src={imgSkincareRoutineCloseUp2}
          />
        </div>
        {/* Text bottom */}
        <div className="flex-1 flex flex-col justify-center px-5 py-5 gap-5 overflow-hidden">
          <Frame21 />
          <Frame />
        </div>
      </div>

    </div>
  );
}

// --- Features Bar ---

function Dot({ id }: { id: string }) {
  return (
    <div className="hidden md:block relative shrink-0 size-[6.4px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <circle cx="4" cy="4" fill="var(--fill-0, #D9D9D9)" id={id} r="4" />
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f4f4f4] border-b border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="flex flex-wrap gap-x-[16px] md:gap-x-[25.6px] gap-y-[8px] items-center justify-center px-4 md:px-[80px] py-[16px] md:py-[25.6px] relative w-full">
          <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#09103a] text-[10.4px] md:text-[14.4px] tracking-[-0.208px] md:tracking-[-0.288px] whitespace-nowrap">
            CLINICALLY TESTED FORMULAS
          </p>
          <Dot id="Ellipse1a" />
          <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#09103a] text-[10.4px] md:text-[14.4px] tracking-[-0.208px] md:tracking-[-0.288px] whitespace-nowrap">
            NO FRAGRANCE, NO FILLER.
          </p>
          <Dot id="Ellipse1b" />
          <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#09103a] text-[10.4px] md:text-[14.4px] tracking-[-0.208px] md:tracking-[-0.288px] whitespace-nowrap">{`VEGAN & CRUELTY-FREE`}</p>
          <Dot id="Ellipse1c" />
          <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#09103a] text-[10.4px] md:text-[14.4px] tracking-[-0.208px] md:tracking-[-0.288px] whitespace-nowrap">
            DERMATOLOGIST APPROVED
          </p>
        </div>
      </div>
    </div>
  );
}

// --- Product Lineup ---

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] md:gap-[25.6px] items-center not-italic relative shrink-0 text-[#09103a] w-full md:w-[369.6px]">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[1.2] relative shrink-0 text-[14.4px] tracking-[-0.288px] whitespace-nowrap">
        THE LINEUP
      </p>
      <p className="font-['Alethia_Pro:Regular',sans-serif] leading-none min-w-full relative shrink-0 text-[25.6px] md:text-[38.4px] text-center tracking-[-1.024px] md:tracking-[-1.536px] w-[min-content]">
        FIVE PRODUCTS. ONE PRECISION ROUTINE.
      </p>
    </div>
  );
}

function ProductCard({
  imgH,
  imgW,
  imgLeft,
  imgTop,
  volume,
  title,
  description,
}: {
  imgH: string;
  imgW: string;
  imgLeft: string;
  imgTop: string;
  volume: string;
  title: string;
  description: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col gap-[16px] md:gap-[25.6px] items-start relative cursor-pointer w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image with zoom on hover */}
      <div className="bg-[#f9f9f9] h-[160px] md:h-[275.2px] overflow-clip relative shrink-0 w-full">
        <div
          className={`absolute ${imgH} ${imgW}`}
          style={{
            left: imgLeft,
            top: imgTop,
            transform: `translate(-50%, -50%) scale(${hovered ? 1.08 : 1})`,
            transition: "transform 0.6s ease-out",
          }}
        >
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={imgScreenshot20260314At0301372}
          />
        </div>
      </div>

      {/* Divider + product info */}
      <div className="content-stretch flex flex-col gap-[12.8px] md:gap-[19.2px] items-start relative shrink-0 w-full">
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-0.4px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 270.4 1">
              <path
                d="M0 0.5H270.4"
                stroke={hovered ? "#09103a" : "#d9d9d9"}
                style={{ transition: "stroke 0.3s ease" }}
              />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[9.6px] md:gap-[12.8px] items-start leading-[1.2] relative shrink-0 text-[#09103a] w-full">
          <p className="font-['Inter:Light',sans-serif] font-light not-italic relative shrink-0 text-[11.2px] md:text-[14.4px] tracking-[-0.288px] w-full">
            {volume}
          </p>
          <div className="content-stretch flex flex-col gap-[4.8px] md:gap-[6.4px] items-start relative shrink-0 w-full">
            <p className="font-['Alethia_Pro:Regular',sans-serif] not-italic relative shrink-0 text-[12px] md:text-[16px] tracking-[-0.24px] md:tracking-[-0.32px] w-full">
              {title}
            </p>
            {/* Description: always visible on mobile, fades in on desktop hover */}
            <p
              className="font-['Inter:Light_Italic',sans-serif] font-light italic relative shrink-0 text-[10.4px] md:text-[14.4px] tracking-[-0.208px] md:tracking-[-0.288px] w-full transition-opacity duration-300"
              style={{ opacity: hovered ? 1 : 0 }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  const cards = [
    { volume: "100ml", title: "JUNSO DAILY FACE CLEANSER", description: "Removes oil & impurities. Starts clean." },
    { volume: "100ml", title: "JUNSO SUN SHIELD SPRAY", description: "Brightens & exfoliates. Refines skin texture." },
    { volume: "100ml", title: "JUNSO ACNE CALMING TONER SERUM", description: "Protects against UV damage. All day defence." },
    { volume: "100ml", title: "JUNSO ACNE SPOT TREATMENT", description: "Repairs skin while you sleep. Wake up renewed." },
    { volume: "100ml", title: "JUNSO STYLING HAIR CREAM", description: "Deep hydration. Locks in moisture all day." },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-[12.8px] relative shrink-0 w-full">
      {cards.map((card, i) => (
        <ProductCard
          key={i}
          imgH="h-[136.8px] md:h-[216.8px]"
          imgW="w-[94.4px] md:w-[149.6px]"
          imgLeft="calc(50% + 0.24px)"
          imgTop="calc(50% - 0.4px)"
          volume={card.volume}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

function Frame1() {
  return null;
}

function Frame28() {
  return (
    <div id="lineup" className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[38.4px] md:gap-[65.6px] items-center relative w-full px-4 md:px-[80px] py-[48px] md:py-[96px]">
          <Frame19 />
          <Frame30 />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

// --- Philosophy Banner ---

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] md:gap-[19.2px] items-start not-italic relative shrink-0 text-center text-white w-full">
      <p className="font-['Alethia_Pro:Regular',sans-serif] leading-none relative shrink-0 text-[28.8px] md:text-[51.2px] tracking-[-1.152px] md:tracking-[-2.048px] w-full">
        EVERY FORMULA HAS A REASON.
      </p>
      <p className="font-['Inter:Light',sans-serif] font-light leading-[1.4] md:leading-[1.2] relative shrink-0 text-[12.8px] md:text-[16px] tracking-[-0.256px] md:tracking-[-0.32px] w-full">
        {`We don't add ingredients for marketing.`}
        <br aria-hidden="true" />
        We add them because the skin needs them.
        <br aria-hidden="true" />
        No trends. No overclaims. Just science.
      </p>
    </div>
  );
}

function Frame4() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="content-stretch flex items-center justify-center p-[11.2px] md:p-[12.8px] relative shrink-0 cursor-pointer transition-colors duration-200"
      style={{ backgroundColor: hovered ? "white" : "transparent" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
      <p
        className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12.8px] md:text-[14.4px] whitespace-nowrap transition-colors duration-200"
        style={{ color: hovered ? "#09103a" : "white" }}
      >
        LEARN ABOUT OUR BRAND
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="flex flex-col gap-[25.6px] md:gap-[38.4px] items-center px-5 md:px-0 py-12 md:py-0 text-center relative z-10 md:absolute md:-translate-x-1/2 md:left-1/2 md:top-[113.6px] w-full md:w-[464px]">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[1.2] not-italic relative shrink-0 text-[14.4px] text-center text-white tracking-[-0.288px]">
        THE JUNSO PHILOSOPHY
      </p>
      <Frame45 />
      <Frame4 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="min-h-[384px] md:h-[544px] overflow-clip relative shrink-0 w-full flex items-center md:block">
      <div className="absolute inset-0" data-name="image 1">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img
            alt=""
            className="absolute inset-0 size-full max-w-none object-cover object-center"
            src={imgPhilosophyBanner}
          />
          <div className="absolute bg-[rgba(0,0,0,0.45)] inset-0" />
        </div>
      </div>
      <Frame40 />
    </div>
  );
}

// --- Product Detail Rows ---

interface ProductDetailRowProps {
  id: string;
  imageOnLeft: boolean;
  volume: string;
  name: string;
  tagline: string;
  body: string;
  footer: string;
}

function ProductDetailRow({
  id,
  imageOnLeft,
  volume,
  name,
  tagline,
  body,
  footer,
}: ProductDetailRowProps) {
  const imageBlock = (
    <div className="bg-[#f9f9f9] w-full md:flex-[1_0_0] h-[224px] md:h-[444px] overflow-clip relative shrink-0">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[190.4px] md:h-[378.4px] left-[calc(50%+0.4px)] top-1/2 w-[132px] md:w-[261.6px]">
        <img
          alt={name}
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={imgScreenshot20260314At0301372}
        />
      </div>
    </div>
  );

  const textBlock = (
    <div className="w-full md:flex-[1_0_0] md:min-h-px md:min-w-px relative md:self-stretch">
      <div className="flex flex-col justify-center h-full">
        <div className="content-stretch flex flex-col gap-[16px] md:gap-[25.6px] items-start justify-center py-6 md:py-[25.6px] relative w-full">
          <p className="font-['Inter:Light',sans-serif] font-light leading-[1.2] not-italic relative shrink-0 text-[#09103a] text-[12.8px] md:text-[14.4px] tracking-[-0.288px]">
            {volume}
          </p>
          <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#09103a] text-[20.8px] md:text-[25.6px] tracking-[-0.416px] md:tracking-[-0.512px]">
            {name}
          </p>
          <button className="bg-[#09103a] content-stretch flex items-center justify-center p-[11.2px] md:p-[12.8px] relative shrink-0 cursor-pointer border border-transparent hover:border-[#09103a] hover:bg-transparent transition-colors duration-200 group">
            <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12.8px] md:text-[14.4px] text-white whitespace-nowrap group-hover:text-[#09103a] transition-colors duration-200">
              SEE DETAILS
            </p>
          </button>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.4px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 506 1">
                <path d="M0 0.5H506" stroke="var(--stroke-0, #F4F4F4)" />
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-col font-['Inter:Light',sans-serif] font-light gap-[9.6px] md:gap-[12.8px] items-start leading-[1.5] not-italic relative shrink-0 text-[#09103a] text-[12px] md:text-[14.4px] w-full">
            <p className="relative shrink-0 w-full">{tagline}</p>
            <p className="relative shrink-0 w-full">{body}</p>
            <p className="relative shrink-0 w-full">{footer}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      id={id}
      className="content-stretch flex flex-col md:flex-row gap-8 md:gap-[80px] items-start relative shrink-0 w-full scroll-mt-[64px]"
    >
      {imageOnLeft ? imageBlock : textBlock}
      {imageOnLeft ? textBlock : imageBlock}
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] md:gap-[80px] items-center relative w-full px-4 md:px-[200px] py-[48px] md:py-[96px]">
          <ProductDetailRow
            id="daily-face-cleanser"
            imageOnLeft={true}
            volume="100ml"
            name="JUNSO DAILY FACE CLEANSER"
            tagline="Start every routine right."
            body="Remove overnight oils and environmental residue without stripping your skin's moisture barrier. pH-balanced formula, activated foam technology."
            footer="Clinically tested. Dermatologist approved."
          />
          <ProductDetailRow
            id="sun-shield-spray"
            imageOnLeft={false}
            volume="150ml"
            name="JUNSO SUN SHIELD SPRAY"
            tagline="Protect what you've built."
            body="Lightweight SPF50 spray shields against UVA & UVB rays without white cast or greasiness. Water-resistant, breathable formula."
            footer="Clinically tested. Dermatologist approved."
          />
        </div>
      </div>
    </div>
  );
}

// --- Three Steps Routine ---

function Frame56() {
  return (
    <div className="content-stretch flex flex-1 flex-col gap-[19.2px] md:gap-[38.4px] items-start relative">
      <p className="font-['Inter:Light',sans-serif] font-light leading-[1.2] relative shrink-0 text-[14.4px] tracking-[-0.288px] w-full">
        THE SIMPLE ROUTINE
      </p>
      <p className="font-['Alethia_Pro:Regular',sans-serif] leading-none relative shrink-0 text-[35.2px] md:text-[51.2px] tracking-[-1.408px] md:tracking-[-2.048px] w-full">
        THREE STEPS.
        <br aria-hidden="true" />
        ALL YOU NEED.
      </p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-6 md:gap-[12.8px] items-start not-italic relative shrink-0 text-[#09103a] w-full">
      <Frame56 />
      <p className="font-['Inter:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[12px] md:text-[14.4px] md:text-right w-full md:w-[382.4px]">{`Form was founded on a single conviction: that effective skincare doesn't require complexity. We distil decades of cosmetic science.`}</p>
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="relative shrink-0 size-[22.4px] md:size-[25.6px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d={svgPaths.pd351e80} fill="var(--fill-0, black)" />
      </svg>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white flex-1 relative">
      <div className="content-stretch flex flex-col items-start justify-between p-[16px] md:p-[19.2px] relative min-h-[160px] md:min-h-[208px] gap-6 md:gap-0">
        <ShieldIcon />
        <div className="content-stretch flex flex-col gap-[12.8px] md:gap-[16px] items-start not-italic relative shrink-0 text-[#09103a] w-full">
          <p className="font-['Alethia_Pro:Regular',sans-serif] leading-none relative shrink-0 text-[11.2px] md:text-[12.8px] tracking-[-0.448px] md:tracking-[-0.512px] w-full">
            01 – CLEANSE
          </p>
          <div className="content-stretch flex flex-col gap-[4.8px] md:gap-[6.4px] items-start relative shrink-0 w-full">
            <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[17.6px] md:text-[20.8px] tracking-[-0.352px] md:tracking-[-0.416px] w-full">{`Remove & Reset`}</p>
            <p className="font-['Inter:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[11.2px] md:text-[14.4px] w-full">
              Remove overnight oils and environmental residue. Start clean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-white flex-1 relative">
      <div className="content-stretch flex flex-col items-start justify-between p-[16px] md:p-[19.2px] relative min-h-[160px] md:min-h-[208px] gap-6 md:gap-0">
        <ShieldIcon />
        <div className="content-stretch flex flex-col gap-[12.8px] md:gap-[16px] items-start not-italic relative shrink-0 text-[#09103a] w-full">
          <p className="font-['Alethia_Pro:Regular',sans-serif] leading-none relative shrink-0 text-[11.2px] md:text-[12.8px] tracking-[-0.448px] md:tracking-[-0.512px] whitespace-nowrap">
            02 – TREAT
          </p>
          <div className="content-stretch flex flex-col gap-[4.8px] md:gap-[6.4px] items-start relative shrink-0 w-full">
            <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[17.6px] md:text-[20.8px] tracking-[-0.352px] md:tracking-[-0.416px] w-full">{`Target & Repair`}</p>
            <p className="font-['Inter:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[11.2px] md:text-[14.4px] w-full">
              Apply your serum or toner while skin is still receptive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white flex-1 relative">
      <div className="content-stretch flex flex-col items-start justify-between p-[16px] md:p-[19.2px] relative min-h-[160px] md:min-h-[208px] gap-6 md:gap-0">
        <ShieldIcon />
        <div className="content-stretch flex flex-col gap-[12.8px] md:gap-[16px] items-start not-italic relative shrink-0 text-[#09103a] w-full">
          <p className="font-['Alethia_Pro:Regular',sans-serif] leading-none relative shrink-0 text-[11.2px] md:text-[12.8px] tracking-[-0.448px] md:tracking-[-0.512px] whitespace-nowrap">
            03 – PROTECT
          </p>
          <div className="content-stretch flex flex-col gap-[4.8px] md:gap-[6.4px] items-start relative shrink-0 w-full">
            <p className="font-['Alethia_Pro:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[17.6px] md:text-[20.8px] tracking-[-0.352px] md:tracking-[-0.416px] w-full">{`Lock & Defend`}</p>
            <p className="font-['Inter:Light',sans-serif] font-light leading-[1.5] relative shrink-0 text-[11.2px] md:text-[14.4px] w-full">
              Lock in moisture. Shield against UV, face the day with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[9.6px] md:gap-[28.8px] items-start justify-center relative shrink-0 w-full">
      <Frame58 />
      <Frame61 />
      <Frame64 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#f9f9f9] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[38.4px] md:gap-[64px] items-start relative w-full px-4 md:px-[200px] py-[48px] md:py-[96px]">
        <Frame55 />
        <Frame57 />
      </div>
    </div>
  );
}

// --- Root Component ---

export default function JunsoLandingPageWebsite() {
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [annHeight, setAnnHeight] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const annRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem("junso_announcement_dismissed");
    if (!dismissed) setShowAnnouncement(true);
  }, []);

  // Track announcement bar height so navbar sits right below it
  useEffect(() => {
    if (!annRef.current) return;
    const observer = new ResizeObserver(() => {
      setAnnHeight(annRef.current?.offsetHeight ?? 0);
    });
    observer.observe(annRef.current);
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleDismiss = () => {
    localStorage.setItem("junso_announcement_dismissed", "true");
    setShowAnnouncement(false);
  };

  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="Junso Landing Page Website"
    >
      {/* Announcement bar — fixed, no blend */}
      <div ref={annRef} className="fixed top-0 left-0 right-0 z-[51]">
        {showAnnouncement && <AnnouncementBar onClose={handleDismiss} />}
      </div>

      {/* Navbar — fixed, mix-blend-difference */}
      <div
        className="fixed left-0 right-0 z-50 mix-blend-difference"
        style={{ top: annHeight }}
      >
        <FixedNavbar
          onMobileMenuToggle={() => setMobileMenuOpen((v) => !v)}
          mobileMenuOpen={mobileMenuOpen}
        />
      </div>

      {/* Mobile full-screen menu — outside blend container */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed left-0 right-0 bottom-0 z-[100] bg-[#09103a] flex flex-col overflow-y-auto"
          style={{ top: annHeight }}
        >
          {/* Menu header */}
          <div className="flex items-center justify-between px-4 py-[12.8px] shrink-0">
            <NavLogo fill="white" />
            <button
              className="cursor-pointer bg-transparent border-none p-1 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6.4 18.308L5.692 17.6L11.292 12L5.692 6.4L6.4 5.692L12 11.292L17.6 5.692L18.308 6.4L12.708 12L18.308 17.6L17.6 18.308L12 12.708L6.4 18.308Z" fill="white" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <div className="flex flex-col px-6 pt-6 pb-12 gap-0">
            {["HOME", "ABOUT", "CONTACT", "SHOP"].map((item) => (
              <button
                key={item}
                className="text-left font-['Inter:Light',sans-serif] font-light text-white text-[20.8px] tracking-[-0.4px] py-4 border-b border-white/10 bg-transparent cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </button>
            ))}

            {/* Products with sub-links */}
            <div className="py-4 border-b border-white/10">
              <p className="font-['Inter:Light',sans-serif] font-light text-white text-[20.8px] tracking-[-0.4px] mb-4">
                PRODUCTS
              </p>
              <div className="flex flex-col gap-3 pl-4">
                {PRODUCTS.map((p) => (
                  <a
                    key={p.id}
                    href={`#${p.id}`}
                    className="font-['Inter:Light',sans-serif] font-light text-white/60 text-[12px] no-underline tracking-[-0.24px]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {p.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page content */}
      <div className="w-full flex flex-col items-start">
        <Frame3 />
        <Frame29 />
        <Frame28 />
        <Frame39 />
        <Frame41 />
        <Frame54 />
        <ConfidenceBannerSection />
        <FooterSection />
        <CopyrightBar />
      </div>
    </div>
  );
}