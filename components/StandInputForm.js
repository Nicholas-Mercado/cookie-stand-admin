export default function StandInputForm(props){
    return (
      <div className="relative flex justify-center py-6">
      <form onSubmit={props.onSubmit} className="flex-wrap w-1/2 p-2 rounded-md bg-emerald-300" >
        <h2 className="py-8 text-2xl font-semibold text-center text-black-50" > Create Cookie Stand </h2>
        <div className='flex py-2 pb-6 font-semibold'>
          <label className='pr-2'>Location</label>
          <input name="location" className="flex-auto" />
        </div>
        <div className="relative flex justify-center">
          <div>
            <label className=''>Minimum Customers per Hour</label>
            <input name="min"/>
          </div>
          <div>
            <label>Maximum Customers per Hour</label>
            <input name="max"/>
          </div>
          <div>
            <label>Average Cookies per Sale</label>
            <input name="avg"/>
          </div>
          <button className="px-4 py-3 bg-emerald-600 text-black-50">Create</button>
        </div>
      </form>
      </div>
    )
  
  }
