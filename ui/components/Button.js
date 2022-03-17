import PropTypes from 'prop-types';
import { Icon } from './Icon';
import { Text } from './Text';

export const Button = ({
  icon = null, label, classes
}) => (
  <button className={classes.join(' ')}>
    <Icon icon={icon} />
    <Text content={label} />
  </button>
);

Button.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string.isRequired,
};