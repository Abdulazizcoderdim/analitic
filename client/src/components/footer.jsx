import { Link } from 'react-router-dom';
import MaxWidth from './shared/max-width';

export default function Footer() {
  return (
    <footer className="bg-[#0D2324] text-white py-8 px-4 md:px-8">
      <MaxWidth>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
            {/* Logo and Copyright */}
            <div className="space-y-4">
              <Link href="/" className="block">
                <img
                  loading="lazy"
                  src="/logo.webp"
                  alt="Analitic BET"
                  width={200}
                  height={50}
                  className="h-auto"
                />
              </Link>
              <p className="text-lg text-white">© 2020 - 2024 analiticbet.ru</p>
            </div>

            {/* Center Links */}
            <div className="flex flex-col">
              <button className="bg-[#FF4400] w-fit text-white px-4 py-2 text-sm rounded-md hover:bg-[#FF5500] transition-colors mb-2">
                Отписаться
              </button>
              <Link
                href="#"
                className="text-gray-400 text-xs hover:text-white transition-colors"
              >
                Лицензионный договор оферты
              </Link>
            </div>

            {/* Right Links */}
            <div className="space-y-2 text-xs">
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Договор на оформление платной подписки
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Сотрудничество
              </Link>
            </div>

            {/* Social Media */}
            <div className="space-y-2">
              <p className="text-white">Мы в соц. сетях</p>
              <Link href="#" className="inline-block">
                <img
                  loading="lazy"
                  src="/telegram.svg"
                  alt="Telegram"
                  width={40}
                  height={40}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-400 max-w-[1400px] mx-auto text-center leading-relaxed">
            Безопасность платежей обеспечивается с помощью Банка-эквайера,
            функционирующего на основе современных протоколов и технологий,
            разработанных платежными системами МИР, Visa International и
            Mastercard Worldwide (3D-Secure: Verified by VISA, Mastercard
            SecureCode, MirAccept). Обработка полученных конфиденциальных данных
            Держателя карты производится в процессинговом центре Банка,
            сертифицированного по стандарту PCI DSS. Безопасность передаваемой
            информации обеспечивается с помощью современных протоколов
            обеспечения безопасности в сети Интернет.
          </p>
        </div>
      </MaxWidth>
    </footer>
  );
}
