import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Auth() {
  const [activeTab, setActiveTab] = useState('phone');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', { phoneOrEmail, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-middleBlue p-4">
      <div className="w-full max-w-md">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-2">ВХОД</h1>
          <p className="text-lg">Для зарегистрированных клиентов</p>
        </div>

        <div className="bg-white rounded-lg p-8">
          <div className="flex justify-center mb-8">
            <div className="flex border-b w-full justify-center border-teal-600">
              <button
                onClick={() => setActiveTab('phone')}
                className={`px-4 py-2 text-sm ${
                  activeTab === 'phone'
                    ? 'rounded-t text-white bg-teal-600'
                    : 'text-gray-500'
                }`}
              >
                Телефон
              </button>
              <button
                onClick={() => setActiveTab('email')}
                className={`px-4 py-2 text-sm ${
                  activeTab === 'email'
                    ? 'rounded-t text-white bg-teal-600'
                    : 'text-gray-500'
                }`}
              >
                Email
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type={activeTab === 'phone' ? 'tel' : 'email'}
                placeholder={
                  activeTab === 'phone' ? 'Номер телефона' : 'Введите Email'
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={phoneOrEmail}
                onChange={e => setPhoneOrEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Введите пароль"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
            >
              Вход на сайт
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <Link
              to="/recovery"
              className="block underline text-teal-600 hover:text-teal-700 text-sm"
            >
              Восстановить пароль
            </Link>
            <Link
              to="/register"
              className="block underline text-teal-600 hover:text-teal-700 text-sm"
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}