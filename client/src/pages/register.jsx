import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { authStore } from '../store/auth.store';

const Register = () => {
  const [activeTab, setActiveTab] = useState('phone');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [agreements, setAgreements] = useState({
    terms: false,
    subscription: false,
  });
  const [loading, setLoading] = useState(false);
  const { setIsAuth, setUser } = authStore();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    // Validate agreements
    if (!agreements.terms || !agreements.subscription) {
      toast.success('Вы должны согласиться с правилами.');
      return;
    }

    // Build request body
    const requestBody = {
      emailOrPhone: contact,
      password: password,
    };

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API}/api/auth/register`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка при отправке данных.');
      }

      const data = await response.json();
      // setSuccessMessage('Успешная регистрация!');
      toast.success('Успешная регистрация!');

      setUser(data.user);
      setIsAuth(true);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('user', data.user.emailOrPhone);
      console.log('API Response:', data);
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(
        error.message || 'Ошибка при регистрации. Попробуйте еще раз.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-middleBlue py-10 px-4">
      <div className="w-full max-w-md">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-2">РЕГИСТРАЦИЯ</h1>
          <p className="text-lg">Через email или телефон</p>
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

            <div>
              <input
                type="password"
                placeholder="Пароль"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500"
                value={password}
                onChange={e => setPassword(e.target.value)}
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
                  СОГЛАШАЮСЬ С ПРАВИЛАМИ ЛИЦЕНЗИОННОГО ДОГОВОРА.
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
                  СОГЛАСЕН С УСЛОВИЯМИ ПОДПИСКИ.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
              disabled={loading}
            >
              {loading ? 'Отправка...' : 'Зарегистрироваться'}
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
