import { Link } from 'react-router-dom';
import Marquee from '../components/shared/Marquee';
import MaxWidth from '../components/shared/max-width';

const Giveaway = () => {
  const rules = [
    'Акция проводится с 1 января 2024 года по 30 декабря 2024 года. 18+',
    'Для участия в акции один Участник может использовать только один зарегистрированный аккаунт на AnaliticBet',
    'Если будут обнаружены дублирующиеся аккаунты одного пользователя, то они не будут учитываться при подведении результатов акции.',
    'Розыгрыш подарков проводится 30 декабря 2024 года в прямом эфире в группе Вконтакте AnaliticBet.',
    'Аккаунты участника в социальных сетях на момент проведения Акции должны быть открыты.',
    'Участник Акции должен быть подписан на группу AnaliticBet в Вконтакте',
    'Участник Акции должен оставить комментарий под постом Акции',
    'Участник Акции должен иметь активную подписку на момент проведения итогового розыгрыша подарков',
    '* Подарок 1000 рублей предоставляется партнером Акции',
  ];

  const items = [
    {
      title: 'iPhone 14 Pro',
      img: '/iphone.png',
    },
    {
      title: 'Apple Watch Series 7',
      img: '/watch.png',
    },
    {
      title: 'AirPods Pro',
      img: '/air.jpg',
    },
    {
      title: '5000 рублей',
      img: '/rub.jpg',
    },
  ];

  const results = [
    { prize: '5000 рублей', contact: '*33217974@*******' },
    { prize: '5000 рублей', contact: '79024413***' },
    { prize: 'AirPods Pro', contact: '*lexakimov2305@*******' },
    { prize: 'Apple Watch Series 7', contact: '79038444***' },
    { prize: 'iPhone 14 Pro', contact: '79207099***' },
  ];

  return (
    <div>
      <div className="bg-lighBlue">
        <div className="sm:px-20 px-5 py-10 flex items-center max-md:flex-col-reverse max-md:justify-center justify-between gap-5">
          <div className="w-ful text-white">
            <h1 className="font-bold max-md:text-center">
              <span className="md:text-8xl text-6xl">Побеждай</span> <br />
              <span className="md:text-5xl text-3xl">
                вместе с <span className="text-brown">AnaliticBet</span>
              </span>
            </h1>
            <p className="sm:text-3xl text-xl font-bold mt-16 max-sm:text-center">
              Прими участие в розыгрыше подарков и денежных призов от наших
              партнеров.
            </p>
            <div className="flex justify-center">
              <button className="animate-downAnimation bg-brown sm:px-10 px-7 py-3 mt-10 rounded-lg font-bold sm:text-3xl text-xl  uppercase">
                ПРИНЯТЬ УЧАСТИЕ
              </button>
            </div>
          </div>
          <div className="w-1/2 bg-red-100">
            <img
              loading="lazy"
              src="/dif.gif"
              className="object-contain w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <Marquee />

      <div className="py-10 space-y-5">
        <p className="bg-brown sm:max-w-xl max-w-md md:text-5xl text-3xl text-white font-bold pb-4 pt-1 rounded-r-lg text-end pr-24">
          Призовой фонд
        </p>
        <MaxWidth className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <img
                loading="lazy"
                src={item.img}
                className="object-contain w-60 h-60"
                alt=""
              />
              <p className="text-2xl font-bold text-[#1B4446]">{item.title}</p>
            </div>
          ))}
        </MaxWidth>
      </div>

      <div className="bg-lighBlue py-20">
        <p className="bg-brown sm:max-w-xl max-w-md md:text-4xl text-3xl text-white font-bold pb-4 pt-1 rounded-r-lg text-end pr-16">
          Условия розыгрыша
        </p>

        <MaxWidth className="flex justify-between max-md:flex-col gap-5 items-center relative overflow-auto">
          <div className="md:w-1/2 space-y-5">
            <div className="text-center">
              <img src="/regi.gif" width={350} className="mx-auto" alt="" />
              <p className="uppercase font-bold text-white">
                <span className="text-[#215658] font-extrabold text-9xl">
                  1
                </span>{' '}
                <span className="text-4xl ml-4">РЕГИСТРИРУЙСЯ</span>
              </p>
              <p className="text-white font-bold text-xl mt-4">
                Зарегистрируйся на сайте AnaliticBet, выбирай пробную подписку и
                получи доступ к лучшим прогнозам на спорт и киберспорт.
              </p>
            </div>
            <div className="text-center">
              <img src="/pob.gif" width={350} className="mx-auto" alt="" />
              <p className="uppercase font-bold text-white">
                <span className="text-[#215658] font-extrabold text-9xl">
                  3
                </span>{' '}
                <span className="text-4xl ml-4">ПОБЕЖДАЙ</span>
              </p>
              <p className="text-white font-bold text-xl mt-4">
                Принимай участие в розыгрыше и забирай крутые призы от
                AnaliticBet
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="text-center">
              <img src="/sub.gif" width={350} className="mx-auto" alt="" />
              <p className="uppercase font-bold text-white">
                <span className="text-[#215658] font-extrabold text-9xl">
                  2
                </span>{' '}
                <span className="text-4xl ml-4">ПОДПИШИСЬ</span>
              </p>
              <p className="text-white font-bold text-xl mt-4">
                Подпишись на наш аккаунт AnaliticBet в{' '}
                <span className="text-brown text-2xl font-extrabold">VK</span> и
                оставь комментарий под постом акции
              </p>
            </div>
          </div>
          <div className="absolute lg:right-72 lg:bottom-0 -bottom-20">
            <button className="animate-leftRigt font-extrabold uppercase text-4xl bg-brown px-16 py-3 rounded-lg text-white transition-all duration-200">
              УЧАСТВОВАТЬ
            </button>
          </div>
        </MaxWidth>
      </div>

      <div className="py-16 flex justify-center px-5">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <p className="md:text-3xl text-xl font-bold text-[#1B4446]">
            Победители розыгрыша подарков будут определены в прямой трансляции в
            Вконтакте с помощью генератора случайных чисел.
          </p>
          <button className="animate-downAnimation font-extrabold uppercase md:text-2xl text-xl bg-brown px-7 py-3 rounded-lg text-white transition-all duration-200">
            ПРИНЯТЬ УЧАСТИЕ
          </button>
        </div>
      </div>
      <div className="bg-lighBlue min-h-[400px] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-6 text-white text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl font-bold max-w-xl leading-tight">
              1000 РУБЛЕЙ КАЖДОМУ
              <span className="block mt-2">НОВОМУ ИГРОКУ</span>
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-4 px-8 rounded-md text-xl uppercase tracking-wide transform hover:scale-105 duration-200">
              ПОЛУЧИТЬ СЕЙЧАС
            </button>
          </div>

          <div className="mt-8 md:mt-0 relative">
            <img
              src="/til.gif"
              alt="Animated character with money"
              className="w-96 h-96 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl md:text-3xl font-medium text-slate-800 mb-8">
          Итоги предыдущего розыгрыша 30.12.2022
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-b">
                  Приз
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 border-b">
                  Почта/телефон клиента
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900 border-b">
                    {row.prize}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 border-b font-mono">
                    {row.contact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="https://vk.com/wall-214077354_9"
            className="text-orange-500 text-lg"
          >
            Прямой эфир розыгрыша
          </Link>
        </div>
      </div>

      <MaxWidth className="py-10 bg-middleBlue text-black">
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-2/3">
              <h2 className="text-teal-300 text-2xl mb-4">Информация:</h2>
              <h3 className="text-orange-500 text-xl mb-6">
                Полные условия конкурса
              </h3>

              <ul className="space-y-4 ">
                {rules.map((rule, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-xs leading-3"
                  >
                    <span className="mt-1">-</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-1/3 h-full flex justify-center md:justify-end">
              <img
                src="/logo.webp"
                alt="Analitic BET Logo"
                className="w-64 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Giveaway;
