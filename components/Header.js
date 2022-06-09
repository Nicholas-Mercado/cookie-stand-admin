import Link from 'next/link';

export default function Header() {


return (
        
      <header className="relative flex justify-between py-6 text-4xl font-semibold text-gray-800 prex-8 bg-emerald-500">
        <h1>Cookie Stand Admin</h1>
        <div className=''>
          <Link href="/overview">
            <button className='float-left px-4 py-1 mx-2 my-5 font-medium rounded-md bg-emerald-50 text-zinc-600'>Overview</button>
          </Link>
        </div>
      </header>
)
}
