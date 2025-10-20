export interface Artist {
  id: string;
  name: string;
  introText: string;
  aboutHeading: string;
  aboutText: string;
  desktopImage: string;
  mobileImage: string;
  slug: string;
}

export const artists: Artist[] = [
  {
    id: "miguel-bose",
    name: "Miguel Bosé",
    introText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    aboutHeading: "Sobre Miguel Bosé",
    aboutText:
      "Miguel Bosé es un reconocido artista con una carrera que abarca décadas en la música y el entretenimiento. Su talento único y carisma han cautivado a audiencias de todo el mundo, convirtiéndolo en una figura icónica de la cultura hispana.",
    desktopImage: "/images/bose.jpg",
    mobileImage: "/images/bose-mobile.jpg",
    slug: "miguel-bose",
  },
  {
    id: "flans",
    name: "Flans",
    introText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    aboutHeading: "Sobre Flans",
    aboutText:
      "Flans es un grupo musical que ha dejado una huella imborrable en la música pop mexicana. Con su estilo único y melodías inolvidables, han conquistado el corazón de millones de fans a lo largo de su exitosa carrera artística.",
    desktopImage: "/images/flan.jpg",
    mobileImage: "/images/flan-mobile.jpg",
    slug: "flans",
  },
];

export const getArtistBySlug = (slug: string): Artist | undefined => {
  return artists.find((artist) => artist.slug === slug);
};

export const getAllArtists = (): Artist[] => {
  return artists;
};
