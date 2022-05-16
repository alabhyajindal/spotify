import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/solid';
import { Shuffle } from 'phosphor-react';
import { Rewind } from 'phosphor-react';
import { Play } from 'phosphor-react';
import { FastForward } from 'phosphor-react';
import { Repeat } from 'phosphor-react';

export default function Player() {
  return (
    <div className='p-4 bg-zinc-900 flex items-center gap-14'>
      {/* Current audio */}
      <div className=' flex items-center gap-4'>
        <Image src='/hypnocurrency.jpg' height={60} width={60} />
        <div>
          <h2 className='text-white font-medium text-sm'>Hypnocurrency</h2>
          <p className='text-slate-300 text-xs'>Rezz, deadmau5</p>
        </div>
        <HeartIcon className='h-5 text-green-500' />
      </div>
      {/* Player controls */}
      <div className='flex flex-col gap-4 items-center'>
        <div className='flex gap-2 items-center'>
          <Shuffle size={24} className='text-green-500' />
          <Rewind size={24} className='text-slate-300' />
          <Play size={32} className='text-slate-300' />
          <FastForward size={24} className='text-slate-300' />
          <Repeat size={24} className='text-slate-300' />
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-xs text-slate-300'>0:00</p>
          <div className='h-1 w-[400px] bg-zinc-600 rounded-lg'></div>
          <p className='text-xs text-slate-300'>4:52</p>
        </div>
      </div>
    </div>
  );
}
