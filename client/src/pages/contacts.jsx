import { useEffect } from 'react';

const Contacts = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = import.meta.env.VITE_PUBLIC_YANDEX_API_KEY;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (!window.ymaps || document.getElementById('yandex-map-initialized')) {
        return; // Xarita allaqachon mavjud bo'lsa yoki yandex-map div mavjud bo'lsa, qaytib chiqish
      }

      window.ymaps.ready(() => {
        const mapContainer = document.getElementById('yandex-map');
        if (!mapContainer) return;

        mapContainer.setAttribute('id', 'yandex-map-initialized');

        const map = new window.ymaps.Map(mapContainer, {
          center: [55.736761, 37.61992],
          zoom: 12,
        });

        const placemark = new window.ymaps.Placemark([55.736761, 37.61992], {
          hintContent: 'г. Москва, ул. Большая Полянка 51А/9',
          balloonContent: 'Наш офис',
        });

        map.geoObjects.add(placemark);
      });
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-middleBlue p-4 md:p-8">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white p-6 md:p-8">
        <h1 className="mb-8 text-3xl font-medium text-gray-900">Контакты</h1>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Yandex Map */}
          <div id="yandex-map" className="min-h-[400px] rounded-lg"></div>
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="mb-2 text-sm font-medium uppercase text-gray-500">
                АДРЕС
              </h2>
              <span className="flex items-start gap-2 text-gray-900">
                г. Москва, ул. Большая Полянка 51А/9
              </span>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-medium uppercase text-gray-500">
                ТЕЛЕФОН
              </h2>
              <div className="text-gray-900">
                <a href="tel:+74954143319" className="hover:text-teal-700">
                  +7 (495) 414-33-19
                </a>
                <div className="text-sm text-gray-500">
                  (Пн-пт: с 11:00 до 19:00 (Мск))
                </div>
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-medium uppercase text-gray-500">
                TELEGRAM-БОТ
              </h2>
              <a
                href="https://t.me/AnaliticBet_Bot"
                className="text-gray-900 hover:text-teal-700"
              >
                @AnaliticBet_Bot
              </a>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-medium uppercase text-gray-500">
                ПОДДЕРЖКА ПО EMAIL
              </h2>
              <a
                href="mailto:analiticbet.pro@gmail.com"
                className="text-gray-900 hover:text-teal-700"
              >
                analiticbet.pro@gmail.com
              </a>
            </div>
            <div>
              <h2 className="mb-2 text-sm font-medium uppercase text-gray-500">
                ИНФОРМАЦИЯ О КОМПАНИИ
              </h2>
              <div className="text-gray-900">
                <p>ИП Скрипник К.В.</p>
                <p>ИНН 490606919009</p>
                <p>ОГРНИП 316491000055708</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
