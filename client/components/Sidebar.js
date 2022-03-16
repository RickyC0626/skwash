import { HomeIcon, ClockIcon, MenuIcon } from '@heroicons/react/outline';

import { DotIcon } from './DotIcon';

export const Sidebar = () => (
  <aside className='sidebar'>
    <SidebarSection>
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
      </SidebarButtonList>
    </SidebarSection>
    <SidebarSection>
      <SidebarSectionHeading>Teams</SidebarSectionHeading>
      <SidebarButtonList>
        <SidebarButtonListItem>
          <SidebarButton>
            <DotIcon className='fill-indigo-500' />
            <SidebarButtonText>Engineering</SidebarButtonText>
          </SidebarButton>
        </SidebarButtonListItem>
        <SidebarButtonListItem>
          <SidebarButton>
            <DotIcon className='fill-emerald-500' />
            <SidebarButtonText>Human Resources</SidebarButtonText>
          </SidebarButton>
        </SidebarButtonListItem>
        <SidebarButtonListItem>
          <SidebarButton>
            <DotIcon className='fill-amber-500' />
            <SidebarButtonText>Customer Success</SidebarButtonText>
          </SidebarButton>
        </SidebarButtonListItem>
      </SidebarButtonList>
    </SidebarSection>
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

const SidebarSection = ({ children }) => (
  <section className='sidebar-section'>
    {children}
  </section>
)

const SidebarSectionHeading = ({ children }) => (
  <span className='sidebar-section-heading'>
    {children}
  </span>
)