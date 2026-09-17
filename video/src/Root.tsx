import "@fontsource-variable/manrope";
import { Composition, Still, continueRender, delayRender } from "remotion";
import { JornadaPedido, JORNADA_FRAMES } from "./JornadaPedido";
import { OgImage } from "./OgImage";

const fontHandle = delayRender("Carregando a fonte Manrope");
document.fonts.load('800 40px "Manrope Variable"').then(() => document.fonts.ready).then(() => continueRender(fontHandle));

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="JornadaPedido" component={JornadaPedido} durationInFrames={JORNADA_FRAMES} fps={30} width={1080} height={1080} />
    <Still id="OgImage" component={OgImage} width={1200} height={630} />
  </>
);
