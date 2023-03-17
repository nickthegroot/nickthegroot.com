import { ProjectInfo } from "../components/project";
import classclock from "../static/classclock.png";
import coursearrival from "../static/coursearrival.png";
import gmusic from "../static/gmusic.png";
import homerooms from "../static/homerooms.png";
import recipe from "../static/recipe.png";

const Projects: ProjectInfo[] = [
  {
    title: "🍔 Recipe Recommendation",
    subtitle:
      '"Personalized Recipe Recommendation Using Heterogeneous Graphs" (2023)',
    url: "https://recipe.nickthegroot.com",
    image: recipe,
  },
  {
    title: "🏫 Homerooms",
    subtitle: "Say goodbye to paper slips!",
    url: "https://github.com/nickthegroot/homerooms",
    image: homerooms,
  },
  {
    title: "🕰 ClassClock",
    subtitle: "A better school scheduling tool",
    url: "https://classclock.app/",
    image: classclock,
  },
  {
    title: "🎶 vscode-gmusic",
    subtitle: "A VS Code extension that integrates with GPMDP",
    url: "https://marketplace.visualstudio.com/items?itemName=nbdeg.vscode-gmusic",
    image: gmusic,
  },
  {
    title: "📓 Course Arrival",
    subtitle: "Automatic scheduling helper for university courses",
    url: "https://devpost.com/software/course-arrival",
    image: coursearrival,
  },
];

export default Projects;
