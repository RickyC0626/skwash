import { DotIcon } from './DotIcon';

export const Projects = () => (
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
      <tr className='border-b'>
        <td className='py-4 px-6 whitespace-nowrap flex gap-2'>
          <DotIcon className='fill-pink-500' />
          <div>
            <span className='font-semibold'>GraphQL API</span>{' '}
            <span className='text-gray-500'>in Engineering</span>
          </div>
        </td>
        <td className='py-4 px-6 whitespace-nowrap text-gray-500'>12</td>
        <td className='py-4 px-6 whitespace-nowrap text-gray-500'>March 17, 2020</td>
        <td className='py-4 px-6 text-right whitespace-nowrap'>
          <a href='#' className='text-indigo-500 font-bold'>Edit</a>
        </td>
      </tr>
    </tbody>
  </table>
)