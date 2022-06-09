import { hourly_sales } from '../data';
export default function StandInputForm(props) {

  function totalDay(arr) {
    let total = 0
    arr.forEach(
      num => total += num
    )
    return total
  }

  function handleSubmit(event) {

    event.preventDefault();
    var standData = {
      id: location.length + 1,
      hourly_sales: hourly_sales,
      location: event.target.location.value,
      minCustomer: event.target.min.value,
      maxCustomer: event.target.max.value,
      avgCustomer: event.target.avg.value,

    }
    const totalDaySales = totalDay(standData.hourly_sales)
    standData.total = totalDaySales
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
            <input name="min" />
          </div>
          <div className='w-full p-4 px-3 m-4 mb-6 text-center rounded-md md:w-1/4 md:mb-0 bg-emerald-200'  >
            <label className='block mb-2 text-sm font-bold tracking-wide text-center text-gray-700 '>Maximum Customers per Hour</label>
            <input name="max" />
          </div>
          <div className='w-full p-4 px-3 m-4 mb-6 text-center rounded-md md:w-1/4 md:mb-0 bg-emerald-200 '>
            <label className='block mb-2 text-sm font-bold tracking-wide text-center text-gray-700 '>Average Cookies per Sale</label>
            <input name="avg" />
          </div>
          <button className='w-full p-4 px-3 m-4 mb-6 text-center rounded-md md:w-1/4 md:mb-0 bg-emerald-600 '>Create</button>
        </div>
      </form>
    </div>
  )

}
