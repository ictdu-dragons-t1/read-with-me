import {
  getDoc,
  listAssets,
  listDocs,
  setDoc,
  setManyDocs,
  uploadFile,
} from "@junobuild/core";
import { nanoid } from "nanoid";

const GENRE_IMAGE_KEY = "genreImage";
const BOOK_IMAGE_KEY = "coverImage";

export const getUserDoc = async (user) => {
  const data = await listDocs({
    collection: "user_data",
    filter: {
      owner: user.owner,
    },
  });

  return data.items_length >= 1 ? data.items[0] : null;
};

export const setUserDoc = async (userData, userDoc = null) => {
  if (userDoc) {
    return await setDoc({
      collection: "user_data",
      doc: {
        ...userDoc,
        data: userData,
      },
    });
  }

  const id = userData.id || `user-data-${nanoid()}`;

  return await setDoc({
    collection: "user_data",
    doc: {
      key: id,
      data: userData,
    },
  });
};

export const uploadScannedDoc = async (scannedData) => {
  return await uploadFile({
    data: scannedData,
    collection: "scanned_documents",
  });
};

export const getScannedDocs = async (user) => {
  const data = await listAssets({
    collection: "scanned_documents",
    filter: {
      owner: user.owner,
    },
  });

  return data.items;
};

export const getBookDocsWithGenres = async () => {
  const books = await getBookDocs();
  const genres = await getGenreDocs();

  // Create dictionary of genre ids
  const genreDict = genres.reduce((acc, genre) => {
    acc[genre.data.id] = genre.data;
    return acc;
  }, {});

  // Map books to its data and genre
  return books.map((book) => ({
    ...book.data,
    genre: genreDict[book.data.genreId],
  }));
};

export const getBookDocs = async () => {
  const data = await listDocs({
    collection: "books",
  });

  return data.items;
};

export const getBookDoc = async (id) => {
  return await getDoc({
    collection: "books",
    key: id,
  });
};

export const setBookDocs = async (books) => {
  const mappedBooks = books.map(async (book) => {
    if (book.id) {
      const existingBook = await getBookDoc(book.id);

      if (existingBook) {
        return {
          collection: "books",
          doc: {
            ...existingBook,
            data: {
              ...existingBook.data,
              ...book,
            },
          },
        };
      }
    }

    // Add id to book data
    let bookData = { ...book, id: book.id || `book-${nanoid()}` };

    // Transform book image to url
    if (bookData[BOOK_IMAGE_KEY]) {
      bookData = await transformBookWithImageUrl(bookData, BOOK_IMAGE_KEY);
    }

    return {
      collection: "books",
      doc: {
        key: bookData.id,
        data: bookData,
      },
    };
  });

  return await setManyDocs({ docs: await Promise.all(mappedBooks) });
};

export const setBookDoc = async (book) => {
  let bookData = { ...book, id: book.id || `book-${nanoid()}` };

  // Transform book image to url
  if (bookData[BOOK_IMAGE_KEY]) {
    bookData = await transformBookWithImageUrl(bookData, BOOK_IMAGE_KEY);
  }

  // Add existing book if it exists
  const existingBook = await getBookDoc(bookData.id);

  return await setDoc({
    collection: "books",
    doc: {
      ...(existingBook ?? {}),
      key: bookData.id,
      data: {
        ...(existingBook?.data ?? {}),
        ...bookData,
      },
    },
  });
};

export const getGenreDocs = async () => {
  const data = await listDocs({
    collection: "genres",
  });

  return data.items;
};

export const getGenreDoc = async (id) => {
  return await getDoc({
    collection: "genres",
    key: id,
  });
};

export const setGenreDocs = async (genres) => {
  const mappedGenres = genres.map(async (genre) => {
    if (genre.id) {
      const existingGenre = await getGenreDoc(genre.id);

      if (existingGenre) {
        return {
          collection: "genres",
          doc: {
            ...existingGenre,
            data: {
              ...existingGenre.data,
              ...genre,
            },
          },
        };
      }
    }

    // Add id to genre data
    let genreData = { ...genre, id: genre.id || `genre-${nanoid()}` };

    // Transform genre image to url
    if (genreData[GENRE_IMAGE_KEY]) {
      genreData = await transformGenreWithImageUrl(genreData, GENRE_IMAGE_KEY);
    }

    return {
      collection: "genres",
      doc: {
        key: genreData.id,
        data: genreData,
      },
    };
  });

  return await setManyDocs({ docs: await Promise.all(mappedGenres) });
};

export const setGenreDoc = async (genre) => {
  let genreData = { ...genre, id: genre.id || `genre-${nanoid()}` };

  // Transform genre image to url
  if (genreData[GENRE_IMAGE_KEY]) {
    genreData = await transformGenreWithImageUrl(genreData, GENRE_IMAGE_KEY);
  }

  // Add existing genre if it exists
  const existingGenre = await getGenreDoc(genreData.id);

  return await setDoc({
    collection: "genres",
    doc: {
      ...(existingGenre ?? {}),
      key: genreData.id,
      data: {
        ...(existingGenre?.data ?? {}),
        ...genreData,
      },
    },
  });
};

export const uploadBookImageDoc = async (bookImage) => {
  return await uploadFile({
    filename: `book-image-${nanoid()}`,
    data: bookImage,
    collection: "book_images",
  });
};

export const uploadGenreImageDoc = async (genreImage) => {
  return await uploadFile({
    filename: `genre-image-${nanoid()}`,
    data: genreImage,
    collection: "genre_images",
  });
};

export const transformBookWithImageUrl = async (book, imageKey) => {
  // Convert image to blob file
  const genreImageFile = await fetch(book[imageKey]).then((res) => res.blob());

  // Upload image files to juno
  const genreImageUrl = await uploadBookImageDoc(genreImageFile).then(
    (res) => res.downloadUrl
  );

  return {
    ...book,
    [`${imageKey}Url`]: genreImageUrl, // Replace with url
  };
};

export const transformGenreWithImageUrl = async (genre, imageKey) => {
  // Convert image to blob file
  const genreImageFile = await fetch(genre[imageKey]).then((res) => res.blob());

  // Upload image files to juno
  const genreImageUrl = await uploadGenreImageDoc(genreImageFile).then(
    (res) => res.downloadUrl
  );

  return {
    ...genre,
    [`${imageKey}Url`]: genreImageUrl, // Replace with url
  };
};
