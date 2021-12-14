export default function Column(props) {
  return(
    <tr>
      <td className="m-1 text-xl text-center text-black dark:text-white">
        <p className="m-3">{props.name}</p>
      </td>
      <td className="m-1 font-mono text-xl text-center text-green-700 dark:text-green-300">
        <p className="m-3">{props.value}</p>
      </td>
      <td className="m-1 font-mono text-xl text-center text-black dark:text-white">
        <p className="m-3">{props.number}</p>
      </td>
    </tr>
  );
}