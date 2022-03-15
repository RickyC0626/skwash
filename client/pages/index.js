import { HeaderNav } from '../components/HeaderNav';
import { Sidebar } from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="grow">
          <HeaderNav />
          <hr/>
          <div className="py-4 px-6">
            <span className="text-xl">
              Pinned Projects
            </span>
          </div>
          <hr/>
          <main className="py-4 px-6">
            <span className="text-xl">
              Projects
            </span>
          </main>
        </div>
      </div>
    </>
  )
}
