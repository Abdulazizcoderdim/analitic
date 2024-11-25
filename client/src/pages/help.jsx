import { Home } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqData } from '../constants';

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState(
    'О проекте Partners.AnaliticBet.ru'
  );
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleQuestion = question => {
    setExpandedQuestion(expandedQuestion === question ? null : question);
  };

  return (
    <div className="min-h-screen bg-[#E9ECEF] sm:pt-20 pt-24">
      {/* Header and Breadcrumbs */}
      <div className="px-4 py-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Вопросы и ответы
        </h1>
        <nav className="flex items-center gap-2 mt-4 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            <Home className="w-4 h-4" />
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="cursor-pointer">Вопросы и ответы</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm">
          <h2 className="p-6 text-xl font-medium text-gray-900">
            Вопросы и ответы
          </h2>

          {/* Tabs */}
          <div className="border-b">
            <div className="flex flex-wrap gap-2 px-6">
              {Object.keys(faqData).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors
                    ${
                      activeTab === tab
                        ? 'text-gray-900 bg-white border border-b-0 border-gray-200'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-medium text-gray-600 mb-6">
              {activeTab}
            </h3>
            <div className="space-y-0">
              {faqData[activeTab].map(({ question, answer }, index) => (
                <div key={index} className="">
                  <button
                    onClick={() => toggleQuestion(question)}
                    className="w-full flex items-center py-2 text-left text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span className="font-medium">{question}</span>
                  </button>
                  {expandedQuestion === question && (
                    <div className="pb-4 max-w-xl text-gray-600 text-sm leading-relaxed">
                      {answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
