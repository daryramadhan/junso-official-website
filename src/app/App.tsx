import JunsoLandingPageWebsite from "../imports/JunsoLandingPageWebsite";

const fontOverrides = `
  /* Map Figma font family names to loaded Google Fonts */
  [class*="Alethia_Pro"] {
    font-family: 'Cormorant Garamond', serif !important;
  }
  [class*="Inter:"] {
    font-family: 'Inter', sans-serif !important;
  }
  [class*="Inter:Light_Italic"] {
    font-family: 'Inter', sans-serif !important;
    font-style: italic !important;
  }

  /* Ensure the page stretches to full content height */
  html, body, #root {
    height: auto;
    min-height: 100%;
  }
`;

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: fontOverrides }} />
      <JunsoLandingPageWebsite />
    </div>
  );
}