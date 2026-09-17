import { AbsoluteFill, Easing, Sequence, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { c, font } from "./theme";

const SCENES = [
  { from: 0, length: 120 },
  { from: 120, length: 150 },
  { from: 270, length: 270 },
  { from: 540, length: 150 },
  { from: 690, length: 120 },
];

export const JORNADA_FRAMES = 810;

const useFade = (length: number) => {
  const frame = useCurrentFrame();
  return interpolate(frame, [0, 12, length - 12, length], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
};

const useRise = (delay = 0) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 200 } });
  return { opacity: s, transform: `translateY(${interpolate(s, [0, 1], [28, 0])}px)` };
};

const Step: React.FC<{ n: number; title: string; delay?: number }> = ({ n, title, delay = 0 }) => {
  const rise = useRise(delay);
  return (
    <div style={{ ...rise, display: "flex", alignItems: "center", gap: 24 }}>
      <div style={{ display: "grid", placeItems: "center", width: 84, height: 84, borderRadius: 24, background: c.green, color: c.white, fontSize: 46, fontWeight: 800 }}>{n}</div>
      <div style={{ fontSize: 60, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, color: c.navy }}>{title}</div>
    </div>
  );
};

const Frame: React.FC<{ length: number; children: React.ReactNode }> = ({ length, children }) => {
  const opacity = useFade(length);
  return (
    <AbsoluteFill style={{ opacity, padding: "96px 88px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 44, fontFamily: font }}>
      <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: c.green }}>Como funciona um pedido no INSS</div>
      {children}
    </AbsoluteFill>
  );
};

const Icon: React.FC<{ d: string; size?: number; color?: string }> = ({ d, size = 44, color = c.green }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

const ICON_CALENDAR = "M4 6h16v14H4zM8 3v5M16 3v5M4 10h16M9 15l2 2 4-4";
const ICON_DOC = "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4";
const ICON_CLOCK = "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2";
const ICON_X = "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9 9l6 6M15 9l-6 6";

const Pedido: React.FC = () => {
  const frame = useCurrentFrame();
  const phone = useRise(10);
  const pulse = 0.55 + 0.45 * Math.abs(Math.sin(frame / 9));
  return (
    <Frame length={SCENES[0].length}>
      <Step n={1} title="Você faz o pedido" />
      <div style={{ ...phone, alignSelf: "center", width: 400, padding: 16, borderRadius: 60, background: c.navy, boxShadow: "0 40px 80px rgba(20,33,61,0.25)" }}>
        <div style={{ height: 560, borderRadius: 46, background: c.white, padding: "26px 26px", display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ alignSelf: "center", width: 110, height: 26, borderRadius: 13, background: c.navy }} />
          <div style={{ fontSize: 30, fontWeight: 800, color: c.navy }}>Meu INSS</div>
          <div style={{ padding: 24, borderRadius: 22, border: `2px solid ${c.line}`, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontSize: 22, color: c.muted, fontWeight: 600 }}>Seu pedido</div>
            <div style={{ fontSize: 32, fontWeight: 800, color: c.navy, lineHeight: 1.15 }}>Aposentadoria por idade</div>
            <div style={{ alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 12, padding: "10px 18px", borderRadius: 999, background: c.amberBg, color: c.amber, fontSize: 26, fontWeight: 800 }}>
              <span style={{ width: 14, height: 14, borderRadius: 7, background: c.amber, opacity: pulse }} />
              Em análise
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "4px 6px" }}>
            <div style={{ width: "80%", height: 16, borderRadius: 8, background: c.line }} />
            <div style={{ width: "60%", height: 16, borderRadius: 8, background: c.line }} />
            <div style={{ width: "70%", height: 16, borderRadius: 8, background: c.line }} />
          </div>
        </div>
      </div>
      <div style={{ ...useRise(24), fontSize: 36, color: c.body, textAlign: "center", fontWeight: 600 }}>Pelo app Meu INSS ou pelo telefone 135.</div>
    </Frame>
  );
};

const Card: React.FC<{ icon: string; title: string; text: string; delay: number; tone?: "green" | "amber" | "red" }> = ({ icon, title, text, delay, tone = "green" }) => {
  const rise = useRise(delay);
  const color = tone === "amber" ? c.amber : tone === "red" ? c.red : c.green;
  const bg = tone === "amber" ? c.amberBg : tone === "red" ? c.redBg : c.mint;
  return (
    <div style={{ ...rise, display: "flex", gap: 28, alignItems: "flex-start", padding: "34px 36px", borderRadius: 32, background: c.white, border: `2px solid ${c.line}` }}>
      <div style={{ flexShrink: 0, display: "grid", placeItems: "center", width: 88, height: 88, borderRadius: 26, background: bg }}><Icon d={icon} size={50} color={color} /></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 42, fontWeight: 800, color: c.navy, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: 32, color: c.body, lineHeight: 1.3, fontWeight: 500 }}>{text}</div>
      </div>
    </div>
  );
};

