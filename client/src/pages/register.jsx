import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [activeTab, setActiveTab] = useState('phone');
  const [contact, setContact] = useState('');
  const [agreements, setAgreements] = useState({
    terms: false,
    subscription: false,
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', { contact, agreements });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-middleBlue py-10 px-4">
      <div className="w-full max-w-md">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-2">РЕГИСТРАЦИЯ</h1>
          <p className="text-lg">Через email или телефон</p>
        </div>

        {/* Promo Banner */}
        <div className="bg-[#fff9e6] border border-[#ffe4b3] max-w-80 mx-auto rounded-lg p-4 mb-6">
          <div className="relative">
            <span className="absolute -top-3 right-0 bg-green-500 text-white text-xs px-2 py-0.5 rounded">
              Акция!
            </span>
            <h3 className="text-center text-xs font-medium text-amber-800 mb-2">
              Доступ всего за 1 руб!
            </h3>
            <p className="text-xs text-amber-700 text-center">
              Окончание акции 13.11.2024 в 12:00 Успей купить за 1 рубль!
            </p>
            <p className="text-xs text-amber-700 text-center">
              Пробный доступ предоставляется на 5 дней, далее продлевается по
              499 руб каждые 5 дней. Зарабатывай сейчас, а плати потом!
            </p>
          </div>
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
                placeholder={activeTab === 'phone' ? 'Номер телефона' : 'Email'}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={contact}
                onChange={e => setContact(e.target.value)}
                required
              />
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={agreements.terms}
                  onChange={e =>
                    setAgreements(prev => ({
                      ...prev,
                      terms: e.target.checked,
                    }))
                  }
                  required
                />
                <span className="text-xs text-gray-600">
                  СОГЛАШАЮСЬ С ПРАВИЛАМИ ЛИЦЕНЗИОННОГО ДОГОВОРА ОФЕРТЫ И
                  УСЛОВИЯМИ ПРЕДОСТАВЛЕНИЯ УСЛУГ ПО ПЛАТНОЙ ПОДПИСКЕ НА
                  АНАЛИТИКУ, С ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ ОЗНАКОМЛЕН(А).
                </span>
              </label>

              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={agreements.subscription}
                  onChange={e =>
                    setAgreements(prev => ({
                      ...prev,
                      subscription: e.target.checked,
                    }))
                  }
                  required
                />
                <span className="text-xs text-gray-600">
                  СОГЛАСЕН С ПРАВИЛАМИ ПРЕДОСТАВЛЕНИЯ ДОСТУПА К СЕРВИСУ ПО
                  ПОДПИСКЕ С ИСПОЛЬЗОВАНИЕМ АВТОПЛАТЕЖА И УВЕДОМЛЕН О
                  ПОДКЛЮЧЕНИИ ПЛАТНОЙ ПОДПИСКИ СТОИМОСТЬЮ{' '}
                  <span className="font-bold">
                    1 РУБ. ЗА ПЕРВЫЕ 5 ДНЕЙ ДОСТУПА
                  </span>
                  , ДАЛЕЕ С ПОДКЛЮЧЕННОЙ КАРТЫ СПИСЫВАЕТСЯ{' '}
                  <span className="font-bold">499 РУБ. ЗА КАЖДЫЕ 5 ДНЕЙ</span>{' '}
                  ДЛЯ ТАРИФА МСК, И <span className='font-bold'>1499 РУБ. ЗА КАЖДЫЕ 5 ДНЕЙ</span> ДЛЯ
                  ТАРИФА COMBO.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
            >
              Зарегистрироваться
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/auth"
              className="text-teal-600 hover:text-teal-700 text-sm"
            >
              Вход на сайт
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
