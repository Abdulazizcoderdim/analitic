import { FaCheck } from 'react-icons/fa6';
import AnaliticByMonth from '../components/shared/analitic-by-month';
import MaxWidth from '../components/shared/max-width';
import Reviews from '../components/shared/Reviews';

const Home = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   const hasVisited = localStorage.getItem('hasVisited');

  //   if (!hasVisited) {
  //     // User is visiting for the first time
  //     setIsModalOpen(true);
  //     localStorage.setItem('hasVisited', 'true');
  //   }
  // }, []);
  const months = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const year = currentDate.getFullYear();

  return (
    <>
      <div className="bg-middleBlue ">
        {/* 1 */}
        <MaxWidth className="flex items-center max-md:flex-col justify-between text-white max-md:pt-5">
          <div className="md:w-1/2 w-full space-y-4">
            <p className="text-lg">
              По вопросам отписки, оплате и возврату средств обращайтесь по
              <span className="text-brown">Telegram</span> или по номеру{' '}
              <span className="text-brown">+7 (495) 414-33-19</span> . Менеджер
              ответит в течении 1-2 часов в Пн-пт: с 10:00 до 19:00 (Мск)
            </p>
            <p className="uppercase text-3xl font-bold leading-10 max-md:text-center">
              Зарабатывай на <br /> спортивных событиях <br /> вместе с нами!
            </p>
            <br />
            <div className="w-full flex max-md:justify-center">
              <button className="relative bg-brown px-9 py-3 rounded-lg text-base hover:bg-white hover:text-brown transition-all duration-200">
                Подписаться
                <span className="animate-scalePulse  px-2 py-1 rounded-md bg-white text-black absolute -right-4 -top-4">
                  1 ₽
                </span>
              </button>
            </div>

            <div className="flex items-center gap-10">
              <div className="flex gap-3">
                <span className="bg-brown h-fit p-1 rounded-full">
                  <FaCheck />
                </span>
                <div className="space-y-2">
                  <p className="font-bold">5 дней</p>
                  <p>Точных прогнозов</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="bg-brown h-fit p-1 rounded-full">
                  <FaCheck />
                </span>
                <div className="space-y-2">
                  <p className="font-bold">300%</p>
                  <p>Увеличения своего банка</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <img loading="lazy" src="/home.png" alt="" />
          </div>
        </MaxWidth>
        <MaxWidth className="bg-lighBlue md:py-40 py-10 flex max-md:flex-col-reverse items-center gap-16  mt-5">
          <div className="md:w-1/2 w-full min-h-64 bg-white rounded-md text-black px-10 py-7">
            <h1 className="text-center font-bold">{`${day} ${month} ${year}`}</h1>
            <div className="flex justify-between border-t px-1 py-2 mt-5">
              <p className="w-1/2">Вид спорта </p>
              <p className="font-bold w-1/2 text-start">⚽ Футбол</p>
            </div>
            <div className="flex justify-between border-t px-1 py-2">
              <p className="w-1/2">Событие</p>
              <p className="font-bold w-1/2 text-start">РПЛ. Ахмат-Зенит</p>
            </div>
            <div className="flex justify-between border-t px-1 py-2">
              <p className="w-1/2">Коэф-нт</p>
              <p className="font-bold w-1/2 text-start">1.53</p>
            </div>
            <div className="flex justify-between border-t px-1 py-2">
              <p className="w-1/2">Исход</p>
              <p className="font-bold w-1/2 text-start">..Скрыто..</p>
            </div>
          </div>
          <div className="md:w-1/2 text-white space-y-5">
            <h1 className="text-[2rem] font-bold leading-9 uppercase max-md:text-center">
              Бесплатный <br /> прогноз дня!
            </h1>
            <p className="max-md:text-center">
              Ставка дня обновляется ежедневно <br /> в 15:00 по Московскому
              времени
            </p>
            <button className="px-7 py-2 rounded-md bg-brown ">
              Получить бесплатные прогнозы
            </button>
          </div>
        </MaxWidth>
        <AnaliticByMonth />
        <Reviews />
        {/* call */}
        <div className="fixed right-4 p-2 top-1/2 rounded-full border-2 border-brown bg-middleBlue flex justify-center items-center cursor-pointer w-14 h-14">
          <img
            src="/head.png"
            className="object-contain w-full h-full"
            alt=""
          />
        </div>
      </div>
      {/* {isModalOpen && <FollowModal setFollow={setIsModalOpen} />} */}
    </>
  );
};

export default Home;
