import PropTypes from 'prop-types';

const MaxWidth = ({ children, className }) => {
  return (
    <div className={`${`xl:px-48 lg:px-28 md:px-12 px-4 ${className}`}`}>
      {children}
    </div>
  );
};

MaxWidth.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default MaxWidth;
