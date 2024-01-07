import { FunctionalComponent } from "preact";
import style from "./app.module.css";
import { Header, Subheader } from "./components/typography";
import { Projects } from "./sections/projects";
import { SocialLinks } from "./sections/social-links";

const App: FunctionalComponent = () => (
  <div class={style.app}>
    <Header>Nick DeGroot</Header>
    <Subheader>Data Scientist and Software Engineer</Subheader>

    <SocialLinks />

    <Projects />
  </div>
);

export default App;
