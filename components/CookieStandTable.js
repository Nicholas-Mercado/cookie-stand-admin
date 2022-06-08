


export default function CookieStandTable({ table }){


  
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
                    <th className="border border-black">No.</th>
                    <th className="border border-black">Question</th>
                    <th className="border border-black">Response</th>
                </tr>
            </thead>
            <tbody>
                {table.map(item => (
                    <tr key={item.id}>
                        <td className="p-2 border border-black">{item.id}</td>
                        <td className="p-2 border border-black">{item.location}</td>
                        <td className="p-2 border border-black">{item.answer}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
}
