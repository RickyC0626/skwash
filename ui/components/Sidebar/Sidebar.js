import styles from './Sidebar.module.css';
import { HomeIcon, ClockIcon, MenuIcon } from '@heroicons/react/outline';

import { DotIcon } from '../DotIcon';

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <SidebarSection>
      <SidebarButtonList>
        <SidebarButtonListItem>
          <SidebarButton active>
            <HomeIcon className={styles.sidebarButtonIcon} />
            <SidebarButtonText>Home</SidebarButtonText>
          </SidebarButton>
        </SidebarButtonListItem>
        <SidebarButtonListItem>
          <SidebarButton>
            <MenuIcon className={styles.sidebarButtonIcon} />
            <SidebarButtonText>My tasks</SidebarButtonText>
          </SidebarButton>
        </SidebarButtonListItem>
        <SidebarButtonListItem>
          <SidebarButton>
            <ClockIcon className={styles.sidebarButtonIcon} />
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
  <ul className={styles.sidebarButtonList}>
    {children}
  </ul>
)

const SidebarButtonListItem = ({ children }) => (
  <li className={styles.sidebarButtonListItem}>
    {children}
  </li>
)

const SidebarButton = ({ children, active }) => (
  <a href='#' className={`${styles.sidebarButton} ${active ? 'active' : ''}`}>
    {children}
  </a>
)

const SidebarButtonText = ({ children }) => (
  <span className={styles.sidebarButtonText}>
    {children}
  </span>
)

const SidebarSection = ({ children }) => (
  <section className={styles.sidebarSection}>
    {children}
  </section>
)

const SidebarSectionHeading = ({ children }) => (
  <span className={styles.sidebarSectionHeading}>
    {children}
  </span>
)