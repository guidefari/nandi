import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Make a Payment</h1>
          <p className="text-gray-600 dark:text-gray-400">Enter your payment details to complete the transaction.</p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="card-number">
              Card Number
            </label>
            <div className="mt-1">
              <input
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                id="card-number"
                placeholder="1234 5678 9012 3456"
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="expiration-date">
                Expiration Date
              </label>
              <div className="mt-1">
                <input
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  id="expiration-date"
                  placeholder="MM/YY"
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="cvc">
                CVC
              </label>
              <div className="mt-1">
                <input
                  className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  id="cvc"
                  placeholder="123"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Or choose a fixed payment amount:</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                type="button"
              >
                R50
              </button>
              <button
                className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                type="button"
              >
                R100
              </button>
              <button
                className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                type="button"
              >
                R200
              </button>
              <button
                className="inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                type="button"
              >
                R250
              </button>
            </div>
          </div>
          <button
            className="w-full inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
            type="submit"
          >
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
}
