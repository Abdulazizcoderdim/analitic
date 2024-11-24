import React, { useState } from 'react';

const StatisticsTable = () => {
  const [isScrollable, setIsScrollable] = useState(false);

  // Generate dates and data for the last 10 days
  const generateData = () => {
    const dates = Array.from({ length: 10 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toISOString().split('T')[0];
    }).reverse();

    return dates.map(date => ({
      date,
      traffic: { visits: 0 },
      users: { registrations: 0, activations: 0 },
      subscriptions: { total: 0, start: 0, key: 0, combo: 0 },
      cancellations: { total: 0, key: 0, combo: 0 },
      payments: { successful: 0, refunds: 0, declined: 0 },
      finances: { referral: 0, total: 0 },
    }));
  };

  const data = generateData();

  // Calculate totals
  const totals = data.reduce(
    (acc, row) => ({
      traffic: { visits: acc.traffic.visits + row.traffic.visits },
      users: {
        registrations: acc.users.registrations + row.users.registrations,
        activations: acc.users.activations + row.users.activations,
      },
      subscriptions: {
        total: acc.subscriptions.total + row.subscriptions.total,
        start: acc.subscriptions.start + row.subscriptions.start,
        key: acc.subscriptions.key + row.subscriptions.key,
        combo: acc.subscriptions.combo + row.subscriptions.combo,
      },
      cancellations: {
        total: acc.cancellations.total + row.cancellations.total,
        key: acc.cancellations.key + row.cancellations.key,
        combo: acc.cancellations.combo + row.cancellations.combo,
      },
      payments: {
        successful: acc.payments.successful + row.payments.successful,
        refunds: acc.payments.refunds + row.payments.refunds,
        declined: acc.payments.declined + row.payments.declined,
      },
      finances: {
        referral: acc.finances.referral + row.finances.referral,
        total: acc.finances.total + row.finances.total,
      },
    }),
    {
      traffic: { visits: 0 },
      users: { registrations: 0, activations: 0 },
      subscriptions: { total: 0, start: 0, key: 0, combo: 0 },
      cancellations: { total: 0, key: 0, combo: 0 },
      payments: { successful: 0, refunds: 0, declined: 0 },
      finances: { referral: 0, total: 0 },
    }
  );

  // Check if table needs horizontal scrolling
  React.useEffect(() => {
    const checkScroll = () => {
      const table = document.querySelector('.table-container');
      if (table) {
        setIsScrollable(table.scrollWidth > table.clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <div className="w-full max-w-[100vw] bg-white rounded-lg shadow-sm mt-7">
      {/* Table Title and Scroll Indicator */}
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-xl font-medium text-gray-800">
            Статистика по дням
          </h2>
          {isScrollable && (
            <span className="text-sm text-gray-500 md:hidden">
              ← Прокрутите для просмотра →
            </span>
          )}
        </div>
      </div>

      {/* Table Container */}
      <div className="table-container overflow-x-auto overflow-y-hidden">
        <table className="w-full min-w-[1000px] border-collapse">
          <thead>
            <tr className="border-b">
              <th className="sticky left-0 bg-white p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Дата
              </th>
              <th
                colSpan="1"
                className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap"
              >
                Трафик
              </th>
              <th
                colSpan="2"
                className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap"
              >
                Пользователи
              </th>
              <th
                colSpan="4"
                className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap"
              >
                Подписки
              </th>
              <th
                colSpan="3"
                className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap"
              >
                Отмены
              </th>
              <th
                colSpan="3"
                className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap"
              >
                Платежи
              </th>
              <th
                colSpan="2"
                className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap"
              >
                Финансы
              </th>
            </tr>
            <tr className="border-b bg-gray-50">
              <th className="sticky left-0 bg-gray-50 p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                -
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Визиты
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Регистрации
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Активации
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Всего
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Start
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Key
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Combo
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Всего
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Key
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Combo
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Удачные
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Рефаллы
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Отклоненные
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Рефские
              </th>
              <th className="p-2 text-left font-medium text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Итого
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.date} className="border-b hover:bg-gray-50">
                <td className="sticky left-0 bg-white p-2 text-gray-600 text-xs md:text-sm whitespace-nowrap">
                  {row.date}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.traffic.visits}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.users.registrations}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.users.activations}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.subscriptions.total}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.subscriptions.start}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.subscriptions.key}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.subscriptions.combo}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.cancellations.total}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.cancellations.key}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.cancellations.combo}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.payments.successful}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.payments.refunds}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.payments.declined}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.finances.referral}
                </td>
                <td className="p-2 text-gray-600 text-xs md:text-sm">
                  {row.finances.total}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50 font-medium">
              <td className="sticky left-0 bg-gray-50 p-2 text-gray-600 text-xs md:text-sm whitespace-nowrap">
                Всего на странице
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.traffic.visits}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.users.registrations}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.users.activations}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.subscriptions.total}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.subscriptions.start}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.subscriptions.key}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.subscriptions.combo}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.cancellations.total}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.cancellations.key}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.cancellations.combo}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.payments.successful}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.payments.refunds}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.payments.declined}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.finances.referral}
              </td>
              <td className="p-2 text-gray-600 text-xs md:text-sm">
                {totals.finances.total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatisticsTable;