const Analise: React.FC = () => (
  <Frame length={SCENES[1].length}>
    <Step n={2} title="O INSS confere tudo" />
    <Card icon={ICON_CALENDAR} title="Pode marcar perícia" text="Ou avaliação social, no caso do BPC." delay={14} />
    <Card icon={ICON_DOC} title="Pode pedir documentos" text="É a “exigência”. Ela tem prazo para ser respondida." delay={28} />
    <div style={{ ...useRise(44), fontSize: 34, color: c.body, fontWeight: 600 }}>Fique de olho no app e nas cartas do INSS.</div>
  </Frame>
);

const PRAZOS = [
  { label: "Salário-maternidade", days: 30 },
  { label: "Auxílio-doença", days: 45 },
  { label: "Pensão por morte", days: 60 },
  { label: "Aposentadoria e BPC", days: 90 },
];

const Prazos: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Frame length={SCENES[2].length}>
      <Step n={3} title="O INSS tem prazo para responder" />
      <div style={{ display: "flex", flexDirection: "column", gap: 30, marginTop: 8 }}>
        {PRAZOS.map((p, i) => {
          const start = 20 + i * 22;
          const progress = interpolate(frame, [start, start + 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
          const width = (p.days / 90) * 100 * progress;
          return (
            <div key={p.label} style={{ display: "flex", flexDirection: "column", gap: 12, opacity: interpolate(frame, [start - 10, start], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontSize: 38, fontWeight: 700, color: c.navy }}>{p.label}</div>
                <div style={{ fontSize: 44, fontWeight: 800, color: c.green, fontVariantNumeric: "tabular-nums" }}>{Math.round(p.days * progress)} dias</div>
              </div>
              <div style={{ height: 30, borderRadius: 15, background: c.line, overflow: "hidden" }}>
                <div style={{ width: `${width}%`, height: "100%", borderRadius: 15, background: c.green }} />
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ ...useRise(130), marginTop: "auto", fontSize: 27, lineHeight: 1.4, color: c.muted, fontWeight: 600 }}>
        Prazos máximos do acordo entre INSS e Ministério Público Federal, homologado pelo STF. Contam depois da perícia e dos documentos.
      </div>
    </Frame>
  );
};

const Problemas: React.FC = () => (
  <Frame length={SCENES[3].length}>
    <Step n={4} title="E se não der certo?" />
    <Card icon={ICON_CLOCK} tone="amber" title="Passou do prazo" text="Existem medidas para cobrar uma resposta do INSS." delay={14} />
    <Card icon={ICON_X} tone="red" title="Veio um “não”" text="Leia o motivo na carta. Em geral, há 30 dias para recorrer." delay={30} />
    <div style={{ ...useRise(46), fontSize: 34, color: c.body, fontWeight: 600 }}>O advogado confere qual caminho vale para o seu caso.</div>
  </Frame>
);

const Fechamento: React.FC = () => {
  const opacity = useFade(SCENES[4].length);
  return (
    <AbsoluteFill style={{ opacity, fontFamily: font, background: c.navy, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 96px", gap: 40 }}>
      <div style={{ ...useRise(0), fontSize: 92, fontWeight: 800, lineHeight: 1.02, letterSpacing: "-0.035em", color: c.white }}>Converse antes de desistir.</div>
      <div style={{ ...useRise(12), fontSize: 40, lineHeight: 1.35, color: "#c9d3e0", fontWeight: 500 }}>O Dr. Ronaldo Moura olha o seu caso e explica o próximo passo, em palavras simples.</div>
      <div style={{ ...useRise(24), alignSelf: "flex-start", padding: "26px 40px", borderRadius: 28, background: c.green, color: c.white, fontSize: 48, fontWeight: 800 }}>WhatsApp (14) 99673-4555</div>
      <div style={{ ...useRise(34), fontSize: 30, color: "#9fb0c4", fontWeight: 600 }}>Advogado · OAB/SP 367822 · Marília e online</div>
    </AbsoluteFill>
  );
};

export const JornadaPedido: React.FC = () => (
  <AbsoluteFill style={{ background: c.paper }}>
    <Sequence from={SCENES[0].from} durationInFrames={SCENES[0].length}><Pedido /></Sequence>
    <Sequence from={SCENES[1].from} durationInFrames={SCENES[1].length}><Analise /></Sequence>
    <Sequence from={SCENES[2].from} durationInFrames={SCENES[2].length}><Prazos /></Sequence>
    <Sequence from={SCENES[3].from} durationInFrames={SCENES[3].length}><Problemas /></Sequence>
    <Sequence from={SCENES[4].from} durationInFrames={SCENES[4].length}><Fechamento /></Sequence>
  </AbsoluteFill>
);
