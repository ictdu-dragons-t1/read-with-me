import alice2 from "../assets/images/covers/Alice2.png";
import moby2 from "../assets/images/covers/Moby2.png";
import pride2 from "../assets/images/covers/Pride2.png";
import thewar2 from "../assets/images/covers/TheWar2.png";
import web2 from "../assets/images/covers/Web2.png";
import { setGenreDocs } from "../utils/junoUtils";

const genres = [
  {
    id: "genre-1",
    genreImage: pride2,
  },
  {
    id: "genre-2",
    genreImage: moby2,
  },
  {
    id: "genre-3",
    genreImage: web2,
  },
  {
    id: "genre-4",
    genreImage: alice2,
  },
  {
    id: "genre-5",
    genreImage: thewar2,
  },
];

export const seedGenres = async () => {
  await setGenreDocs(genres);
};
