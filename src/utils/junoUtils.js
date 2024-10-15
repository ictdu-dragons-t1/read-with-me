import { listDocs, setDoc } from "@junobuild/core";
import { nanoid } from "nanoid";

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

  const id = nanoid();

  return await setDoc({
    collection: "user_data",
    doc: {
      key: `user-data-${id}`,
      data: userData,
    },
  });
};
