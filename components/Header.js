import Link from 'next/link';
import { useAuth } from "../contexts/auth";

export default function Header(props) {
const { user, logout } = useAuth();
if (props.user) {
return (
        
      <header className="relative flex justify-between py-6 text-4xl font-semibold text-gray-800 prex-8 bg-emerald-500">
        <h1>Cookie Stand Admin</h1>
        <div className=''>
        <button
            className='float-left px-4 py-1 mx-2 my-5 font-medium rounded-md bg-emerald-50 text-zinc-600'
            onClick={logout}
          >
            Sign Out
          </button>
          <Link href="/overview">
            <button className='float-left px-4 py-1 mx-2 my-5 font-medium rounded-md bg-emerald-50 text-zinc-600'>Overview</button>
          </Link>
        </div>
      </header>
)
}
 else {

    return(
      <header className="relative flex justify-between py-6 text-4xl font-semibold text-gray-800 prex-8 bg-emerald-500">
        <h1>Cookie Stand Admin</h1>
      
      </header>
    )
  
}}
