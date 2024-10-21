import { useShallow } from "zustand/react/shallow";
import useModalStore from "../stores/useModalStore";
import { CloseButton, Loader, Modal } from "@mantine/core";
import seedDatabase from "../seeders/seedDatabase";
import { signOut } from "@junobuild/core";
import { useEffect, useState } from "react";

const SettingsModal = () => {
  const [isSeeding, setIsSeeding] = useState(false);

  const { isSettingsModalOpen, closeSettingsModal } = useModalStore(
    useShallow((state) => ({
      isSettingsModalOpen: state.isSettingsModalOpen,
      closeSettingsModal: state.closeSettingsModal,
    }))
  );

  const settingsItems = [
    {
      name: "Seed Database",
      onClick: () => {
        setIsSeeding(true);
        seedDatabase().then(() => {
          setIsSeeding(false);
          window.location.reload();
        });
      },
    },
    {
      name: "Sign Out",
      onClick: () => signOut(),
    },
  ];

  useEffect(() => {
    return () => closeSettingsModal();
  }, [closeSettingsModal]);

  return (
    <Modal
      opened={isSettingsModalOpen}
      onClose={closeSettingsModal}
      centered
      withCloseButton={false}
      styles={{
        content: {
          background:
            " linear-gradient(180deg, rgba(20,21,44,1) 0%, rgba(58,59,91,1) 100%)",
        },
      }}
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-white">Settings</h1>
        <CloseButton onClick={closeSettingsModal} />
      </div>

      {isSeeding && (
        <div className="flex justify-center mt-4">
          <Loader color="#e6a33e" />
        </div>
      )}

      <div className="flex flex-col space-y-4 mt-4">
        {settingsItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="text-white hover:text-[#e6a33e]"
          >
            {item.name}
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default SettingsModal;
