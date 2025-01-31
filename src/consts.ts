import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Jean Carlos",
  DESCRIPTION: "Hola soy Jean Carlos, +5 años de experiencia en proyectos de ingenieria, desarrollando soluciones para la industria y +50 proyectos eléctricos elaborados.",
  EMAIL: "jeancarlos.ingenieria@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION: "Bienvenido a mi sitio web personal!",
};

export const BLOG: Metadata = {
  TITLE: "Articulos",
  DESCRIPTION: "Una colección de articulos sobre temas que me apasionan.",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION:
    "Una colección de mis proyectos con reportes del proceso de diseño y ejecución.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X",
    HREF: "https://twitter.com/boogerbuttcheek",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/trevortylerlee",
  },
  {
    NAME: "Website",
    HREF: "https://trevortylerlee.com",
  },
  {
    NAME:"LinkedIn",
    HREF:"https://www.linkedin.com/in/trevor-tyler-lee/"
  }
];
