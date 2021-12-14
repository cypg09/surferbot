import TableMobile from "./TableMobile";
import TableDesktop from "./TableDesktop";

export default function Table() {
  document.title = 'Dashboard';

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

  return(
    <>
      <div className="hidden lg:block">
        <TableDesktop 
          items={getItems}
          header={getHeader}
        />
      </div>
      <div className="block lg:hidden">
        <TableMobile 
          items={getItems}
          header={getHeader}
        />
      </div>
    </>
  );
}