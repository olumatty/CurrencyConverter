"use client";
import React, { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";

const Currency = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("NGN");
  const [toCurrency, setToCurrency] = useState("GBP");
  const [results, setResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  var myHeaders = new Headers();
  myHeaders.append("apikey", "Tn0TYjIRfsPJVj6j98QvwWM5ZlsBQqVs");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const url = `https://api.apilayer.com/fixer/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`;

  const getExchangeRate = async () => {
      if(!amount){
        setResults("");
        return;
      }
   
      setIsLoading(true);
    
    try {
      const response = await fetch(url,requestOptions);
      if(!response.ok) throw Error("Something went wrong")

      const data = await response.json();
      console.log("Response Data:", data);
      const rate = (data.result).toFixed(2);
      setResults(`${amount} ${fromCurrency} => ${rate} ${toCurrency}`) 
    } catch (error) {
      setResults("Something went wrong")
    } finally{
      setIsLoading(false)
    }
  };

  const handleReverse = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const handleFormSubmit =(e) => {
    e.preventDefault();
    getExchangeRate();
  }

  useEffect(()=> {
    getExchangeRate()
  },[])

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-20 lg:px-60 py-6 md:py-12">
      <div className="border border-[#003566]  p-4 w-full md:w-[560px]">
        <h1 className="font-bold text-[#003566] text-2xl md:text-3xl mb-3 text-center">
          Currency converter
        </h1>

        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div className="space-y-2">
            <label className="text-lg  font-semibold">Enter Amount</label>{" "}
            <br />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="h-12 w-full md:w-[530px] px-4 outline-none rounded-lg border-2 "
            />
          </div>

          <div className="flex items-center justify-between gap-4 md:gap-8">
            <div className="flex flex-col w-full">
              <label className="text-lg font-semibold">From</label>
              <CurrencySelect
                handleCurrency={(e) => setFromCurrency(e.target.value)}
                selectedCurrency={fromCurrency}
              />
            </div>

            <div className="flex items-center mt-6 h-10 w-40 border-[#003566] rounded-full border justify-center">
              <svg
                onClick={handleReverse}
                className="w-8 h-8 cursor-pointer transform rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path>
              </svg>
            </div>

            <div className="flex flex-col w-full">
              <label className="text-lg font-semibold">To</label>
              <CurrencySelect
                handleCurrency={(e) => setToCurrency(e.target.value)}
                selectedCurrency={toCurrency}
              />
            </div>
          </div>

          <button
          type="submit"
          className="w-full h-[40px] md:w-[530px] transition duration-[0.3s] rounded mt-8 ease-in
         outline-none items-center font-medium text-white bg-[#003566] "
        >
          {isLoading ? "Loading>>>" : "Get Exchange Rate"}
        </button>
        </form>


        <div className="border w-full mt-8 h-[40px] items-center rounded flex justify-center">
          <p>{isLoading ? "Getting exchange rate...." : results} </p>
        </div>
      </div>
    </div>
  );
};

export default Currency;
