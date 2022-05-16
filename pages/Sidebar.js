import Image from 'next/image';
import { HomeIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/outline';
import { CollectionIcon } from '@heroicons/react/outline';
import { PlusIcon } from '@heroicons/react/solid';
import { HeartIcon } from '@heroicons/react/solid';
import { BookmarkIcon } from '@heroicons/react/solid';

export default function Sidebar() {
  return (
    <header className=' bg-black p-5'>
      <div className='relative h-10 cursor-pointer p-5'>
        <Image
          src='/logo.png'
          objectFit='contain'
          objectPosition='left'
          layout='fill'
        />
      </div>

      <div className='mt-6'>
        <div className='flex gap-4 items-center'>
          <HomeIcon className='h-6 text-slate-300' />
          <h2 className='text-slate-300 font-medium text-sm'>Home</h2>
        </div>
        <div className='flex gap-4 items-center mt-4'>
          <SearchIcon className='h-6 text-slate-300' />
          <h2 className='text-slate-300 font-medium text-sm'>Search</h2>
        </div>
        <div className='flex gap-4 items-center mt-4'>
          <CollectionIcon className='h-6 text-slate-300' />
          <h2 className='text-slate-300 font-medium text-sm'>Your Library</h2>
        </div>
      </div>

      <div className='mt-10'>
        <div className='flex gap-4 items-center'>
          <PlusIcon className='h-6 text-black bg-slate-300 p-1 rounded-sm' />
          <h2 className='text-slate-300 font-medium text-sm'>
            Create Playlist
          </h2>
        </div>
        <div className='flex gap-4 items-center mt-4'>
          <HeartIcon className='h-6 text-slate-300 bg-purple-600 p-1 rounded-sm' />
          <h2 className='text-slate-300 font-medium text-sm'>Liked Songs</h2>
        </div>
        <div className='flex gap-4 items-center mt-4'>
          <BookmarkIcon className='h-6 text-green-500 bg-green-900 p-1 rounded-sm' />
          <h2 className='text-slate-300 font-medium text-sm'>Your Episodes</h2>
        </div>
      </div>

      <div className='border-t border-slate-700 mt-4 mb-4'></div>
      <ul className='text-slate-300 text-sm flex flex-col gap-4'>
        <li>Ambient Relaxation</li>
        <li>Electronic Focus</li>
        <li>House Focus</li>
        <li>This is Sasha Alex Sloan</li>
        <li>This is Machine Gun Kelly</li>
        {/* <li>Coding Mode</li> */}
        {/* <li>Your Top Songs 2021</li>
        <li>This is Bach</li>
        <li>Podcasts</li>
        <li>Run</li> */}
      </ul>
    </header>
  );
}
