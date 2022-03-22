import React from 'react';
import { DotsVerticalIcon } from '@heroicons/react/solid'

export const PinnedProjects = () => (
  <div className='py-4 px-6 mb-2 space-y-3'>
    <span className='uppercase text-gray-500 font-bold text-sm'>
      Pinned Projects
    </span>
    <div className='max-h-16 max-w-fit flex rounded-lg'>
      <div className='w-16 bg-pink-500 rounded-l-lg grid place-items-center'>
        <span className='text-white font-bold'>GA</span>
      </div>
      <button className='grow border rounded-r-lg shadow-sm hover:bg-gray-100'>
        <div className='h-full flex py-2 px-4 gap-3'>
          <div className='flex flex-col'>
            <span className='font-bold truncate text-left'>GraphQL API</span>
            <span className='text-gray-500 text-left'>12 Members</span>
          </div>
          <DotsVerticalIcon className='w-6 text-gray-400' href='#' />
        </div>
      </button>
    </div>
  </div>
)