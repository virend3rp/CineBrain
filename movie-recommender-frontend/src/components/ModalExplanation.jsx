// src/components/ModalExplanation.jsx
const Modal = ({ title, content, onClose }) => {
useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  return () => (document.body.style.overflow = 'auto');
}, [isOpen]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[999] overflow-y-auto">
      <div className="bg-gray-900 p-8 rounded-lg w-full max-w-2xl text-white relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-400 hover:text-red-400 text-2xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="text-sm space-y-3 leading-relaxed">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
