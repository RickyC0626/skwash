import PropTypes from 'prop-types';

export const Button = ({
  icon, label, backgroundColor, hoverColor, textColor
}) => (
  <button className={`
    ${backgroundColor} hover:${hoverColor}
    px-4 py-3 rounded-lg
  `}>
    {icon}
    <span className={`${textColor}`}>{label}</span>
  </button>
);

Button.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
  textColor: PropTypes.string,
};