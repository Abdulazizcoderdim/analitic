import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation } from 'react-router-dom';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div
      className={`flex justify-between  max-lg:flex-col gap-4 ${
        pathname === '/dashboard/users' ? 'max-w-6xl' : 'max-w-5xl'
      } max-w-5xl mx-auto px-5`}
    >
      <div className="flex sm:gap-5 gap-2 w-full max-sm:flex-col">
        <p className="text-[#888da8]">Выберете период</p>
        <div className="flex items-center p-1 border border-[#888da8] rounded-md max-w-48 w-full">
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            className="outline-none border-none max-w-20"
          />
          <span>-</span>
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            className="outline-none border-none max-w-20"
          />
        </div>
      </div>
      <div className="flex gap-5 w-full max-lg:flex-col">
        <div className="flex sm:gap-5 gap-2 max-sm:flex-col w-full">
          <p className="text-[#888da8] w-full">Выберете поток</p>
          <select
            defaultValue={'ne'}
            className="flex items-center px-1 border border-[#888da8] rounded-md max-w-48 w-full"
          >
            <option value="ne">Не указан</option>
            <option value="all">Все потоки</option>
          </select>
        </div>

        {pathname === '/dashboard/users' && (
          <label htmlFor="check" className="flex items-center gap-1">
            <input id="check" type="checkbox" />
            <p id="check" className="select-none">
              {' '}
              активированные
            </p>
          </label>
        )}

        <button className="px-4 py-2 text-sm rounded-md w-fit hover:bg-blue-700 bg-blue-600 text-white font-medium">
          Показать
        </button>
      </div>
    </div>
  );
};

export default Calendar;
