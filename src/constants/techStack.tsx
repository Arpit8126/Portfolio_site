import {
  SiC,
  SiExpress,
  SiJira,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiPhp,
  SiPostman,
  SiRedux,
  SiStorybook,
} from "react-icons/si";
import { TbBrandCpp, TbBrandMysql } from "react-icons/tb";
import {
  FaBootstrap,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaReact,
  FaSlack,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";

// Professional Frontend, Backend & Tools stack
export const techStack: any = [
  {
    id: 1,
    name: "Frontend",
    description:
      "Technologies used to build user interfaces and web experiences",
    children: [
      {
        id: 1,
        name: "HTML5",
        icon: <FaHtml5 className="text-4xl" />,
        type: "markup",
      },
      {
        id: 2,
        name: "CSS3",
        icon: <IoLogoCss3 className="text-4xl" />,
        type: "style",
      },
      {
        id: 3,
        name: "JavaScript",
        icon: <FaJs className="text-4xl" />,
        type: "language",
      },
      {
        id: 4,
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-4xl" />,
        type: "framework",
      },
      {
        id: 5,
        name: "Bootstrap",
        icon: <FaBootstrap className="text-4xl" />,
        type: "framework",
      },
      {
        id: 6,
        name: "Material UI",
        icon: <SiMui className="text-4xl" />,
        type: "library",
      },
      {
        id: 7,
        name: "React.js",
        icon: <FaReact className="text-4xl" />,
        type: "library",
      },
      {
        id: 8,
        name: "Next.js",
        icon: <RiNextjsFill className="text-4xl" />,
        type: "framework",
      },
    ],
  },
  {
    id: 2,
    name: "Backend",
    description: "Technologies for server-side development and databases",
    children: [
      {
        id: 1,
        name: "Node.js",
        icon: <FaNodeJs className="text-4xl" />,
        type: "runtime",
      },
      {
        id: 2,
        name: "Express.js",
        icon: <SiExpress className="text-4xl" />,
        type: "framework",
      },
      {
        id: 3,
        name: "Nest.js",
        icon: <SiNestjs className="text-4xl" />,
        type: "framework",
      },
      {
        id: 4,
        name: "Laravel",
        icon: <FaLaravel className="text-4xl" />,
        type: "framework",
      },
      {
        id: 5,
        name: "MongoDB",
        icon: <SiMongodb className="text-4xl" />,
        type: "database",
      },
      {
        id: 6,
        name: "PostgreSQL",
        icon: <BiLogoPostgresql className="text-4xl" />,
        type: "database",
      },
      {
        id: 7,
        name: "MySQL",
        icon: <TbBrandMysql className="text-4xl" />,
        type: "database",
      },
      // {
      //   id: 8,
      //   name: "C",
      //   icon: <SiC className="text-4xl" />,
      //   type: "language",
      // },
      // {
      //   id: 9,
      //   name: "C++",
      //   icon: <TbBrandCpp className="text-4xl" />,
      //   type: "language",
      // },
      {
        id: 10,
        name: "PHP",
        icon: <SiPhp className="text-4xl" />,
        type: "language",
      },
    ],
  },
  {
    id: 3,
    name: "Tools & Others",
    description:
      "Supporting tools, state management, collaboration, and API testing",
    children: [
      {
        id: 1,
        name: "Redux",
        icon: <SiRedux className="text-4xl" />,
        type: "state management",
      },
      {
        id: 2,
        name: "GitHub",
        icon: <FaGithub className="text-4xl" />,
        type: "version control",
      },
      {
        id: 3,
        name: "Storybook",
        icon: <SiStorybook className="text-4xl" />,
        type: "UI documentation",
      },
      {
        id: 4,
        name: "Jira",
        icon: <SiJira className="text-4xl" />,
        type: "project management",
      },
      {
        id: 5,
        name: "Slack",
        icon: <FaSlack className="text-4xl" />,
        type: "team communication",
      },
      {
        id: 6,
        name: "Postman",
        icon: <SiPostman className="text-4xl" />,
        type: "API testing",
      },
    ],
  },
];
