import alice from "../assets/images/covers/Alice.png";
import moby from "../assets/images/covers/Moby.png";
import pride from "../assets/images/covers/Pride.png";
import thewar from "../assets/images/covers/TheWar.png";
import web from "../assets/images/covers/Web.png";
import { setBookDocs } from "../utils/junoUtils";

const books = [
  {
    id: "book-1",
    genreId: "genre-1",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    color: "bg-blue-500",
    coverImage: pride,
  },
  {
    id: "book-2",
    genreId: "genre-2",
    title: "Moby Dick",
    author: "Herman Melville",
    color: "bg-green-500",
    coverImage: moby,
  },
  {
    id: "book-3",
    genreId: "genre-3",
    title: "Charlotte's Web",
    author: "EB White",
    color: "bg-red-500",
    coverImage: web,
  },
  {
    id: "book-4",
    genreId: "genre-4",
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    color: "bg-yellow-500",
    coverImage: alice,
  },
  {
    id: "book-5",
    genreId: "genre-5",
    title: "The War of the Worlds",
    author: "H.G. Wells",
    color: "bg-purple-500",
    coverImage: thewar,
  },
];

export const seedBooks = async () => {
  await setBookDocs(books);
};
