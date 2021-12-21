export default function Homepage() {
  document.title = "Welcome on Surfersheets !";
  return (
    <div className="container place-content-center text-center text-black dark:text-white p-1 mx-auto mt-12">
      <div className="grid grid-cols-6 gap-4 lg:gap-8 place-content-center px-2">

        <div className="col-span-6 md:col-span-3 my-12">
          <h1 className="text-5xl font-semibold md:text-left text-black dark:text-white">
            Your crypto portfolio,
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-blue-500 via-blue-300 to-blue-200">
              upgraded
            </span>
            .
          </h1>

          <ul className=" mt-8 text-white md:text-left font-thin">
            <li>In one click, get an overview of your crypto portfolio to facilitate your investment strategy.</li>
            <li>Trade on your exchange and everything will be automatically updated.</li>
          </ul>
        </div>

        <div className="bg-white col-span-6 my-12 md:col-span-3 flex justify-center items-center">
          <div className="">
            <p className="h-full text-black">
              Mockup de la VF du dashboard sur un ordinateur + téléphone
            </p>
          </div>
          <button className="bg-yellow-300 my-1 text-white rounded-xl py-1 px-4">Buy now</button>
        </div>

        <div className="col-span-6 my-12 space-y-8">
          <p className="text-3xl font-medium ">Your automated sheet</p>
          <p className="bg-black dark:bg-white text-white dark:text-black h-96">Screen dans un mockup de la page web de la sheet</p>
        </div>

        <card className="col-span-3  lg:px-4 md:col-span-2 space-y-2 py-12 px-3 bg-gray-200 text-left dark:bg-white rounded-xl">
          <p className="text-black font-bold text-lg">
            Updated in real time
          </p>
          <p className="text-black font-extralight text-sm">
            Thanks to your API keys, your portfolio will be updated 24/7 in one click. Gone are the days when uou did your excel sheet by hand.
          </p>
        </card>

        <card className="col-span-3 lg:px-4 md:col-span-2 space-y-2 py-12 px-3 bg-gray-200 text-left dark:bg-white rounded-xl">
          <p className="text-black font-bold text-lg">
            Track your allocations
          </p>
          <p className="text-black font-extralight text-sm">
            With a chart, see the share of cryptos in your bag in percentage but also in cash.
          </p>
        </card>

        <card className="col-span-3 lg:px-4 md:col-span-2 space-y-2 py-12 px-3 bg-gray-200 text-left dark:bg-white rounded-xl">
          <p className="text-black font-bold text-lg">
            Average purchase price
          </p>
          <p className="text-black font-extralight text-sm">
            No need to use a calculator, we do the calculations for you: quantities, prices of your entries, current price. 
          </p>
        </card>

        <card className="col-span-3 lg:px-4 md:col-span-2 md:col-start-2 space-y-2 py-12 px-3 bg-gray-200 text-left dark:bg-white rounded-xl">
          <p className="text-black font-bold text-lg">
            Current profit/loss
          </p>
          <p className="text-black font-extralight text-sm">
            At a glance, look at your initial capital, your current capital and your current gains. Analyze your profitability percentage quickly for each crypto.
          </p>
        </card>

        <card className="col-span-6 text-center md:text-left lg:px-4 md:col-span-2 space-y-2 py-12 px-3 bg-gray-200 text-left dark:bg-white rounded-xl">
          <p className="text-black font-bold text-lg">
            Control your cash flow
          </p>
          <p className="text-black font-extralight text-sm">
            If you take profit or add capital, the cash flow will be directly updated. Ready to seize new opportunities.
          </p>
        </card>

        <div className="col-span-6 bg-blue-100 w-full rounded py-20 my-20">
          <p className="text-4xl text-gray-800">
            All of this, for <span
           className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-400 to-indigo-500">
            5€ per month
          </span>
          .</p>
        </div>

        <div className="col-span-4 col-start-2 text-center flex ">
          <img className="object-contain h-40 justify-self-end " src="../logo-front.png"/>
          <div className="flex flex-row">
            <p className="self-center text-5xl">
              <span className="font-bold">Surfer</span>bot
              <p className="font-thin text-sm">Surf the trend for only 5€</p>
            </p>
          </div>
        </div>

        <div className="col-span-6 text-center mb-20">
          <button className="bg-yellow-300 my-1 text-white rounded-xl text-base py-1 px-4">Buy now</button>
        </div>

      </div>
      <div className="flex place-content-center">
      </div>
    </div>
  );
}