import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="flex justify-between  max-lg:flex-col gap-4 max-w-5xl mx-auto px-5">
      <div className="flex gap-5 w-full">
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
        <div className="flex gap-5 w-full">
          <p className="text-[#888da8]">Выберете поток</p>
          <select
            defaultValue={'ne'}
            className="flex items-center px-1 border border-[#888da8] rounded-md max-w-48 w-full"
          >
            <option value="ne">Не указан</option>
            <option value="all">Все потоки</option>
          </select>
        </div>
        <button className="px-4 py-2 text-sm rounded-md w-fit bg-blue-600 text-white font-medium">
          Показать
        </button>
      </div>
    </div>
  );
};

export default Calendar;
