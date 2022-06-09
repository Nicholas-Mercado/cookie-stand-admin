import Head from 'next/head'
import { useState } from 'react'; 
import Header from '../components/Header'
import Footer from '../components/Footer'
import StandInputForm from '../components/StandInputForm'
import CookieStandTable from '../components/CookieStandTable'
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth';

export default function Home() {


  const { user, login } = useAuth();

  const [table, setCookieStand] = useState([]);

  function cookieStandInputHandler(data){

    setCookieStand([...table, data]);
  }
  return (
    <div>
      <Head>
        <title>Cookie Stand</title>
      </Head>
      <Header/>
      <main>
      {user ?
        <><StandInputForm inputHandler={cookieStandInputHandler} /><CookieStandTable table={table} /></>
        :
        <LoginForm onLogin={login} />
            }
      </main>
      <Footer copyright="2022" table={table}/>
    </div>
  )
}









