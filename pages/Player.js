import Image from 'next/image';

export default function Player() {
  return (
    <div className='p-4 bg-zinc-900 flex items-center gap-4'>
      <Image src='/hypnocurrency.jpg' height={60} width={60} />
      <div>
        <h2 className='text-white font-medium text-sm'>Hypnocurrency</h2>
        <p className='text-slate-300 text-xs'>Rezz, deadmau5</p>
      </div>
    </div>
  );
}
