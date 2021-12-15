import { useState, useEffect } from "react";
import Column from "./Column";

export default function Table(props) {
  const [header, setHeader] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    function renderHeader() {
      let columns = props.getHeader();
      let header = columns.map(columnName => 
        <th 
          key={columnName}
          scope="col" 
          className="px-6 py-6 text-sm font-semibold tracking-wider text-center text-gray-500 uppercase dark:text-white"
        >
        {columnName}
        </th>
      );
      return header;
    }

    function renderColumns() {
      let items = props.getItems()
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
    <div className="border px-3 pt-1 pb-4 rounded-xl">
      <table className="w-full divide-y divide-gray-300">
        <thead>
          <tr>
            {header}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {items}
        </tbody>
      </table>
    </div>
  );
}