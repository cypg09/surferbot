export default function Column(props) {
  function renderTotalProfit() {
    if (props.totalProfit < 0) {
      return (
        <td className="m-1 font-mono text-xl text-center text-red-700 dark:text-red-400">
          <p className="m-3">{props.totalProfit}{'%'}</p>
        </td>
      );
    }
    return (
      <td className="m-1 font-mono text-xl text-center text-green-700 dark:text-green-400">
        <p className="m-3">{'+'}{props.totalProfit}{'%'}</p>
      </td>
    );
  }
  return(
    <tr>
      <td className="m-1 text-xl text-center text-black uppercase dark:text-white">
        <p className="m-3">{props.name}</p>
      </td>
      <td className="m-1 font-mono text-xl text-center text-black dark:text-white">
        <p className="m-3">{props.allocation}</p>
      </td>
      <td className="m-1 font-mono text-xl text-center text-black dark:text-white">
        <p className="m-3">{props.quantity}</p>
      </td>
      <td className="m-1 font-mono text-xl text-center text-black dark:text-white">
        <p className="m-3">{props.averageBuyPrice}</p>
      </td>
      <td className="m-1 font-mono text-xl text-center text-black dark:text-white">
        <p className="m-3">{props.currentPrice}</p>
      </td>
      {renderTotalProfit()}
    </tr>
  );
}