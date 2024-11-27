import { Link } from 'react-router-dom';

const FooterDash = () => {
  return (
    <p className="text-end py-4 sm:pr-10 pr-5">
      © {new Date().getFullYear()}{' '}
      <Link to={'https://partners.analiticbet.ru/'} className="text-blue-500">
        partners.analiticbet.ru
      </Link>
    </p>
  );
};

export default FooterDash;
