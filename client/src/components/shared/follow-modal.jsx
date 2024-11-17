import PropTypes from 'prop-types';
import { useRef } from 'react';

const FollowModal = ({ setFollow }) => {
  const modalRef = useRef(null);

  const closeModal = e => {
    if (e.target === modalRef.current) setFollow(false);
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed flex justify-center items-center z-[1002] inset-0 bg-black bg-opacity-40"
    >
      <div className="bg-middleBlue rounded-lg shadow-xl max-w-md w-full relative">
        as
      </div>
    </div>
  );
};

FollowModal.propTypes = {
  setFollow: PropTypes.func.isRequired,
};

export default FollowModal;
