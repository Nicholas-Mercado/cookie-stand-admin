import { hours } from '../data';


export default function CookieStandTable({ table }) {



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
          <tr>
            <th className="p-2 border border-black">Location</th>
            {hours.map(item => (
              <th key={item} className="p-2 border border-black">{item}</th>
            ))}
            <th className="p-2 border border-black">Total</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item, idx) => (
            <tr key={idx}>
              <td className="p-2 border border-black">{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

