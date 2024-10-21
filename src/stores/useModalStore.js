import { create } from "zustand";

const initialModalState = {
  isSettingsModalOpen: false,
  isScannerModalOpen: false,
};

const useModalStore = create((set) => ({
  ...initialModalState,
  openSettingsModal: () => set({ isSettingsModalOpen: true }),
  closeSettingsModal: () => set({ isSettingsModalOpen: false }),
  openScannerModal: () => set({ isScannerModalOpen: true }),
  closeScannerModal: () => set({ isScannerModalOpen: false }),
}));

export default useModalStore;
