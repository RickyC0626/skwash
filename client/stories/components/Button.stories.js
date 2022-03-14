import { Button } from '../../components/Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = args => <Button {...args} />

export const Red = Template.bind({});

Red.args = {
  size: 'h-10 w-32',
  children: 'Press me',
};