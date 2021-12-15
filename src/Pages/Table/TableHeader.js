export default function TableHeader(props) {
  return(
  <div className="container m-3 lg:mt-12">
    <div className="flex justify-center text-center">
      <div className="grid grid-cols-2 md:grid-cols-4">

        <card className="p-4 m-2 space-y-1 text-center rounded-3xl border border-gray-600 dark:border-gray-300">
          <p class="font-extralight text-gray-600 dark:text-gray-400">
            Capital total
          </p>
          <p class="font-mono text-3xl text-black dark:text-white">
            14000$
          </p>
          <p class="font-mono text-green-500 dark:text-green-400">
              +140$<span className="font-sans text-sm font-extralight text-gray-600 dark:text-gray-400"> last 24h</span>
          </p>
        </card>

        <card className="p-4 m-2 space-y-1 text-center rounded-3xl border border-gray-600 dark:border-gray-300">
            <p class="font-extralight text-gray-600 dark:text-gray-400">
              Gains totaux
            </p>
            <p class="font-mono text-3xl text-green-500 dark:text-green-400">
              1400$
            </p>
        </card>
        <card className="p-4 m-2 space-y-1 text-center rounded-3xl border border-gray-600 dark:border-gray-300">
          <div className="flex-col">
            <p class="font-extralight text-gray-600 dark:text-gray-400">
              Liquidités
            </p>
            <p class="font-mono text-3xl text-black dark:text-white">
              30%
            </p>
          </div>
        </card>
        <card className="p-4 m-2 space-y-1 text-center rounded-3xl border border-gray-600 dark:border-gray-300">
          <div className="flex-col">
            <p class="font-extralight text-gray-600 dark:text-gray-400">
              Capital de départ
            </p>
            <p class="font-mono text-3xl text-black dark:text-white">
              1500$
            </p>
          </div>
        </card>

</div>
</div>
</div>

  );
}