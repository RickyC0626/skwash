export const Text = ({
  content, classes = []
}) => (
  <span className={classes.join(' ')}>{content}</span>
);