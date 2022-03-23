import React from 'react';
import { HeaderNav } from '../components/HeaderNav';
import { PinnedProjects } from '../components/PinnedProjects';
import { Projects } from '../components/Projects';

export default function ProjectsPage() {
  return (
    <div id='page-wrapper'>
      <div id='page-content'>
        <HeaderNav />
        <hr/>
        <main>
          <PinnedProjects/>
          <Projects />
        </main>
        <hr/>
        <footer></footer>
      </div>
    </div>
  )
}