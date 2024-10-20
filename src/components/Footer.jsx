import { Gift, HelpCircle, Settings, ShoppingCart } from "lucide-react";
import { useShallow } from 'zustand/react/shallow'
import useModalStore from "../stores/useModalStore";

const Footer = () => {
  const { openSettingsModal } = useModalStore(
    useShallow((state) => ({
      openSettingsModal: state.openSettingsModal,
    }))
  );

  const footerItems = [
    { name: "Support", icon: <HelpCircle size={16} /> },
    { name: "Settings", icon: <Settings size={16} />, onClick: openSettingsModal },
    { name: "Gift Cards", icon: <Gift size={16} /> },
    { name: "Merch", icon: <ShoppingCart size={16} /> },
  ];

  return (
    <div className="absolute z-40 bottom-0 left-0 flex justify-center lg:justify-start gap-4 p-4">
      {footerItems.map((item, index) => (
        <button
          key={index}
          className="text-gray-400 hover:text-white text-xs flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-110"
          onClick={item.onClick}
        >
          {item.icon}
          <span className="mt-1">{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Footer;
