import { HomeIcon } from '@heroicons/react/outline';
import { Icon } from '../../components/Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
}

const Template = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = /*tw*/ {
  icon: <HomeIcon />,
  classes: [
    'h-4',
    'w-4',
    'text-black',
  ],
};