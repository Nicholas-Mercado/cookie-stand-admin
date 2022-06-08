import Head from 'next/head'
import { useState } from 'react'; 
import Header from '../components/Header'
import Footer from '../components/Footer'
import StandInputForm from '../components/StandInputForm'
import CookieStandTable from '../components/CookieStandTable'

export default function Home() {

  const [table, setCookieStand] = useState("");

  function cookieStandInputHandler(event){
    var standData = {
      location : event.target.location.value,
      minCustomer : event.target.min.value,
      maxCustomer : event.target.max.value,
      avgCustomer : event.target.avg.value,
    }
    const standDataString = JSON.stringify(standData)

    event.preventDefault();
    setCookieStand(standDataString);
    event.target.reset();
  }
  return (
    <div>
      <Head>
        <title>Cookie Stand</title>
      </Head>
      <Header/>
      <main>
        <StandInputForm onSubmit={cookieStandInputHandler}/>
        <CookieStandTable table={table}/>
      </main>
      <Footer copyright="2022"/>
    </div>
  )
}









