import React from 'react';
import { HeaderNav } from '../components/HeaderNav';
import { PinnedProjects } from '../components/PinnedProjects';
import { Projects } from '../components/Projects';
import { Sidebar } from '../components/Sidebar';

export default function ProjectsPage() {
  return (
    <>
      {/* <div className="flex">
        <Sidebar />
        <div className="grow">
          <HeaderNav />
          <hr/>
          <main>
            <PinnedProjects />
            <Projects />
          </main>
        </div>
      </div> */}
      <main></main>
    </>
  )
}