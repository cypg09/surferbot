export default function Homepage() {
  document.title = "Welcome on Surfersheets !";
  return (
    <div className="container place-content-center p-1 mx-auto mt-12">
      <div className="flex place-content-center">
        <div className="justify-text-center flex-inline">
          <img className="object-contain h-48" src="../logo-front.png"/>
        </div>
      </div>
      <div className="flex place-content-center">
      </div>
      <h1 className="text-5xl font-bold text-center text-black dark:text-white">
        Your crypto portfolio,
        <br/>
        <span className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-t from-blue-500 via-blue-300 to-blue-200">
          upgraded
        </span>
        .
      </h1>
      <ul className="p-3 m-3 text-center text-gray-400 front-extralight">
        <li>Have a unique view on your portfolio.</li>
        <li>See all your ROE within one click.</li>
      </ul>
    </div>
  );
}