import { useAuth } from '../contexts/auth';
import useResource from '../hooks/useResource';


export default function StandInputForm(props) {
  const { user } = useAuth();
  const { createResource } = useResource();
  


  function handleSubmit(event) {

    

    event.preventDefault();
    var standData = {
      location: event.target.location.value,
      minimum_customers_per_hour: parseInt(event.target.minimum.value),
      maximum_customers_per_hour: parseInt(event.target.maximum.value),
      average_cookies_per_sale: parseFloat(event.target.average.value),
      owner: user.id,
    };
    createResource(standData);
    // const totalDaySales = totalDay(standData.hourly_sales)
    // standData.total = totalDaySales
    props.inputHandler(standData)
    event.target.reset();
  }

  return (
    <div className="flex justify-center py-6">
      <form onSubmit={handleSubmit} className="flex-wrap w-1/2 p-2 rounded-md bg-emerald-300" >
        <h2 className="py-8 text-2xl font-semibold text-center text-black-50" > Create Cookie Stand </h2>
        <div className='flex py-2 pb-6 font-semibold'>
          <label className='pr-2'>Location</label>
          <input name="location" className="flex-auto" />
        </div>
        <div className="flex w-full mb-3 ">
          <div className='w-full p-4 px-3 m-4 mb-6 text-center rounded-md md:w-1/4 md:mb-0 bg-emerald-200' >
            <label className='block mb-2 text-sm font-bold tracking-wide text-center text-gray-700 ' >Minimum Customers per Hour</label>
            <input name="minimum" />
          </div>
          <div className='w-full p-4 px-3 m-4 mb-6 text-center rounded-md md:w-1/4 md:mb-0 bg-emerald-200'  >
            <label className='block mb-2 text-sm font-bold tracking-wide text-center text-gray-700 '>Maximum Customers per Hour</label>
            <input name="maximum" />
          </div>
          <div className='w-full p-4 px-3 m-4 mb-6 text-center rounded-md md:w-1/4 md:mb-0 bg-emerald-200 '>
            <label className='block mb-2 text-sm font-bold tracking-wide text-center text-gray-700 '>Average Cookies per Sale</label>
            <input name="average" />
          </div>
          <button className='w-full p-4 px-3 m-4 mb-6 text-center rounded-md md:w-1/4 md:mb-0 bg-emerald-600 '>Create</button>
        </div>
      </form>
    </div>
  )

}
