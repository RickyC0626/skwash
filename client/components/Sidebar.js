import { HomeIcon, ClockIcon, MenuIcon } from '@heroicons/react/outline';

export const Sidebar = () => (
  <aside className='sidebar'>
    <SidebarButtonList>
      <SidebarButtonListItem>
        <SidebarButton active>
          <HomeIcon className='sidebar-button-icon' />
          <SidebarButtonText>Home</SidebarButtonText>
        </SidebarButton>
      </SidebarButtonListItem>
      <SidebarButtonListItem>
        <SidebarButton>
          <MenuIcon className='sidebar-button-icon' />
          <SidebarButtonText>My tasks</SidebarButtonText>
        </SidebarButton>
      </SidebarButtonListItem>
      <SidebarButtonListItem>
        <SidebarButton>
          <ClockIcon className='sidebar-button-icon' />
          <SidebarButtonText>Recent</SidebarButtonText>
        </SidebarButton>
      </SidebarButtonListItem>
      <SidebarButtonListItem>
        <SidebarButton>
          <SidebarButtonText>No Icon</SidebarButtonText>
        </SidebarButton>
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
  <li className='sidebar-button-list-item'>
    {children}
  </li>
)

const SidebarButton = ({ children, active }) => (
  <a href='#' className={`sidebar-button ${active ? 'active' : ''}`}>
    {children}
  </a>
)

const SidebarButtonText = ({ children }) => (
  <span className='sidebar-button-text'>
    {children}
  </span>
)