import { Home } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: 'Bakhodirovichshakhzodbek@gmail.com',
    phone: '',
    telegram: '',
  });
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
  };

  const handleSubmitEdit = e => {
    e.preventDefault();
    // Handle password change logic here
    console.log('Password change submitted:', passwords);
  };

  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-5">Профиль</h1>

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 ml-4">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 cursor-pointer">Профиль</span>
        </nav>

        <div className="bg-white rounded-lg shadow-sm px-4 py-10 max-w-6xl mx-auto">
          <h1 className="text-blue-500 text-lg font-medium mb-8">АККАУНТ</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm text-violet-500">
                ИМЯ
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Имя"
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="emailOrPhone"
                className="block text-sm text-violet-500"
              >
                EMAIL ИЛИ НОМЕР ТЕЛЕФОНА
              </label>
              <input
                id="emailOrPhone"
                name="emailOrPhone"
                type="text"
                value={localStorage.getItem('user')}
                disabled
                className="w-full px-4 py-2 rounded-lg bg-gray-100 border border-gray-200"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="telegram"
                className="block text-sm text-violet-500"
              >
                ТЕЛЕГРАМ-ЛОГИН
              </label>
              <div className="relative z-10">
                <span className="absolute left-4 top-2 text-gray-500">@</span>
                <input
                  id="telegram"
                  name="telegram"
                  type="text"
                  value={formData.telegram}
                  onChange={handleChange}
                  className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-2 bg-[#FF7B4D] hover:bg-[#ff6a35] text-white rounded-full transition-colors"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm px-4 py-10 max-w-6xl mx-auto mt-8">
          <h1 className="text-lg font-medium text-[#0066FF] mb-8">
            БЕЗОПАСНОСТЬ
          </h1>

          <form onSubmit={handleSubmitEdit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-[#8B5CF6] text-sm font-normal">
                ТЕКУЩИЙ ПАРОЛЬ
              </label>
              <input
                type="password"
                value={passwords.current}
                onChange={e =>
                  setPasswords(prev => ({ ...prev, current: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
                placeholder="Текущий пароль"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[#8B5CF6] text-sm font-normal">
                НОВЫЙ ПАРОЛЬ
              </label>
              <input
                type="password"
                value={passwords.new}
                onChange={e =>
                  setPasswords(prev => ({ ...prev, new: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
                placeholder="Новый пароль"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[#8B5CF6] text-sm font-normal">
                ПОВТОРИТЬ ПАРОЛЬ
              </label>
              <input
                type="password"
                value={passwords.confirm}
                onChange={e =>
                  setPasswords(prev => ({ ...prev, confirm: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
                placeholder="Повторить пароль"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-[#FF7A50] hover:bg-[#FF6B3D] text-white rounded-full transition-colors duration-200"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
