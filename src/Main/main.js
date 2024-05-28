import React from 'react'
import './main.css'

const Main = () => {
 
  const data = [
    { rank: 1, name: "Selling with re entr", calmar: 3.96, overall_profit: 381845, avg_daily_profit: 319.54, win: 0.65, price: "-", action: "View" },
    { rank: 2, name: "strategy_name", calmar: 3.62, overall_profit: 268872.5, avg_daily_profit: 216.31, win: 0.64, price: "500", action: "Buy" },
    { rank: 3, name: "Based on premium and", calmar: 3.42, overall_profit: 255425, avg_daily_profit: 208.51, win: 0.64, price: "-", action: "View" },
    { rank: 4, name: "strategy_name", calmar: 3.22, overall_profit: 370845, avg_daily_profit: 303.47, win: 0.65, price: "-", action: "View" },
    { rank: 5, name: "strategy_name", calmar: 3.22, overall_profit: 370845, avg_daily_profit: 	303.47, win: 0.65, price: "-", action: "View" },
    { rank: 6, name: "Based on premium wit", calmar: 3.01, overall_profit: 135980, avg_daily_profit: 185.77, win: 0.49, price: "-", action: "View" },
    { rank: 7, name: "strategy_name", calmar: 2.76, overall_profit: 267867.5, avg_daily_profit: 218.49, win: 0.6, price: "-", action: "View" },
    { rank: 8, name: "Wait and trade_Save", calmar: 2.62, overall_profit: 178252.5, avg_daily_profit: 161.9, win: 0.63, price: "-",action: "View" },
    { rank: 9, name: "iron condor", calmar: 2.44, overall_profit: 176420, avg_daily_profit: 137.51, win: 0.65, price: "-", action: "View" },
    { rank: 10, name: "strategy_name", calmar: 2.04, overall_profit: 244555, avg_daily_profit: 198.66, win: 0.62, price: "-", action: "View" },
]
 
  
  return (
    <div className='main'>
     <div className='upper'>
        <h3>LeaderBoards</h3>
     </div>
     <div className='mainbox'>
      <div className='box'>
        <div className='write'>
        <div className='left'>
          <h5>Basic Backtest</h5>
        </div>
         <div className='right'>
           <button>Slippage</button>
           <select name="slippage" id="slippage">
             <option value="0%">0%</option>
             <option value="0.5%">0.5%</option>
             <option value="1%">1%</option>
           </select>           
         </div>
         </div>
         <div className='tabl'>
         <table>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Calmar Ratio</th>
                    <th>Overall Profit</th>
                    <th>Avg. Daily Profit</th>
                    <th>Win %(Day)</th>
                    <th>Price (Rs)</th>
                    <th>Action</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.rank}</td>
                            <td>{val.name}</td>
                            <td>{val.calmar}</td>
                            <td>{val.overall_profit}</td>
                            <td>{val.avg_daily_profit}</td>
                            <td>{val.win}</td>
                            <td>{val.price}</td>
                            <td className='action'>{val.action}</td>
                        </tr>
                    )
                })}
            </table>
         </div>
         </div>
        
      </div>
    </div>
  )
}

export default Main

