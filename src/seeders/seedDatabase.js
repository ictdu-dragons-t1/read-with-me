import { seedBooks } from "./bookSeeder";
import { seedGenres } from "./genreSeeder";
import { seedStories } from "./storySeeder";

const seedDatabase = async () => {
  const isSeeding = localStorage.getItem("seeding");

  if (isSeeding === "true") {
    return;
  }

  const handleBeforeUnload = () => {
    localStorage.removeItem("seeding");
  };

  try {
    console.log("Seeding database...");
    localStorage.setItem("seeding", "true");
    window.addEventListener("beforeunload", handleBeforeUnload);

    await seedGenres();
    await seedBooks();
    await seedStories();

    console.log('Database seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    localStorage.removeItem("seeding");
    window.removeEventListener("beforeunload", handleBeforeUnload);
  }
};

export default seedDatabase;
