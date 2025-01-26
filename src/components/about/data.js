import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { DiGit, DiGithub} from "react-icons/di";

const aboutData = [
  {
    id: 1,
    icon: <AiOutlineHtml5 />,
    iconText: "HTML",
    urlPath: "https://www.w3schools.com/html/",
  },
  {
    id: 2,
    icon: <FaCss3Alt />,
    iconText: "CSS",
    urlPath: "https://www.w3schools.com/css/",
  },
  {
    id: 3,
    icon: <IoLogoJavascript />,
    iconText: "JavaScript",
    urlPath: "https://www.w3schools.com/js/",
  },
  {
    id: 4,
    icon: <FaReact />,
    iconText: "React.js",
    urlPath: "https://www.w3schools.com/react/",
  },
  {
    id: 5,
    icon: <FaBootstrap />,
    iconText: "Bootstrap",
    urlPath: "https://www.w3schools.com/bootstrap/",
  },
  {
    id: 6,
    icon: <DiGit />,
    iconText: "Git",
    urlPath: "https://www.w3schools.com/git/",
  },
  {
    id: 7,
    icon: <DiGithub />,
    iconText: "Github",
    urlPath: "https://www.w3schools.com/whatis/whatis_github.asp",
  },
  // {
  //   id: 9,
  //   icon: <FaSass/>,
  //   iconText: "Sass",
  //   urlPath: "https://www.w3schools.com/react/",
  // },
];

export default aboutData;
