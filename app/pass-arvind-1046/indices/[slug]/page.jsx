async function getIndices(id) {
  const res = await fetch(
    `https://jaypal001046.pythonanywhere.com/getIndices/${id}`,
    {
      next: {
        revalidate: 30, //use 30 to opt  out of using catch
      },
    }
  );
  return res.json();
}

async function getOption(id) {
  const res = await fetch(
    `https://www.nseindia.com/api/option-chain-indices?symbol=${id}`,
    {
      next: {
        revalidate: 30, //use 30 to opt  out of using catch
      },
    }
  );
  return res.json();
}
// export function formatNumber(num) {
//   if (num >= 10000000) {
//     return `${(num / 10000000).toFixed(1)}` + ' Cr';
//   } else if (num >= 100000) {
//     return `${(num / 100000).toFixed(1)}` + ' Lakh';
//   } else if (num >= 10000) {
//     return `${(num / 1000).toFixed(1)}` + ' K';
//   } else {
//     return num.toString();
//   }
// }
//skdjfhkdsf


export default async function Indices({params }) {
  const indices = await getIndices(params.slug=="BANKNIFTY"?"NIFTY_BANK":params.slug=="FINNIFTY"?"NIFTY_FIN_SERVICE":"NIFTY_50");
  const options = await getOption(params.slug);
  return (
    <dic>
      <div className="flex">
        <div className="bg-white rounded-lg mx-4 p-4">
          Current Price:{" "}
          {
            indices["data"]
              .split('<div class="YMlKec fxKbKc">\n')[1]
              .split("\n")[0]
              
          }{" "}
          {}
        </div>
        <div className="bg-white rounded-lg mx-4 p-4">
          PREVIOUS CLOSE:{" "}
          {indices["data"].split('<div class="P6K39c">\n')[1].split("\n")[0]}
        </div>
        <div className="bg-white rounded-lg mx-4 p-4">
          DAY RANGE:{" "}
          {indices["data"].split('<div class="P6K39c">\n')[2].split("\n")[0]}
        </div>
        <div className="bg-white rounded-lg mx-4 p-4">
          YEAR RANGE:{" "}
          {indices["data"].split('<div class="P6K39c">\n')[3].split("\n")[0]}
        </div>
      </div>
      <div>
        <table class=" border-collapse border border-slate-400 start-5">
          <thead>
            <tr className="border-collapse border border-slate-400">
              <th> </th>
              <th> </th> <th> </th> <th> </th> <th> </th> <th> </th> <th> </th>
              <th >
                CALLS{" "}
              </th>
              <th> </th>
              <th> </th>
               <th className="border-collapse border border-slate-400" > </th>
                <th> </th>
                 <th> </th>
              <th> </th>
              <th >PUTS</th>
              <th> </th>
              <th> </th> <th> </th> <th> </th> <th> </th> <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
            </tr>
          </thead>
          <thead>
            <tr className="border-collapse border border-slate-400 text-xs">
              <th className="border-collapse border border-slate-400 text-xs">OI</th>
              <th className="border-collapse border border-slate-400 text-xs">CHNG IN OI </th>
              <th className="border-collapse border border-slate-400 text-xs">VOLUME</th>
              <th className="border-collapse border border-slate-400 text-xs">IV</th>
              <th className="border-collapse border border-slate-400 text-xs">LTP</th>
              <th className="border-collapse border border-slate-400 text-xs">CHNG</th>
              <th className="border-collapse border border-slate-400 text-xs">BID QTY</th>
              <th className="border-collapse border border-slate-400 text-xs">BID</th>
              <th className="border-collapse border border-slate-400 text-xs">ASK</th>
              <th className="border-collapse border border-slate-400 text-xs">ASK QTY</th>
              <th className="border-collapse border border-slate-400 text-xs">
                STRIKE
              </th>
              <th className="border-collapse border border-slate-400 text-xs">BID QTY</th>
              <th className="border-collapse border border-slate-400 text-xs">BID</th>
              <th className="border-collapse border border-slate-400 text-xs">ASK</th>
              <th className="border-collapse border border-slate-400 text-xs">ASK QTY</th>
              <th className="border-collapse border border-slate-400 text-xs">CHNG</th>
              <th className="border-collapse border border-slate-400 text-xs">LTP</th>
              <th className="border-collapse border border-slate-400 text-xs">IV</th>
              <th className="border-collapse border border-slate-400 text-xs">VOLUME</th>
              <th className="border-collapse border border-slate-400 text-xs">CHNG IN OI</th>
              <th className="border-collapse border border-slate-400 text-xs">OI</th>

              <th className="border-collapse border border-slate-400 text-xs">PCR OI</th>
              <th className="border-collapse border border-slate-400 text-xs">PCR CHNG IN OI</th>
              <th className="border-collapse border border-slate-400 text-xs">PCR VOLUME</th>
            </tr>
          </thead>
          <tbody>
            {options["records"]["data"].map((option)=>{
              if(option.CE=== undefined||option.PE===undefined){
                    return (<>
                  
                    </>);
              }else{
                if(options["records"]["expiryDates"][0]==option.expiryDate&& !(option.strikePrice+500<=option.CE.underlyingValue||option.strikePrice-500>=option.CE.underlyingValue)){
                  return (

                    <tr key={`key-${option.strikePrice}`}>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice<=option.CE.underlyingValue||option.strikePrice<option.CE.underlyingValue+50?"bg-white":"bg-[#c7d2fe]"}`}>{`${option.CE.openInterest}`}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice<=option.CE.underlyingValue||option.strikePrice<option.CE.underlyingValue+50?"bg-white":"bg-[#c7d2fe]"}`}>{`${option.CE.changeinOpenInterest}`}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice<=option.CE.underlyingValue||option.strikePrice<option.CE.underlyingValue+50?"bg-white":"bg-[#c7d2fe]"}`}>{ `${option.CE.totalTradedVolume}`}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice<=option.CE.underlyingValue||option.strikePrice<option.CE.underlyingValue+50?"bg-white":"bg-[#c7d2fe]"}`}>{option.CE.impliedVolatility}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice<=option.CE.underlyingValue||option.strikePrice<option.CE.underlyingValue+50?"bg-white":"bg-[#c7d2fe]"}`}>{option.CE.lastPrice}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice<=option.CE.underlyingValue||option.strikePrice<option.CE.underlyingValue+50?"bg-white":"bg-[#c7d2fe]"}`}>{option.CE.change.toFixed(2)}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice<=option.CE.underlyingValue||option.strikePrice<option.CE.underlyingValue+50?"bg-white":"bg-[#c7d2fe]"}`}>{option.CE.bidQty}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice<=option.CE.underlyingValue||option.strikePrice<option.CE.underlyingValue+50?"bg-white":"bg-[#c7d2fe]"}`}>{option.CE.bidprice}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice<=option.CE.underlyingValue||option.strikePrice<option.CE.underlyingValue+50?"bg-white":"bg-[#c7d2fe]"}`}>{option.CE.askQty}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice<=option.CE.underlyingValue||option.strikePrice<option.CE.underlyingValue+50?"bg-white":"bg-[#c7d2fe]"}`}>{option.CE.askPrice}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-3 text-center text-black font-bold`}>{option.strikePrice}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice-50>option.CE.underlyingValue||option.strikePrice-50>option.CE.underlyingValue?"bg-white":"bg-[#c7d2fe]"}`}>{option.PE.bidQty}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice-50>option.CE.underlyingValue||option.strikePrice-50>option.CE.underlyingValue?"bg-white":"bg-[#c7d2fe]"}`}>{option.PE.bidprice}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center  text-black ${option.strikePrice-50>option.CE.underlyingValue||option.strikePrice-50>option.CE.underlyingValue?"bg-white":"bg-[#c7d2fe]"}`}>{option.PE.askQty}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice-50>option.CE.underlyingValue||option.strikePrice-50>option.CE.underlyingValue?"bg-white":"bg-[#c7d2fe]"}`}>{option.PE.askPrice}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice-50>option.CE.underlyingValue||option.strikePrice-50>option.CE.underlyingValue?"bg-white":"bg-[#c7d2fe]"}`}>{option.PE.change.toFixed(2)}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice-50>option.CE.underlyingValue||option.strikePrice-50>option.CE.underlyingValue?"bg-white":"bg-[#c7d2fe]"}`}>{option.PE.lastPrice}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice-50>option.CE.underlyingValue||option.strikePrice-50>option.CE.underlyingValue?"bg-white":"bg-[#c7d2fe]"}`}>{ option.PE.impliedVolatility}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice-50>option.CE.underlyingValue||option.strikePrice-50>option.CE.underlyingValue?"bg-white":"bg-[#c7d2fe]"}`}>{`${option.PE.totalTradedVolume}` }</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center text-black ${option.strikePrice-50>option.CE.underlyingValue||option.strikePrice-50>option.CE.underlyingValue?"bg-white":"bg-[#c7d2fe]"}`}>{`${option.PE.changeinOpenInterest}`}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center  text-black ${option.strikePrice-50>option.CE.underlyingValue||option.strikePrice-50>option.CE.underlyingValue?"bg-white":"bg-[#c7d2fe]"}`}>{`${option.PE.openInterest}`}</td>

                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center  bg-[#22c55e] text-white`}>{(option.PE.openInterest/option.CE.openInterest).toFixed(2)}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center  bg-[#22c55e] text-white`}>{(option.PE.changeinOpenInterest/option.CE.changeinOpenInterest).toFixed(2)}</td>
                    <td className={`border-collapse border border-slate-400 text-xs p-1 text-center  bg-[#22c55e] text-white`}>{(option.PE.totalTradedVolume/option.CE.totalTradedVolume).toFixed(2)}</td>

                    </tr>
                                )
                }
               
              }
            }
            )

            }
          </tbody>
        </table>
      </div>
    </dic>
  );
}


