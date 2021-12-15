import Table from "../Table/Table";
import TableMobile from "../Table/TableMobile";

function Demo() {
  document.title = "Demo";

  function getHeader() {
    let columns = [
      'Crypto',
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

  return (
  <div id="currentPage" className="container place-content-center p-1 mx-auto">
    <h1 className="m-6 text-3xl font-extrabold text-center text-black dark:text-white">Dashboard</h1>
    <div className="hidden lg:block">
      <Table
      getHeader={getHeader}
      getItems={getItems}
      />
    </div>
    <div className="block lg:hidden">
      <TableMobile
        getHeader={getHeader}
        getItems={getItems}
      />
    </div>
  </div>
  );
}

export default Demo;