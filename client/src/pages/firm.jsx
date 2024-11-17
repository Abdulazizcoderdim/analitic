import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MaxWidth from '../components/shared/max-width';

export default function BookmakersTable() {
  const bookmakers = [
    {
      name: 'LEON',
      logo: '/leon.png',
      rating: 5.0,
      bonus: 'до 20 000 ₽',
      promoCode: 'Нет',
      tsupis: true,
      link: 'https://leon.ru/?wm=3058669',
    },
    {
      name: 'PARI',
      logo: '/pari.png',
      rating: 4.9,
      bonus: 'до 10 000 ₽',
      promoCode: 'Нет',
      tsupis: true,
      link: 'https://pari.ru/promo/ambassadors/affiliate1/?affijet-click=u36da26683d174521935af4523838994e&partner_id=1794&utm_medium=Affiliate',
    },
    {
      name: 'Winline',
      logo: '/win.png',
      rating: 4.8,
      bonus: 'до 10 000 ₽',
      promoCode: 'Нет',
      tsupis: true,
      link: 'https://winline.ru/auth/registration/',
    },
    {
      name: 'FONBET',
      logo: '/fon.png',
      rating: 4.8,
      bonus: 'до 15 000 ₽',
      promoCode: 'Нет',
      tsupis: true,
      link: 'https://fon.bet/',
    },
    {
      name: 'OLIMP',
      logo: '/olim.png',
      rating: 4.8,
      bonus: 'до 30 000 ₽',
      promoCode: 'Нет',
      tsupis: true,
      link: 'https://www.olimp.bet/',
    },
    {
      name: 'BetBoom',
      logo: '/bet.png',
      rating: 4.7,
      bonus: 'до 7 000 ₽',
      promoCode: 'Нет',
      tsupis: true,
      link: 'https://betboom.ru/',
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-orange-500' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm font-medium">{rating}</span>
    </div>
  );

  StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
  };

  return (
    <MaxWidth className="py-20 bg-middleBlue">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Где делать ставки</h1>
        <p className="text-gray-600 mb-6">
          Мы составили для вас рейтинг проверенных букмекерских компаний,
          которые осуществляют выплаты выигрышей без задержек.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-teal-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Компания</th>
                <th className="px-4 py-3 text-left">Рейтинг</th>
                <th className="px-4 py-3 text-left">Бонус</th>
                <th className="px-4 py-3 text-left">Промокод</th>
                <th className="px-4 py-3 text-left">ЦУПИС</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookmakers.map((bookmaker, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <img
                      loading="lazy"
                      src={bookmaker.logo}
                      alt={`${bookmaker.name} logo`}
                      className="h-5 w-auto"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <StarRating rating={bookmaker.rating} />
                  </td>
                  <td className="px-4 py-4 text-gray-600">{bookmaker.bonus}</td>
                  <td className="px-4 py-4 text-gray-600">
                    {bookmaker.promoCode}
                  </td>
                  <td className="px-4 py-4">
                    {bookmaker.tsupis && (
                      <span className="inline-flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-1 text-green-500">Да</span>
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <Link
                      to={bookmaker.link}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors"
                    >
                      Регистрация
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-4 text-gray-600">
          <p>Как понять, какие букмекерские конторы лучшие?</p>
          <p>
            Рейтинг «AnaliticBet» включает всех легальных российских букмекеров.
            Наши ставочные эксперты внимательно оценили каждую компанию и
            расположили их по нисходящей.
          </p>
          <p>
            В топе рейтинга вы найдете БК для ставок на спорт, которые мы
            официально рекомендуем. Это ведущие российские букмекеры: они быстро
            платят выигрыш, их мобильные приложения просты в использовании, а
            сервис быстрый и надежный.
          </p>
        </div>
      </div>
    </MaxWidth>
  );
}
