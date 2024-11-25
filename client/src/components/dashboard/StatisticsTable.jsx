import { statistikaData } from '../../constants';

const StatisticsTable = () => {
  return (
    <div className="w-full overflow-x-auto bg-white shadow-md rounded-lg p-6 mt-7">
      <h2 className="text-lg font-medium text-[#3b3f5c] mb-4">
        Статистика по дням
      </h2>
      <table className="w-full border-collapse min-w-[1000px] overflow-auto">
        <thead>
          <tr>
            <th rowSpan={2} className="border px-2 py-3 bg-white">
              Дата
            </th>
            <th colSpan={1} className="border px-2 py-3 bg-white text-center">
              Трафик
            </th>
            <th colSpan={2} className="border px-2 py-3 bg-white text-center">
              Пользователи
            </th>
            <th colSpan={4} className="border px-2 py-3 bg-white text-center">
              Подписки
            </th>
            <th colSpan={3} className="border px-2 py-3 bg-white text-center">
              Отмены
            </th>
            <th colSpan={3} className="border px-2 py-3 bg-white text-center">
              Платежи
            </th>
            <th colSpan={2} className="border px-2 py-3 bg-white text-center">
              Финансы
            </th>
          </tr>
          <tr className="text-sm">
            <th className="border px-2 py-3 bg-white text-center">Визиты</th>
            <th className="border px-2 py-3 bg-white text-center">
              Регистрации
            </th>
            <th className="border px-2 py-3 bg-white text-center">Активации</th>
            <th className="border px-2 py-3 bg-white text-center">Всего</th>
            <th className="border px-2 py-3 bg-white text-center">Start</th>
            <th className="border px-2 py-3 bg-white text-center">Key</th>
            <th className="border px-2 py-3 bg-white text-center">Combo</th>
            <th className="border px-2 py-3 bg-white text-center">Всего</th>
            <th className="border px-2 py-3 bg-white text-center">Key</th>
            <th className="border px-2 py-3 bg-white text-center">Combo</th>
            <th className="border px-2 py-3 bg-white text-center">Удачные</th>
            <th className="border px-2 py-3 bg-white text-center">Ребиллы</th>
            <th className="border px-2 py-3 bg-white text-center">
              Отклонённые
            </th>
            <th className="border px-2 py-3 bg-white text-center">Рефские</th>
            <th className="border px-2 py-3 bg-white text-center">Итого</th>
          </tr>
        </thead>
        <tbody className="text-[#3b3f5c]">
          {statistikaData.map((row, index) => (
            <tr
              key={row.date}
              className={
                index % 2 === 0
                  ? 'bg-[#F2F6F9]'
                  : ' hover:bg-[#F2F6F9] bg-white'
              }
            >
              <td className="border px-2 py-3">{row.date}</td>
              <td className="border px-2 py-3 text-center">{row.visits}</td>
              <td className="border px-2 py-3 text-center">
                <span className="cursor-pointer">{row.registrations}</span>
              </td>
              <td className="border px-2 py-3 text-center">
                <span className="cursor-pointer">{row.activations}</span>
              </td>
              <td className="border px-2 py-3 text-center">{row.total}</td>
              <td className="border px-2 py-3 text-center">{row.start}</td>
              <td className="border px-2 py-3 text-center">{row.key}</td>
              <td className="border px-2 py-3 text-center">{row.combo}</td>
              <td className="border px-2 py-3 text-center">
                {row.totalCancels}
              </td>
              <td className="border px-2 py-3 text-center">{row.keyCancels}</td>
              <td className="border px-2 py-3 text-center">
                {row.comboCancels}
              </td>
              <td className="border px-2 py-3 text-center">{row.successful}</td>
              <td className="border px-2 py-3 text-center">{row.rebills}</td>
              <td className="border px-2 py-3 text-center">{row.declined}</td>
              <td className="border px-2 py-3 text-center">{row.refunds}</td>
              <td className="border px-2 py-3 text-center">{row.total2}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-white font-medium">
            <td className="border px-2 py-3 text-xs">Всего (на странице)</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
            <td className="border px-2 py-3 text-center">0</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default StatisticsTable;
