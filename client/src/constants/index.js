import {
  Gem,
  LaptopMinimal,
  Layers,
  Lightbulb,
  MessageSquareText,
  Redo,
  RussianRuble,
  SquareUserRound,
  Users,
} from 'lucide-react';

export const navItems = [
  {
    title: 'Тарифы',
    link: '/tariffs',
  },
  {
    title: 'Отзывы клиентов',
    link: '/reviews',
  },
  {
    title: 'Где мне ставить',
    link: '/firm',
  },
  {
    title: 'Обучение',
    link: '/learning',
  },
  {
    title: 'Акции',
    link: '/giveaway',
  },
  {
    title: 'Контакты',
    link: '/contacts',
  },
  {
    title: 'История прогнозов',
    link: '/history',
  },
];

export const stats = [
  {
    month: 'Май 2023',
    income: '+207 000 ₽',
    forecasts: '163',
    passRate: '63%',
    avgCoef: '2.2',
    percentage: '+207%',
  },
  {
    month: 'Июнь 2023',
    income: '+213 850 ₽',
    forecasts: '157',
    passRate: '64%',
    avgCoef: '2.1',
    percentage: '+213%',
  },
  {
    month: 'Июль 2023',
    income: '+284 250 ₽',
    forecasts: '156',
    passRate: '75%',
    avgCoef: '2.2',
    percentage: '+284%',
  },
  {
    month: 'Август 2023',
    income: '+246 650 ₽',
    forecasts: '151',
    passRate: '64%',
    avgCoef: '2.2',
    percentage: '+247%',
  },
  {
    month: 'Май 2023',
    income: '+207 000 ₽',
    forecasts: '163',
    passRate: '63%',
    avgCoef: '2.2',
    percentage: '+207%',
  },
  {
    month: 'Июнь 2023',
    income: '+213 850 ₽',
    forecasts: '157',
    passRate: '64%',
    avgCoef: '2.1',
    percentage: '+213%',
  },
  {
    month: 'Июль 2023',
    income: '+284 250 ₽',
    forecasts: '156',
    passRate: '75%',
    avgCoef: '2.2',
    percentage: '+284%',
  },
  {
    month: 'Август 2023',
    income: '+246 650 ₽',
    forecasts: '151',
    passRate: '64%',
    avgCoef: '2.2',
    percentage: '+247%',
  },
];

export const dashboardMenu = [
  {
    title: 'Обзор',
    link: '/dashboard',
    icon: LaptopMinimal,
  },
  {
    title: 'Потоки',
    link: '/dashboard/streams',
    icon: Layers,
  },
  {
    title: 'Регистрации',
    link: '/dashboard/users',
    icon: Users,
  },
  {
    title: 'Postback',
    link: '/dashboard/postbacks',
    icon: Redo,
  },
  {
    title: 'Выплаты',
    link: '/dashboard/payout',
    icon: Gem,
  },
  {
    title: 'Приведи друга',
    link: '/dashboard/ref',
    icon: SquareUserRound,
  },
  {
    title: 'Уровни отчислений',
    link: '/dashboard/levels',
    icon: RussianRuble,
  },
  {
    title: 'Вопросы и ответы',
    link: '/dashboard/help',
    icon: Lightbulb,
  },
  {
    title: 'Поддержка',
    link: '/dashboard/contacts',
    icon: MessageSquareText,
  },
];
