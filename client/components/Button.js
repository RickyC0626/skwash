import PropTypes from 'prop-types';

export const Button = ({ size="h-10 w-32", children="Click me" }) => (
  <button className={` bg-red-400 font-bold text-white px-6 py-2 ${size} `}>
    {children}
  </button>
)

Button.propTypes = {
  size: PropTypes.string,
  children: PropTypes.string,
};