{/* <td className="border-collapse border border-slate-400">{option.CE.openInterest}</td>
<td className="border-collapse border border-slate-400">{option.CE.changeinOpenInterest}</td>
<td className="border-collapse border border-slate-400">{option.CE.totalTradedVolume}</td>
<td className="border-collapse border border-slate-400">{option.CE.impliedVolatility}</td>
<td className="border-collapse border border-slate-400">{option.CE.lastPrice}</td>
<td className="border-collapse border border-slate-400">{option.CE.change}</td>
<td className="border-collapse border border-slate-400">{option.CE.bidQty}</td>
<td className="border-collapse border border-slate-400">{option.CE.bidprice}</td>
<td className="border-collapse border border-slate-400">{option.CE.askQty}</td>
<td className="border-collapse border border-slate-400">{option.CE.askPrice}</td>
<td className="border-collapse border border-slate-400">{option.strikePrice}</td>
<td className="border-collapse border border-slate-400">{option.PE.bidQty}</td>
<td className="border-collapse border border-slate-400">{option.PE.bidprice}</td>
<td className="border-collapse border border-slate-400">{option.PE.askQty}</td>
<td className="border-collapse border border-slate-400">{option.PE.askPrice}</td>
<td className="border-collapse border border-slate-400">{option.PE.change}</td>
<td className="border-collapse border border-slate-400">{option.PE.lastPrice}</td>
<td className="border-collapse border border-slate-400">{option.PE.impliedVolatility}</td>
<td className="border-collapse border border-slate-400">{option.PE.totalTradedVolume}</td>
<td className="border-collapse border border-slate-400">{option.PE.changeinOpenInterest}</td>
<td className="border-collapse border border-slate-400">{option.PE.openInterest}</td> */}
