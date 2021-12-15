import { useState, useEffect } from "react";
import ColumnMobile from "./ColumnMobile";


export default function TableMobile(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function renderColumns() {
      let items = props.getItems()
      let table = items.map(column => 
        <ColumnMobile 
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
      setItems(renderColumns());
    }
    return renderComponent();
  }, []);

  return(
    <div className="grid grid-cols-1 justify-center px-1 pt-1 pb-4 rounded-xl md:grid-cols-2">
      {items}
    </div>
  );
}