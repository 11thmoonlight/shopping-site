function Payment() {
  return (
    <div>
      <h2
        className="md:text-4xl text-2xl px-2
  lg:mt-12 md:mt-10 sm:mt-8 mt-6
  flex justify-center"
      >
        <img
          src="/package.jpg"
          alt=""
          className="rounded-2xl shadow-xl w-36 sm:w-44"
        />
        <div className="flex flex-col justify-center sm:pl-6 pl-3">
          <span className="block font-semibold">payment and delivery</span>
          <span className="block mt-2">the last step</span>
        </div>
      </h2>

      <form method="post" id="paymentForm">
        <input type="hidden" id="fullName" value="" />
        <input type="hidden" id="add1" value="" />
        <input type="hidden" id="add2" value="" />
        <input type="hidden" id="city" value="" />
        <input type="hidden" id="state" value="" />
        <input type="hidden" id="country" value="" />
        <input type="hidden" id="zip" value="" />
        <input type="hidden" id="email" value="" />
        <input type="hidden" id="phoneNo" value="" />
        <input type="hidden" id="paymentMethod" value="" />
      </form>

      <div
        className="lg:mt-12 md:mt-10 sm:mt-8 mt-6
  flex flex-col items-center"
      >
        <span className="md:text-4xl text-2xl block">
          your order will be delivered to
        </span>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row
      lg:mt-12 md:mt-10 sm:mt-8 mt-6 rounded-2xl shadow-xl bg-neutral-50 p-7
      font-semibold text-neutral-700 w-[310px] sm:w-[600px] lg:w-[900px]"
        >
          <div className="flex flex-col justify-around items-center">
            <span className="block">Sam Smith</span>
            <span className="block">sam.smith@sammymail.net</span>
            <span className="block">+1 (989) 458 7878</span>
          </div>
          <div className="flex justify-center mt-10 sm:mt-0">
            <div className="flex flex-col justify-around">
              <span className="block">56 Margarett Ave</span>
              <span className="block">Brooklyn</span>
              <span className="block">New York City</span>
              <span className="block">New York State</span>
              <span className="block">United States of America</span>
              <span className="block">985442</span>
            </div>
          </div>
          <div className="flex flex-col justify-around items-center sm:col-span-2 lg:col-span-1">
            <input
              type="submit"
              form="paymentForm"
              value="EDIT"
              className="bg-teal-500 hover:bg-teal-600 w-52 h-14 mt-10 lg:mt-0
              text-white tracking-wide font-semibold text-sm cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div
        className="w-full flex lg:mt-14 md:mt-12 sm:mt-10 mt-6 text-gray-400
  h-14 tracking-widest text-sm sm:text-base"
      >
        <div className="sampleListBorder flex-1"></div>
        <div id="button4" className="sampleListItem px-1 w-24 sm:w-72 active">
          TRC-20
        </div>
        <div id="button5" className="sampleListItem px-1 w-24 sm:w-72">
          ERC-20
        </div>
        <div className="sampleListBorder flex-1"></div>
      </div>

      <div id="trc20">
        <div className="flex flex-col items-center">
          <div className="flex text-2xl mt-7 flex-col md:flex-row items-center gap-1.5">
            <span className="">
              Pay <span className="font-medium">Tether | USDT</span> over
            </span>
            <span className="text-center">
              the <span className="font-medium">TRC-20</span> (Tron) network
            </span>
          </div>
          <span className="text-neutral-700 font-medium block mt-2">
            to the following address
          </span>
        </div>

        <div className="flex justify-center mt-5">
          <div className="flex justify-center items-center sm:items-stretch flex-col sm:flex-row gap-6 text-lg font-medium">
            <img src="/t100.png" className="w-44" alt="" />
            <div className="flex flex-col justify-center">
              <span className="block text-sm text-neutral-400 font-bold">
                address
              </span>
              <div className="block mt-2 w-[190px] md:w-auto break-words relative">
                <span className="cursor-pointer select-all" id="trc20add">
                  TF5m8Cjb4ouVywDpZ98Zyv2EWa8o3VNhZ9
                </span>
                <div
                  className="absolute right-0 -top-8 text-xs text-neutral-700 font-bold
                      rounded-full border border-neutral-400 bg-white px-2 py-1 select-none hidden"
                  id="copied1"
                >
                  copied!
                </div>
              </div>
              <span className="block text-sm text-neutral-400 font-bold mt-4">
                amount
              </span>
              <span className="block mt-2">150.50 USDT</span>
            </div>
          </div>
        </div>
      </div>

      <div id="erc20" className="hidden">
        <div className="flex flex-col items-center">
          <div className="flex text-2xl mt-7 flex-col md:flex-row items-center gap-1.5">
            <span className="">
              Pay <span className="font-medium">Tether | USDT</span> over
            </span>
            <span className="text-center">
              the <span className="font-medium">ERC-20</span> (Ethereum) network
            </span>
          </div>
          <span className="text-neutral-700 font-medium block mt-2">
            to the following address
          </span>
        </div>

        <div className="flex justify-center mt-5">
          <div className="flex justify-center items-center sm:items-stretch flex-col sm:flex-row gap-6 text-lg font-medium">
            <img src="/e100.png" className="w-44" alt="" />
            <div className="flex flex-col justify-center">
              <span className="block text-sm text-neutral-400 font-bold">
                address
              </span>
              <div className="block mt-2 w-[220px] md:w-auto break-words relative">
                <span className="cursor-pointer select-all" id="erc20add">
                  0xdAC17F958D2ee523a2206206994597C13D831ec7
                </span>
                <div
                  className="absolute right-0 -top-8 text-xs text-neutral-700 font-bold
                      rounded-full border border-neutral-400 bg-white px-2 py-1 select-none hidden"
                  id="copied2"
                >
                  copied!
                </div>
              </div>
              <span className="block text-sm text-neutral-400 font-bold mt-4">
                amount
              </span>
              <span className="block mt-2">150.50 USDT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:mt-12 md:mt-10 mt-8 mb-10">
        <div className="flex flex-col lg:flex-row items-center rounded-3xl shadow-2xl overflow-hidden bg-teal-500 text-white">
          <img src="/coffee-sq.jpg" className="h-80 hidden lg:block" />
          <img src="/coffee-wide.jpg" className="w-[750px] lg:hidden" />
          <div className="w-[650px] flex items-center justify-center py-10 lg:py-0">
            <div className="flex flex-col items-center sm:block">
              <span className="block text-3xl">made the transaction?</span>
              <span className="block tracking-wider sm:text-3xl font-semibold mt-3">
                enter the TxID to complete the order
              </span>
              <div className="flex mt-7 gap-3">
                <input
                  type="text"
                  name="txid"
                  id="txid"
                  spellCheck="false"
                  maxLength="100"
                  form="paymentForm"
                  className="py-1.5 px-2.5 border border-teal-800 rounded-md text-teal-700 text-lg font-medium
                        w-44 sm:w-[440px]"
                />

                <button
                  className="bg-teal-600 hover:bg-teal-700 w-20 h-[42px]
                        text-white tracking-wide font-semibold text-sm cursor-pointer"
                >
                  CHECK
                </button>
              </div>
              <span className="block h-4 mt-0.5 text-sm" id="messageRelay">
                {" "}
              </span>
              <input
                type="submit"
                form="paymentForm"
                value="FINISH"
                disabled
                id="finishButton"
                className="bg-teal-600 hover:bg-teal-700 w-60 h-14 disabled:bg-neutral-400 disabled:hover:bg-neutral-500
                    text-white tracking-wide font-semibold text-sm cursor-pointer mt-7"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
