import { Providers } from "@/shared/ui";
import { LogoSvg } from "@/shared/ui/svg-components";
import { TranslatePanel } from "@/widgets/translate-panel";


const App = () => (
  <Providers>
    <div className="container">
      <LogoSvg />
      <TranslatePanel />
    </div>
  </Providers>
);

export default App;
