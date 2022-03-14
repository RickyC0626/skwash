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
  classes: [
    'bg-gray-200',
    'hover:bg-gray-300',
    'px-4',
    'py-3',
    'rounded-lg'
  ],
};

export const WithIcon = Template.bind({});
WithIcon.args = /*tw*/ {
  ...Default.args,
  icon: <HomeIcon />,
  label: 'Home',
  classes: [
    ...Default.args.classes,
    'flex',
    'items-center',
    'gap-2'
  ],
};