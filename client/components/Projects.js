export const Projects = () => (
  <table class='table-auto min-w-full'>
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
          <svg viewBox='0 0 100 100' className='w-6 h-auto fill-pink-500'>
            <circle cx='50%' cy='50%' r='25' />
          </svg>
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