import { DotIcon } from './DotIcon';

const projectData = [
  {
    name: 'GraphQL API',
    team: 'Engineering',
    members: [{},{},{},{},{},{},{},{}],
    lastUpdated: '2020-03-17',
  },
  {
    name: 'New Benefits Plan',
    team: 'Human Resources',
    members: [{},{},{},{}],
    lastUpdated: '2020-04-04',
  },
  {
    name: 'Onboarding Emails',
    team: 'Customer Success',
    members: [{},{},{},{},{},{},{},{},{},{}],
    lastUpdated: '2020-03-30',
  },
  {
    name: 'iOS App',
    team: 'Engineering',
    members: [{},{}],
    lastUpdated: '2020-03-30',
  },
];

const dotColors = {
  engineering: 'fill-indigo-500',
  humanResources: 'fill-emerald-500',
  customerSuccess: 'fill-amber-500',
};

const toCamelCase = (str = '') => str
  .replace(/[^a-z0-9]/gi, ' ')
  .toLowerCase()
  .split(' ')
  .map((el, ind) => ind === 0 ? el : el[0].toUpperCase() + el.substring(1, el.length))
  .join('');

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const Projects = () => {
  return (
    <table className='table-auto min-w-full'>
      <thead className='project-table-head'>
        <tr>
          <th scope='col' className='project-table-heading'>Projects</th>
          <th scope='col' className='project-table-heading'>Members</th>
          <th scope='col' className='project-table-heading'>Last Updated</th>
          <th scope='col' className='relative px-6'>
            <span className='sr-only'>Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {projectData.map(project => (
            <tr className='border-b'>
              <td className='py-4 px-6 whitespace-nowrap flex gap-2'>
                <DotIcon className={dotColors[toCamelCase(project.team)]} />
                <div>
                  <span className='font-semibold'>{project.name}</span>{' '}
                  <span className='text-gray-500'>in {project.team}</span>
                </div>
              </td>
              <td className='py-4 px-6 whitespace-nowrap text-gray-500'>{project.members.length}</td>
              <td className='py-4 px-6 whitespace-nowrap text-gray-500'>{new Date(project.lastUpdated).toLocaleDateString(undefined, dateOptions)}</td>
              <td className='py-4 px-6 text-right whitespace-nowrap'>
                <a href='#' className='text-indigo-500 font-bold'>Edit</a>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  )
}