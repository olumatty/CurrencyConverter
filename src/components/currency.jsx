"use client";
import React, { useState } from "react";

const Currency = () => {
  const [amount, setAmount] = useState("");
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-20 lg:px-60 py-6 md:py-12">
      <div className="border p-4 w-full">
        <h1 className="font-bold text-2xl md:text-3xl mb-3 text-center">
          Currency converter
        </h1>

        <form>
          <div>
            <label>Enter Amount</label>
            <br />
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="h-10 w-[320px] mt-3 pl-2 outline-none rounded border"
            />
          </div>

          <div>
            <div>
              <label>From</label>
              <br />
              <select className="w-1/3 h-10 pl-2">
                <option value="En">En</option>
                <option value="En">En</option>
              </select>
            </div>

            <div>
              <svg
                className="w-8 h-8 md:w-[20px] md:h-[20px] md:ml-4 leading-10 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
              </svg>

              <div>
              <label>To</label>
              <br />
              <select>
                <option value="En">En</option>
                <option value="En">En</option>
              </select>
            </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Currency;
