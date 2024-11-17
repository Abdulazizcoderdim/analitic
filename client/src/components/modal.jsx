import PropTypes from 'prop-types';
import { useRef } from 'react';

const Modal = ({ setOpen }) => {
  const modalRef = useRef(null);

  const closeModal = e => {
    if (e.target === modalRef.current) setOpen(false);
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed flex justify-center items-center z-[1002] inset-0 bg-black bg-opacity-40"
    >
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-6">
          <p className="text-gray-800 text-center mb-6">
            По вопросам отписки, оплаты и возврату средств обращайтесь через
            кнопки ниже. Менеджер отвечает в течении 1-2 часов в Пн-пт: с 10:00
            до 19:00 (Мск)
          </p>
          <div className="flex space-x-4">
            <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200">
              Позвонить
            </button>
            <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200">
              Написать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setOpen: PropTypes.func.isRequired,
};

export default Modal;
