import { HomeIcon, ClockIcon, MenuIcon } from '@heroicons/react/outline';

export const Sidebar = () => (
  <aside className='sidebar'>
    <ul className='sidebar-button-list'>
      <li>
        <SidebarButton icon={<HomeIcon />} text='Home' active />
      </li>
      <li>
        <SidebarButton icon={<MenuIcon />} text='My tasks' />
      </li>
      <li>
        <SidebarButton icon={<ClockIcon />} text='Recent' />
      </li>
    </ul>
  </aside>
)

const SidebarButton = ({ icon, text = 'New Button', active }) => (
  <a href='#' className={`sidebar-button ${active ? 'active' : ''}`}>
      <SidebarButtonIcon icon={icon} />
      <SidebarButtonText text={text} />
  </a>
)

const SidebarButtonIcon = ({ icon }) => (
  <svg className='sidebar-button-icon'>
    {icon}
  </svg>
)

const SidebarButtonText = ({ text }) => (
  <span className='sidebar-button-text'>
    {text}
  </span>
)