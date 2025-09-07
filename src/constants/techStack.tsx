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
        name: "HTML",
        icon: <FaHtml5 className="text-4xl" />,
        type: "markup",
      },
      {
        id: 2,
        name: "CSS",
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
        name: "React.js",
        icon: <FaReact className="text-4xl" />,
        type: "library",
      },
      {
        id: 6,
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
        name: "MongoDB",
        icon: <SiMongodb className="text-4xl" />,
        type: "database",
      },
      {
        id: 4,
        name: "PostgreSQL",
        icon: <BiLogoPostgresql className="text-4xl" />,
        type: "database",
      },
      {
        id: 5,
        name: "MySQL",
        icon: <TbBrandMysql className="text-4xl" />,
        type: "database",
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
        name: "GitHub",
        icon: <FaGithub className="text-4xl" />,
        type: "version control",
      },
      
      
    ],
  },
];
