import { useState } from 'react';
import Modal from './modal';

const Provider = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="fixed right-4 p-2 top-1/2 rounded-full border-2 border-brown bg-middleBlue flex justify-center items-center cursor-pointer w-14 h-14"
      >
        <img src="/head.png" className="object-contain w-full h-full" alt="" />
      </div>

      {open && <Modal setOpen={setOpen} />}
    </>
  );
};

export default Provider;
