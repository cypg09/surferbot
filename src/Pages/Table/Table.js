import { useState, useEffect } from "react";
import Column from "./Column";

export default function Table(props) {
  const [header, setHeader] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {

    function getHeader() {
      let columns = [
        'Name',
        'Allocation (%)',
        'Quantity',
        'Average buying price',
        'Current price',
        'Total profit',
      ];
      return columns;
    }

    function getItems() {
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
      return items;
    }

    function renderHeader() {
      let columns = getHeader();
      let header = columns.map(columnName => 
        <th 
          key={columnName}
          scope="col" 
          className="px-6 py-3 text-xs font-semibold tracking-wider text-center text-gray-500 uppercase dark:text-white"
        >
        {columnName}
        </th>
      );
      return header;
    }

    function renderColumns() {
      let items = getItems()
      let table = items.map(column => 
        <Column 
          key={column.name}
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

    function renderComponent() {
      setHeader(renderHeader());
      setItems(renderColumns());
    }
    return renderComponent();
  }, []);

  return(
    <div className="px-3 pt-1 pb-4 bg-gray-100 rounded-xl dark:bg-gray-700">
      <table className="w-full bg-gray-100 divide-y divide-gray-200 dark:divide-gray-800 dark:bg-gray-700">
        <thead>
          <tr>
            {header}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-800 dark:bg-gray-600">
          {items}
        </tbody>
      </table>
    </div>
  );
}