import { useState } from 'react';

const History = () => {
  const [predictions] = useState([
    { id: 13, date: '2024', score: 0, odds: '+2.5', amount: '14,750 ₽' },
    { id: 12, date: '2024', score: 0, odds: '+1.5', amount: '15,000 ₽' },
    { id: 11, date: '2024', score: 0, odds: '+2.0', amount: '12,500 ₽' },
    { id: 10, date: '2024', score: 5, odds: '+1.8', amount: '11,000 ₽' },
    { id: 9, date: '2024', score: 5, odds: '+2.2', amount: '13,250 ₽' },
    { id: 8, date: '2024', score: 5, odds: '+1.9', amount: '10,500 ₽' },
    { id: 7, date: '2024', score: 5, odds: '+2.1', amount: '14,000 ₽' },
    { id: 6, date: '2024', score: 5, odds: '+1.7', amount: '12,750 ₽' },
    { id: 5, date: '2024', score: 5, odds: '+2.3', amount: '11,500 ₽' },
    { id: 4, date: '2024', score: 5, odds: '+2.0', amount: '13,000 ₽' },
    { id: 3, date: '2024', score: 5, odds: '+1.8', amount: '12,250 ₽' },
    { id: 2, date: '2024', score: 5, odds: '+2.2', amount: '14,500 ₽' },
    { id: 1, date: '2024', score: 5, odds: '+1.9', amount: '13,750 ₽' },
  ]);

  return (
    <div className="bg-middleBlue py-10 px-5">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Banner */}
        <div className="bg-red-600 p-4 text-white flex items-center justify-between">
          <div className="flex items-center">
            <img
              loading="lazy"
              src="/leon150.png"
              alt="LEON"
              width={150}
              height={50}
              className="mr-4"
            />
            <div className="text-2xl font-bold">20000₽</div>
          </div>
          <button className="bg-yellow-500 px-4 py-2 rounded-md font-semibold text-black hover:bg-yellow-400 transition-colors">
            получить
          </button>
        </div>

        {/* Title */}
        <div className="p-4 bg-gray-50 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            История прогнозов
          </h2>
        </div>

        {/* Predictions Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Дата
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Счет
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Коэф.
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Сумма
                </th>
              </tr>
            </thead>
            <tbody>
              {predictions.map(prediction => (
                <tr
                  key={prediction.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">
                    {prediction.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {prediction.date}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
                        prediction.score > 0
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {prediction.score}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">
                    {prediction.odds}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-800">
                    {prediction.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
