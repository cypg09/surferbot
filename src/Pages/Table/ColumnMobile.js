import { render } from "@testing-library/react";

export default function ColumnMobile(props) {

  let items = [
    {
      key: 'Allocation',
      value: '3%',
     },
    {
      key: 'Quantity',
      value: '4',
     },
    {
      key: 'Average buying price',
      value: '40000',
     },
    {
      key: 'Profit',
      value: renderTotalProfit(),
     },
  ];

  function renderTotalProfit() {
    if (props.totalProfit < 0) {
      return (
        <p className="font-mono text-red-700 dark:text-red-400">{props.totalProfit}{'%'}</p>
      );
    }
    return (
      <p className="font-mono text-green-700 dark:text-green-400">+{props.totalProfit}{'%'}</p>
    );
  }

  function renderItems(items) {
    let components = items.map(item => 
      <p className="p-1 m-1 rounded-md border border-gray-600">
        <span className="text-sm font-extralight text-gray-400">{item.key} </span>
        {item.value}
      </p>
      );
    return components;
  }

  return(
    <div className="flex justify-center px-2 m-1 rounded-xl border border-black dark:border-white">
      <div className="grid grid-cols-2 m-2 text-center text-black w-100 dark:text-white">
      <p className="col-span-2 text-xl text-black uppercase dark:text-white">
        LOGO -  
        {props.name}
      </p>
      {renderItems(items)}
      </div>
    </div>
  );
}

