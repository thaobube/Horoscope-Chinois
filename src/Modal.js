import PropTypes from 'prop-types';

const Modal = ({
  title, visible, children, hideModal,
}) => {
  const myClass = `modal-overlay h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50 ${visible ? 'block' : 'hidden'}`;
  return (
    <div className={myClass}>
      <div className="bg-white rounded shadow-lg w-5/6 md:w-1/2 lg:w-1/3">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-semibold text-lg">{title}</h3>
          <button onClick={hideModal} className="text-black close-modal" type="button">X</button>
        </div>
        <div className="p-3">
          {children}
        </div>
        <div className="flex justify-end items-center w-100 border-t p-3">
          <button onClick={hideModal} className="bg-gray-600 hover:bg-gray-800 px-3 py-1 rounded text-white" type="button">Fermer</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  hideModal: PropTypes.func.isRequired,
};
export default Modal;
