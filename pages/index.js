import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cookie Stand</title>
      </Head>
      <Header/>
      <main>
        <StandInputForm onSubmit={cookieStandInputHandler}/>
        <Response/>
      </main>
      <Footer copyright="2022"/>
    </div>
  )
}

function StandInputForm(props){
  return (
    <div className="justify-center relative flex py-6">
    <form onSubmit={props.onSubmit} className="flex-wrap w-1/2 p-2  bg-emerald-300 rounded-md" >
      <h2 className="text-center font-semibold py-8 text-black-50 text-2xl" > Create Cookie Stand </h2>
      <div className='font-semibold flex py-2 pb-6'>
        <label className='pr-2'>Location</label>
        <input className="flex-auto" />
      </div>
      <div className="flex justify-center relative">
        <div>
          <label className=''>Minimum Customers per Hour</label>
          <input/>
        </div>
        <div>
          <label>Maximum Customers per Hour</label>
          <input/>
        </div>
        <div>
          <label>Average Cookies per Sale</label>
          <input/>
        </div>
        <button className=" px-4 py-3 bg-emerald-600 text-black-50">Create</button>
      </div>
    </form>
    </div>
  )

}

function Response(){
  return (
    <div>
      <h3 className="justify-center relative flex py-6">
        Report Table Comning Soon...
      </h3>
    </div>
  )
  
}

function Header() {
  return <header className="font-semibold px-8 py-6 text-4xl bg-emerald-500 text-gray-800">
      <h1>Cookie Stand Admin</h1>
  </header>
}

function Footer({ copyright }) {
  return (
      <footer className="font-semibold px-8 py-6 text-2xl bg-emerald-500 text-gray-800">
          <p>&copy;{copyright}</p>
      </footer>
  )
}

function cookieStandInputHandler(event){
  event.preventDefault();
  alert("something")
}
