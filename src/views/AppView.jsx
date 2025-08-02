import { NavbarView } from "./NavbarView";
import { Section1View } from "./Section1View";
import { Section2View } from "./Section2View";
import { Section3View } from "./Section3View";
import { Section4View } from "./Section4View";
import { Section5View } from "./Section5View";

export function AppView() {
  return (
    <div>
      <NavbarView />
      <Section1View />
      <Section2View />
      <Section3View />
      <Section4View />
      <Section5View />
    </div>
  );
}
