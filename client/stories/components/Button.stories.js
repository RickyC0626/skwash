import { HomeIcon } from '@heroicons/react/outline';

import { Button } from '../../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = /*tw*/ {
  label: 'Button',
  backgroundColor: 'bg-gray-200',
  hoverColor: 'bg-gray-300',
  textColor: 'text-black',
};

export const WithIcon = Template.bind({});
WithIcon.args = /*tw*/ {
  ...Default.args,
  icon: <HomeIcon />,
  label: 'Home',
};