import { HomeIcon, ClockIcon } from '@heroicons/react/outline';

export const Sidebar = () => (
  <aside className="
    top-0 left-0 h-screen w-64 m-0 py-4 px-3
    bg-gray-50 border-r-2 border-gray-200
  ">
    <ul className="space-y-2">
      <li>
        <SidebarButton icon={<HomeIcon />} text="Home" active />
      </li>
      <li>
        <SidebarButton icon={<ClockIcon />} text="Recent" />
      </li>
    </ul>
  </aside>
)

const SidebarButton = ({ icon, text = 'New Button', active }) => (
  <a href="#" className={`
    flex p-2 rounded-lg items-center
    text-base font-normal text-gray-900
    hover:bg-gray-200
    ${active ? 'bg-gray-200' : ''}
  `}>
    <SidebarButtonIcon icon={icon} />
    <SidebarButtonText text={text} />
  </a>
)

const SidebarButtonIcon = ({ icon }) => (
  <svg className="
    text-gray-500 w-6 h-6
  ">
    {icon}
  </svg>
)

const SidebarButtonText = ({ text }) => (
  <span className="ml-3">
    {text}
  </span>
)