import { Sidebar } from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="grow">
          <header className="py-4 px-6">
            <span className="text-xl">
              Home
            </span>
          </header>
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
