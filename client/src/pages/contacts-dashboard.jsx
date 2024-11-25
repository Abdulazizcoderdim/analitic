import { Home } from 'lucide-react';
import { BiLogoTelegram } from 'react-icons/bi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ContactsDashboard = () => {
  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      <header className="px-4 py-6">
        <h1 className="text-2xl font-medium text-gray-900">
          Служба заботы о партнерах
        </h1>

        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8 ml-4 mt-3">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            <Home className="h-4 w-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 cursor-pointer font-medium">
            Поддержка
          </span>
        </nav>
      </header>

      {/* Contact Cards Grid */}
      <div className="px-4 py-8 grid gap-6 md:grid-cols-2 w-full">
        {/* Email Card */}
        <div className="rounded-lg py-10 p-6 text-white bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400">
          <div className="flex items-start gap-4 max-sm:flex-col ">
            <HiOutlineMailOpen className="w-16 h-16 max-sm:mx-auto" />
            <div>
              <h2 className="text-3xl font-normal mb-2">Email:</h2>
              <a
                href="mailto:analiticbet.pro@gmail.com"
                className="text-lg hover:underline break-all"
              >
                analiticbet.pro@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Telegram Card */}
        <div className="rounded-lg py-10 p-6 text-white bg-[#0088cc]">
          <div className="flex items-start gap-4 max-sm:flex-col ">
            <BiLogoTelegram className="w-16 h-16 max-sm:mx-auto" />
            <div>
              <h2 className="text-3xl font-normal mb-2">Telegram:</h2>
              <a
                href="https://t.me/analiticbet_partners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                @analiticbet_partners
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsDashboard;
