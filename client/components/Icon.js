export const Icon = ({
  icon, classes = []
}) => (
  <svg className={classes.join(' ')}>{icon}</svg>
);