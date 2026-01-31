import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/250788223733" // <-- Replace with your WhatsApp number (international format, no '+' or spaces)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppFloatingButton;
