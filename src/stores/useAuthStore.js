import { create } from "zustand";
import { getUserDoc, setUserDoc } from "../utils/junoUtils";

const initialAuthState = {
  user: undefined,
  userData: undefined,
  isLoading: true,
};

const useAuthStore = create((set, get) => ({
  ...initialAuthState,
  updateUser: async (user) => {
    if (!user) {
      set({ user: null, userData: null, isLoading: false });
      return;
    }
    const userDoc = await getUserDoc(user);
    set({ user, userData: userDoc, isLoading: false });
  },
  updateUserData: async (userData) => {
    set({ isLoading: true });

    const userDoc = await setUserDoc(userData, get().userData);

    set({ userData: userDoc, isLoading: false });
  },
}));

export default useAuthStore;
