import almondy from "../assets/images/almondy.jpg";
import anima from "../assets/images/anima.jpg";
import avatarcountry from "../assets/images/avatarcountry.jpg";
import netclean from "../assets/images/netclean.jpg";
import snxbox from "../assets/images/snxbox.jpg";

interface Tag {
  name: string;
  url?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: Tag[];
  sourceUrl?: string;
}

const netlify: Tag = {
  name: "Netlify",
  url: "https://www.netlify.com/",
};

const nextJs: Tag = {
  name: "Next.js",
  url: "https://nextjs.org/",
};

const nestJs: Tag = {
  name: "Nest.js",
  url: "https://nestjs.com/",
};

const datoCms: Tag = {
  name: "DatoCMS",
  url: "https://www.datocms.com/",
};

const wordpress: Tag = {
  name: "Wordpress",
  url: "https://wordpress.com/",
};

const nuxtJs: Tag = {
  name: "Nuxt.js",
  url: "https://nuxtjs.org/",
};

const vueJs: Tag = {
  name: "Vue.js",
  url: "https://vuejs.org/",
};

const prisma: Tag = {
  name: "Prisma",
  url: "https://www.prisma.io/",
};

const tailwindCss: Tag = {
  name: "Tailwind CSS",
  url: "https://tailwindcss.com/",
};

const apollo: Tag = {
  name: "Apollo GraphQL",
  url: "https://www.apollographql.com/",
};

const googleCloudPlatform: Tag = {
  name: "Google Cloud Platform",
  url: "https://cloud.google.com/",
};

export const projects: Project[] = [
  {
    title: "NetClean",
    description:
      "Detect and block child sexual abuse material on business IT devices. Collaborated with Level9 in launching their new marketing website.",
    image: netclean,
    url: "https://netclean.com/",
    tags: [nextJs, datoCms, netlify],
  },
  {
    title: "Snxbox",
    description:
      "Do-it-yourself vending machine to deploy at your office. It's a fun side-project of mine.",
    image: snxbox,
    url: "https://snxbox.app/",
    sourceUrl: "https://github.com/nomadoda/snxbox",
    tags: [nextJs, nestJs, prisma, datoCms, googleCloudPlatform],
  },
  {
    title: "Almondy",
    description:
      "In collaboration with Level9, new marketing website for local cake manufacturer.",
    image: almondy,
    url: "https://www.almondy.com/sv/",
    tags: [tailwindCss, wordpress],
  },
  {
    title: "Anima",
    description:
      "Danish animal rights organisation. Website is under construction.",
    image: anima,
    url: "https://newsite.anima.dk/",
    tags: [nuxtJs, tailwindCss, wordpress],
  },
  {
    title: "Avatar country",
    description:
      "Fan page for a renowned metal band. Built an internal currency users could purchase merchandise, tickets and more with.",
    image: avatarcountry,
    url: "https://avatarcountry.com/",
    tags: [vueJs, apollo],
  },
];
