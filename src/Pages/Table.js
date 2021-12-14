import Column from "./Column";

export default function Table() {

  function renderHead() {
    let columns = [
      'Name',
      'Allocation (%)',
      'Quantity',
      'Average buying price',
      'Current price',
      'Total profit',
    ];
    let header = columns.map(columnName => 
      <th 
        scope="col" 
        className="px-6 py-3 text-xs font-semibold tracking-wider text-center text-gray-500 uppercase dark:text-white"
      >
       {columnName}
      </th>
    );
    return header;
  }

  function renderColumns() {
    let items = [
      {
        name: 'btc',
        allocation: '3%',
        quantity: 4,
        averageBuyPrice: 4000,
        currentPrice: 5000,
        totalProfit: 300,
      },
      {
        name: 'eth',
        allocation: '3%',
        quantity: 4,
        averageBuyPrice: 4000,
        currentPrice: 5000,
        totalProfit: -20,
      },
      {
        name: 'XRP',
        allocation: '3%',
        quantity: 4,
        averageBuyPrice: 4000,
        currentPrice: 5000,
        totalProfit: 300,
      },
      ];

    let table = items.map(column => 
      <Column 
        name={column.name}
        allocation={column.allocation}
        quantity={column.quantity}
        averageBuyPrice={column.averageBuyPrice}
        currentPrice={column.currentPrice}
        totalProfit={column.totalProfit}
      />
    );
    return table;
  }

  return(
    <div className="px-3 pt-1 pb-4 bg-gray-100 rounded-xl dark:bg-gray-700">
      <table className="w-full bg-gray-100 divide-y divide-gray-200 dark:divide-gray-800 dark:bg-gray-700">
        <thead>
          {renderHead()}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-800 dark:bg-gray-600">
          {renderColumns()}
        </tbody>
      </table>
    </div>
  );
}