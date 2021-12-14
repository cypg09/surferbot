import Column from "./Column";

export default function Table() {

  function renderColumns() {


    let items = [
      {
        name: 'abc',
        value: 1,
        number: 3,
      },
      {
        name: 'abc',
        value: 1,
        number: 3,
      },
      {
        name: 'abc',
        value: 1,
        number: 3,
      },
      ];


    let table = items.map(column => 
      <Column 
        name={column.name}
        value={column.value}
        number={column.number}
      />
    );
    return table;
  }

  return(
    <div className="px-3 pt-1 pb-4 bg-gray-100 rounded-xl dark:bg-gray-700">
      <table className="w-full bg-gray-100 divide-y divide-gray-200 dark:divide-gray-800 dark:bg-gray-700">
        <thead>
          <tr className="">
            <th 
              scope="col" 
              className="px-6 py-3 text-xs font-semibold tracking-wider text-center text-gray-500 uppercase dark:text-white"
            >
              Name
            </th>
            <th 
              scope="col" 
              className="px-6 py-3 text-xs font-semibold tracking-wider text-center text-gray-500 uppercase dark:text-white"
            >
              Value
            </th>
            <th 
              scope="col" 
              className="px-6 py-3 text-xs font-semibold tracking-wider text-center text-gray-500 uppercase dark:text-white"
            >
              Number
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-800 dark:bg-gray-600">
          {renderColumns()}
        </tbody>
      </table>
    </div>
  );
}