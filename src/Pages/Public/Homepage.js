export default function Homepage() {
  document.title = "Welcome on Surfersheets !";
  return (
    <div className="container mx-auto place-content-center p-1">
      <h1 className="dark:text-white text-black text-5xl font-bold text-center">
        Your crypto portfolio,
        <br/>
        <span className="bg-clip-text bg-gradient-to-t from-blue-500 via-blue-300 to-blue-200 text-transparent text-5xl font-bold text-center">
          upgraded
        </span>
        .
      </h1>
      <ul className="text-gray-400 p-3 m-3 text-center">
        <li>Have a unique view on your portfolio.</li>
        <li>See all your ROE within one click.</li>
      </ul>
      <div className="container mx-auto bg-blue-50 m-3 p-3 rounded-lg">
        <ul className="text-5xl text-dark text-center">
          <li className="my-5">Hey !</li>
          <li className="my-5">Our tools are super great.</li>
        </ul>
      </div>
      <ul className="text-gray-400 p-3 m-3 text-center">
        <li>Have a unique view on your portfolio.</li>
        <li>See all your ROE within one click.</li>
      </ul>
      <div className="container mx-auto bg-blue-50 m-3 p-3 rounded-lg">
        <ul className="text-5xl text-dark text-center">
          <li className="my-5">Hey !</li>
          <li className="my-5">Our tools are super great.</li>
        </ul>
      </div>
      <ul className="text-gray-400 p-3 m-3 text-center">
        <li>Have a unique view on your portfolio.</li>
        <li>See all your ROE within one click.</li>
      </ul>
      <div className="container mx-auto bg-blue-50 m-3 p-3 rounded-lg">
        <ul className="text-5xl text-dark text-center">
          <li className="my-5">Hey !</li>
          <li className="my-5">Our tools are super great.</li>
        </ul>
      </div>
    </div>
  );
}