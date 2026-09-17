import { AbsoluteFill, Img, staticFile } from "remotion";
import { c, font } from "./theme";

export const OgImage: React.FC = () => (
  <AbsoluteFill style={{ background: c.white, fontFamily: font, flexDirection: "row" }}>
    <div style={{ flex: 1, padding: "64px 0 64px 72px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 26 }}>
      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: c.green }}>Advogado previdenciário · Marília e online</div>
      <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.035em", color: c.navy }}>Precisa resolver algo com o INSS?</div>
      <div style={{ fontSize: 30, lineHeight: 1.35, color: c.body, fontWeight: 500 }}>Aposentadoria, benefício negado, pedido parado, BPC/LOAS e pensão. Fale direto com o advogado.</div>
      <div style={{ alignSelf: "flex-start", padding: "16px 26px", borderRadius: 18, background: c.green, color: c.white, fontSize: 30, fontWeight: 800 }}>WhatsApp (14) 99673-4555</div>
    </div>
    <div style={{ width: 400, position: "relative", background: c.mint }}>
      <Img src={staticFile("ronaldo-moura.webp")} style={{ position: "absolute", bottom: 0, left: "50%", width: 380, transform: "translateX(-50%)" }} />
      <div style={{ position: "absolute", left: 24, right: 24, bottom: 24, padding: "14px 18px", borderRadius: 16, background: c.white, boxShadow: "0 10px 24px rgba(20,33,61,0.16)" }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: c.navy }}>Ronaldo Rodrigues Moura</div>
        <div style={{ fontSize: 19, fontWeight: 700, color: c.muted }}>Advogado · OAB/SP 367822</div>
      </div>
    </div>
  </AbsoluteFill>
);
