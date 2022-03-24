import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { HomeIcon, ClockIcon, MenuIcon, MenuAlt2Icon, MenuAlt3Icon } from '@heroicons/react/outline';

import { DotIcon } from '../DotIcon';

export const Sidebar = () => {
  const [isOpened, setOpen] = useState(true);

  const toggleSidebar = () => setOpen(!isOpened);

  const SbMenuButton = ({ children, onClick }) => (
    <button onClick={onClick} className={styles['sidebar-menu-button']}>
      {children}
    </button>
  );

  const SbSection = ({ children }) => (
    <section className={styles['sidebar-section']}>
      {children}
    </section>
  );

  const SbSectionHeading = ({ children }) => (
    <span className={styles['sidebar-section-heading']}>
      {children}
    </span>
  );

  const SbList = ({ children }) => (
    <ul className={styles['sidebar-list']}>
      {children}
    </ul>
  );

  const SbListItem = ({ children }) => (
    <li className={styles['sidebar-list-item']}>
      {children}
    </li>
  );

  const SbLink = ({ children, href }) => (
    <a href={href} className={styles['sidebar-link']}>
      {children}
    </a>
  );

  const SbIcon = ({ Icon }) => (
    <Icon className={styles['sidebar-icon']} />
  );

  const SbLinkText = ({ children }) => (
    <span className={styles['sidebar-link-text']}>
      {children}
    </span>
  );

  return (
    <aside className={`
      ${styles['sidebar']}
      ${isOpened ? styles['open'] : styles['closed']}
    `}>
      <SbSection>
        <div className='flex'>
          <span className={`
            ${styles['sidebar-logo']}
            ${isOpened ? styles['open'] : styles['closed']}
          `}>LOGO</span>
          <SbMenuButton onClick={toggleSidebar}>
            <SbIcon Icon={isOpened ? MenuAlt3Icon : MenuAlt2Icon} />
          </SbMenuButton>
        </div>
      </SbSection>
      <SbSection>
        <SbList>
          <SbListItem>
            <SbLink href='#'>
              <SbIcon Icon={HomeIcon} />
              <SbLinkText>Home</SbLinkText>
            </SbLink>
          </SbListItem>
          <SbListItem>
            <SbLink href='#'>
              <SbIcon Icon={MenuIcon} />
              <SbLinkText>My tasks</SbLinkText>
            </SbLink>
          </SbListItem>
          <SbListItem>
            <SbLink href='#'>
              <SbIcon Icon={ClockIcon} />
              <SbLinkText>Recent</SbLinkText>
            </SbLink>
          </SbListItem>
        </SbList>
      </SbSection>
      <SbSection>
        <SbSectionHeading>Teams</SbSectionHeading>
        <SbList>
          <SbListItem>
            <SbLink href='#'>
              <DotIcon className='fill-indigo-500' />
              <SbLinkText>Engineering</SbLinkText>
            </SbLink>
          </SbListItem>
          <SbListItem>
            <SbLink href='#'>
              <DotIcon className='fill-emerald-500' />
              <SbLinkText>Human Resources</SbLinkText>
            </SbLink>
          </SbListItem>
          <SbListItem>
            <SbLink href='#'>
              <DotIcon className='fill-amber-500' />
              <SbLinkText>Customer Success</SbLinkText>
            </SbLink>
          </SbListItem>
        </SbList>
      </SbSection>
    </aside>
  );
};