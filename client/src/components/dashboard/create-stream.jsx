import { Home } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { allowedMethods, forbiddenMethods } from '../../constants';

// Custom Input Field Component
const InputField = ({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  ...props
}) => (
  <div className="flex flex-col gap-1 w-full">
    <label htmlFor={id} className="block text-gray-600 mb-2">
      {label}
    </label>
    <input
      id={id}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border ${
        error ? 'border-red-500' : 'border-gray-300'
      } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
      type={type}
      {...props}
    />
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
};

const CreateStream = () => {
  const [formData, setFormData] = useState({
    name: '',
    trialDays: 0,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'trialDays' ? parseInt(value) : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.length < 5 || formData.name.length > 15) {
      newErrors.name = 'Имя должно содержать от 5 до 15 символов.';
    }
    if (!/^[a-zA-Z0-9_]+$/.test(formData.name)) {
      newErrors.name =
        'Имя может содержать только английские буквы, цифры и _.';
    }
    if (formData.trialDays < 0 || formData.trialDays > 10) {
      newErrors.trialDays = 'Пробное количество дней должно быть от 0 до 10.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setErrors({});
    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API}/api/streams/create`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Serverda xatolik yuz berdi');
      }

      toast.success('Поток создан');
      setFormData({ name: '', trialDays: 0 });
      navigate('/dashboard/streams');
    } catch (err) {
      setErrors({ submit: err.message });
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-5">
          Создать поток
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 ml-4">
          <Link to="/" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 cursor-pointer">Создать поток</span>
        </nav>

        {/* Action Buttons */}
        <Link
          to={'/dashboard/streams'}
          className="px-5 w-fit pb-2 pt-1.5 mb-8 shadow-md bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors flex items-center"
        >
          Список потоков
        </Link>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-2xl font-medium text-gray-800 mb-6 border-b pb-6">
            Создать поток
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4 flex items-center w-full max-sm:flex-col gap-5 text-[#888da8]">
              <InputField
                id="name"
                label="Название"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <InputField
                id="trialDays"
                label="Триал, дней"
                name="trialDays"
                value={formData.trialDays}
                onChange={handleChange}
                type="number"
                error={errors.trialDays}
                min="1"
                max="10"
                required
                className="sm:w-40 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {errors.submit && (
              <p className="text-red-500 text-sm">{errors.submit}</p>
            )}

            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Подождите...' : 'Сохранить'}
            </button>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h2 className="text-lg text-gray-600 mb-4">
                  Правила привлечения <br /> Разрешенные способы привлечение
                </h2>
                <ul className="space-y-2">
                  {allowedMethods.map(method => (
                    <li key={method} className="text-gray-600 text-sm pl-5">
                      {method}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg text-gray-600 mb-4">
                  Запрещенные способы привлечения
                </h2>
                <ul className="space-y-2">
                  {forbiddenMethods.map(method => (
                    <li key={method} className="text-gray-600 text-xs pl-5">
                      {method}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-red-500">
                  В случае обнаружения использования запрещенных способов
                  привлечения, аккаунт блокируется вместе с активным балансом.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateStream;
