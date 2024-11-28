import { Home } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { postbackData } from '../../constants';

export default function PostbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    method: 'GET',
    events: {
      registration: false,
      firstPayment: false,
      subscription: false,
      unsubscribe: false,
      payment: false,
    },
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API}/api/postbacks/create`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success('Постбек успешно добавлен!');
      } else {
        toast.error('Произошла ошибка!');
      }

      setLoading(false);
      navigate('/dashboard/postbacks');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Ошибка подключения к серверу!');
    }
  };

  const handleChange = e => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checkbox = e.target;
      setFormData(prev => ({
        ...prev,
        events: {
          ...prev.events,
          [name]: checkbox.checked,
        },
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-5">
          Создать Postback
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 ml-4">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 cursor-pointer">Создать Postback</span>
        </nav>

        {/* Action Buttons */}
        <Link
          to={'/dashboard/postbacks'}
          className="px-5 w-fit pb-2 pt-1.5 mb-8 shadow-md bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors flex items-center"
        >
          Список Postback
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Создание Postback
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Название (необязательно)
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Method Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Метод
                </label>
                <select
                  name="method"
                  value={formData.method}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                </select>
              </div>
            </div>

            {/* URL Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ссылка
              </label>
              <textarea
                name="url"
                value={formData.url}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-2 text-sm text-gray-500">
                Укажите ссылку, подставив в нужные места метки, в которых будет
                передана информация о событиях.
              </p>
              <p className="mt-1 text-sm text-gray-600">
                {'{stream}'} {'{click_id}'} {'{payout}'} {'{payout_total}'}{' '}
                {'{transaction_id}'} {'{status}'}
              </p>
            </div>

            {/* Events Section */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                События
              </label>
              <div className="space-y-2">
                {Object.entries({
                  registration: 'Регистрация',
                  firstPayment: 'Первая оплата',
                  subscription: 'Подписка',
                  unsubscribe: 'Отписка',
                  payment: 'Оплата',
                }).map(([key, label]) => (
                  <label key={key} className="flex items-center">
                    <input
                      type="checkbox"
                      name={key}
                      checked={formData.events[key]}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <p className="text-xs text-gray-500">
              Пример: http://pstb.gopeerclick.com/postback?userid=1111&cid=
              {'click_id'}&payout={'payout'}&txid={'transaction_id'}&status=
              {'status'}
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {loading ? 'Загрузка...' : 'Добавить'}
            </button>
          </form>

          {/* Parameters Table */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Метки</h2>
            <div className="border rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  {postbackData.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.key}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {item.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
