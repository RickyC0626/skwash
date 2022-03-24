import React from 'react';
import styles from './Sidebar.module.css';
import { HomeIcon, ClockIcon, MenuIcon } from '@heroicons/react/outline';

import { DotIcon } from '../DotIcon';

export const Sidebar = () => (
  <aside className={styles.sidebar}>
    <SbSection>
      <SbList>
        <SbListItem>
          <SbLink href='#'>
            <SbLinkIcon Icon={HomeIcon} />
            <SbLinkText>Home</SbLinkText>
          </SbLink>
        </SbListItem>
        <SbListItem>
          <SbLink href='#'>
            <SbLinkIcon Icon={MenuIcon} />
            <SbLinkText>Menu</SbLinkText>
          </SbLink>
        </SbListItem>
        <SbListItem>
          <SbLink href='#'>
            <SbLinkIcon Icon={ClockIcon} />
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
)

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

const SbLinkIcon = ({ Icon }) => (
  <Icon className={styles['sidebar-link-icon']} />
);

const SbLinkText = ({ children }) => (
  <span className={styles['sidebar-link-text']}>
    {children}
  </span>
);