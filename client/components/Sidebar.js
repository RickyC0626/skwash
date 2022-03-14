import { HomeIcon, ClockIcon, MenuIcon } from '@heroicons/react/outline';

export const Sidebar = () => (
  <aside className='sidebar'>
    <SidebarButtonList>
      <SidebarButtonListItem>
        <SidebarButton icon={<HomeIcon />} label='Home' active />
      </SidebarButtonListItem>
      <SidebarButtonListItem>
        <SidebarButton icon={<MenuIcon />} label='My tasks' />
      </SidebarButtonListItem>
      <SidebarButtonListItem>
        <SidebarButton icon={<ClockIcon />} label='Recent' />
      </SidebarButtonListItem>
      <SidebarButtonListItem>
        <SidebarButton />
      </SidebarButtonListItem>
    </SidebarButtonList>
  </aside>
)

const SidebarButtonList = ({ children }) => (
  <ul className='sidebar-button-list'>
    {children}
  </ul>
)

const SidebarButtonListItem = ({ children }) => (
  <li>
    {children}
  </li>
)

const SidebarButton = ({ icon = null, label = 'New Button', active }) => (
  <a href='#' className={`sidebar-button ${active ? 'active' : ''}`}>
      {icon ? <SidebarButtonIcon icon={icon} /> : null}
      <SidebarButtonText text={label} />
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