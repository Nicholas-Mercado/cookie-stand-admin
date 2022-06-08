import Head from 'next/head'
import { useState } from 'react'; 
import Header from '../components/Header'
import Footer from '../components/Footer'
import StandInputForm from '../components/StandInputForm'
import CookieStandTable from '../components/CookieStandTable'

export default function Home() {

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
        <StandInputForm inputHandler={cookieStandInputHandler}/>
        <CookieStandTable table={table}/>
      </main>
      <Footer copyright="2022" table={table}/>
    </div>
  )
}









