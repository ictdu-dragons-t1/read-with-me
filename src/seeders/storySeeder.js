import add from "../assets/images/covers/Add.png";
import alice from "../assets/images/covers/Alice.png";
import jungle from "../assets/images/covers/Jungle.png";
import peter from "../assets/images/covers/Peter.png";
import robinson from "../assets/images/covers/Robinson.png";
import sawyer from "../assets/images/covers/Sawyer.png";
import treasure from "../assets/images/covers/Treasure.png";
import wild from "../assets/images/covers/Wild.png";
import { setStoryDocs } from "../utils/junoUtils";

const stories = [
  {
    id: "story-1",
    title: "Alice's Adventures in Wonderland",
    keyImage: alice,
  },
  {
    id: "story-2",
    title: "Add",
    keyImage: add,
  },
  {
    id: "story-3",
    title: "Treasure Island",
    keyImage: treasure,
  },
  {
    id: "story-4",
    title: "The Jungle Book",
    keyImage: jungle,
  },
  {
    id: "story-5",
    title: "Peter Pan",
    keyImage: peter,
  },
  {
    id: "story-6",
    title: "The Adventures of Tom Sawyer",
    keyImage: sawyer,
  },
  {
    id: "story-7",
    title: "The Call of the Wild",
    keyImage: wild,
  },
  {
    id: "story-8",
    title: "The Swiss Family Robinson",
    keyImage: robinson,
  },
];

export const seedStories = async () => {
  await setStoryDocs(stories);
};
