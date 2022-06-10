import { hours } from '../data';


export default function CookieStandTable({ table }) {

function totalHourly(table){
  let hourlyTotal = []
  for (let i = 0; i < hours.length; i++){
    let hours = 0;
    table.map(item => {
      hours += item.hourly_sales[i]
    })
    hourlyTotal[i] = hours
  }
  
  return (hourlyTotal)
  }
  function totalDay(arr) {
    let total = 0
    arr.forEach(
      num => total += num
    )
    return total
  }
  
function totalFinal(arr){
  let total = 0
  for (let i = 0; i < arr.length; i++){
    total += arr[i]
  }
  return total
}
let grandTotal = totalFinal(totalHourly(table))
  if (table.length == 0) {

    return (
      <h2 className="w-1/2 mx-auto my-8 text-4xl text-center">
        No Cookie Stands Available
      </h2>
    );

  } else {

    return (
      <table className="w-1/2 mx-auto my-4 border">
        <thead>
          <tr className="even:bg-emerald-300 odd:bg-emerald-400 ">
            <th className="p-2 border border-black bg-emerald-600">Location</th>
            {hours.map(item => (
              <th key={item} className="p-2 border border-black bg-emerald-600">{item}</th>
            ))}
            <th className="p-2 border border-black bg-emerald-600">Total</th>
          </tr>
        </thead>

		
        <tbody>
          {table.map((item, idx) => (
            <tr key={idx} className="even:bg-emerald-300 odd:bg-emerald-400 ">
              <td className="p-2 border border-black ">{item.location}</td>
              {item.hourly_sales.map((int, idx) => (
              <td key={idx} className="p-2 border border-black even:bg-emerald-300 odd:bg-emerald-400 ">{int}</td>
              ))}
              <td className="p-2 border border-black even:bg-emerald-300 odd:bg-emerald-400" >{item.total}</td>
            </tr>
          ))}
          
        </tbody>
        <tfoot>
            <th className="p-2 font-bold border border-black bg-emerald-600">Totals</th>
            {totalHourly(table).map((item, idx) => (
              <th key={idx} className="p-2 border border-black bg-emerald-600">{item}</th>
			  
              ))}
			
              <th className="p-2 border border-black bg-emerald-600">{grandTotal}</th>
        </tfoot>
      </table>
    );
  }
}

