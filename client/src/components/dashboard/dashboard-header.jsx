import { Menu } from 'lucide-react';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { stateDashboard } from '../../store/dashboard';
import DashMobile from './dash-mobile';

const DashboardHeader = () => {
  const { isOpen, setOpen } = stateDashboard();
  console.log(isOpen);
  return (
    <>
      <div className="w-full fixed right-0 left-0 top-0">
        <div className="flex justify-between bg-white max-md:bg-[#181722]">
          <div className="md:hidden flex items-center pl-5 gap-2">
            <div className="cursor-pointer" onClick={() => setOpen(true)}>
              <Menu className="text-white text-2xl" />
            </div>
            <img src="/logodash.png" width={147} alt="logo" />
          </div>
          <div className="text-end w-full flex items-center justify-end py-3 pr-5">
            <p className="mr-4 text-2xl text-[#4f5163] font-normal">
              Баланс: 0.00
            </p>
            <div className="p-2 rounded-full bg-[#4f5163] text-white text-xl hover:bg-blue-700 cursor-pointer">
              <MdPersonAddAlt1 />
            </div>
          </div>
        </div>
      </div>
      {isOpen && <DashMobile />}
    </>
  );
};

export default DashboardHeader;
