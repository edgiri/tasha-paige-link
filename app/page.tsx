import Image from "next/image";
import Countdown from "./components/Countdown";
import AgeGate from "./components/AgeGate";
import SocialMenu from "./components/SocialMenu";

const trackingLinks: Record<string, string> = {
  ig1:   "https://onlyfans.com/tashapaige/c33",
  ig2:   "https://onlyfans.com/tashapaige/c34",
  ig3:   "https://onlyfans.com/tashapaige/c35",
  ig4:   "https://onlyfans.com/tashapaige/c36",
  main:  "https://onlyfans.com/tashapaige/c37",
  tg:    "https://onlyfans.com/tashapaige/c38",
  default: "https://onlyfans.com/tashapaige",
};

const BadgeVerified = () => (
  <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#1d9bf0"/>
    <path d="M6 11.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function SocialBtn({ href, children, onClick }: { href?: string; children: React.ReactNode; onClick?: () => void }) {
  const style: React.CSSProperties = {
    width: 44, height: 44, borderRadius: "50%",
    display: "grid", placeItems: "center",
    textDecoration: "none", cursor: "pointer",
    border: "none", padding: 0,
    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
  };
  if (href) return <a href={href} target="_blank" rel="noreferrer" style={style}>{children}</a>;
  return <button onClick={onClick} style={{ ...style, background: "transparent" }}>{children}</button>;
}

// Logos en color SVG
const IconTT = () => (
  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#000", display: "grid", placeItems: "center" }}>
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
    </svg>
  </div>
);

const IconTG = () => (
  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, #2AABEE, #229ED9)", display: "grid", placeItems: "center" }}>
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/>
    </svg>
  </div>
);

const IconIG = () => (
  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", display: "grid", placeItems: "center" }}>
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="white" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
    </svg>
  </div>
);

const IconX = () => (
  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#000", display: "grid", placeItems: "center" }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.832l4.258 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
    </svg>
  </div>
);

const IconKick = () => (
  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#53FC18", display: "grid", placeItems: "center" }}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="black">
      <path d="M4 2h4v8l4-8h4l-5 10 5 10h-4l-4-8v8H4z"/>
    </svg>
  </div>
);

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  const LINK_MAIN = trackingLinks[ref ?? ""] ?? trackingLinks["default"];

  const NAME = "Tasha Paige";
  const PROMO = "70% OFF · JUST TODAY";
  const LINK_TG = "https://t.me/+7XL16Nk1h1U3MmFl";
  const LINK_KICK = "https://kick.com/tashapaige";

  const IG_ACCOUNTS = [
    { label: "tashaxpaige", url: "https://www.instagram.com/tashaxpaige" },
    { label: "aussietasha", url: "https://www.instagram.com/aussietasha" },
    { label: "verytasha", url: "https://www.instagram.com/verytasha/" },
    { label: "tashingaround", url: "https://www.instagram.com/tashingaround/" },
  ];

  const TT_ACCOUNTS = [
    { label: "anothertashapaige (260k)", url: "https://www.tiktok.com/@anothertashapaige" },
    { label: "officialtashapaige (41k)", url: "https://www.tiktok.com/@officialtashapaige" },
    { label: "tashapaigeagain (11k)", url: "https://www.tiktok.com/@tashapaigeagain" },
  ];

  const X_ACCOUNTS = [
    { label: "realtashapaige", url: "https://x.com/realtashapaige" },
    { label: "tashapaigeee", url: "https://x.com/tashapaigeee" },
  ];

  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", position: "relative", overflow: "hidden", background: "#000", padding: "clamp(12px, 4vw, 28px)" }}>
      <Image src="/bg.jpg" alt="background" fill priority style={{ objectFit: "cover", opacity: 0.5 }} />

      <div style={{ position: "relative", zIndex: 1, width: "min(400px, 92vw)", borderRadius: 28, overflow: "hidden", color: "white" }}>

        {/* HERO */}
        <div style={{ position: "relative", width: "100%", height: "clamp(320px, 70vw, 440px)" }}>
          <Image src="/avatar.jpg" alt="Tasha Paige" fill priority style={{ objectFit: "cover", objectPosition: "top" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "65%", background: "linear-gradient(to bottom, transparent, #000)" }} />

          {/* Nombre */}
          <div style={{ position: "absolute", bottom: 58, left: 0, right: 0, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
            <span style={{ fontSize: "clamp(18px, 4.5vw, 24px)", fontWeight: 800 }}>{NAME}</span>
            <BadgeVerified />
          </div>

          {/* Socials */}
          <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, display: "flex", gap: 10, justifyContent: "center" }}>
            <SocialBtn href={LINK_KICK}><IconKick /></SocialBtn>
            <SocialBtn href={LINK_TG}><IconTG /></SocialBtn>
            <SocialMenu accounts={IG_ACCOUNTS}><IconIG /></SocialMenu>
            <SocialMenu accounts={TT_ACCOUNTS}><IconTT /></SocialMenu>
            <SocialMenu accounts={X_ACCOUNTS}><IconX /></SocialMenu>
          </div>
        </div>

        {/* BODY */}
        <div style={{ background: "#000", display: "grid", placeItems: "center", gap: 14, padding: "16px 20px 28px" }}>
          <div style={{ opacity: 0.45, fontSize: 12, letterSpacing: 2, textTransform: "uppercase" }}>My socials</div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var ua = navigator.userAgent || '';
          if (ua.indexOf('Instagram') > -1 || ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1) {
            var overlay = document.createElement('div');
            overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;pointer-events:none;';
            overlay.innerHTML = '<div style="position:absolute;top:8px;right:8px;background:white;color:black;padding:14px 18px;border-radius:16px;font-family:sans-serif;font-size:15px;font-weight:700;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,0.3);max-width:180px;line-height:1.4;">Click ••• to open in external browser<div style="position:absolute;top:-10px;right:24px;width:0;height:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid white;"></div></div>';
            document.body.appendChild(overlay);
            setTimeout(function(){ overlay.remove(); }, 6000);
          }
        })();
      `}} />
    </main>
  );
}
