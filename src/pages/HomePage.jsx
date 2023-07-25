import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import IncomePage from "./IncomePage";
import { Link, Routes ,Route} from "react-router-dom";
import Expense from "./Expense";

const HomePage = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const totalBalance = totalIncome+totalExpense;
  const addTransaction = (newTransaction)=>{
    setTransactions([...transactions , newTransaction]);
    if (newTransaction.amount > 0 ){
      setTotalIncome(totalIncome + newTransaction.amount)
    }
    else
  {
    setTotalExpense(totalExpense + newTransaction.amount)
  }
  }
  return (
    <>
      <Header />
      <div className="items-center text-center w-full md:w-2/4 md:mx-auto mt-5 ov">
        <div className=" bg-slate-200">
          <h1 className="text-2xl">Simple Expence Tracker</h1>
          <div>
            <h5>Your Balance</h5>
            <p>{totalBalance} Taka</p>
          </div>

          <div className="flex w-full px-2 py-4">
            <div className="grid h-20 flex-grow card bg-slate-100 rounded-box place-items-center">
              <h4>Income</h4>
              <div>{totalIncome} Taka</div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="grid h-20 flex-grow card bg-slate-100 rounded-box place-items-center">
              <h4>Expense</h4>
              <div>{totalExpense} Taka</div>
            </div>
          </div>
          <IncomePage  addTransaction={addTransaction}/> 
         <Expense  addTransaction={addTransaction}/> 
        </div>



        

        <div className="mt-4 py-4">
          <h3 className="py-2 text-2xl">History</h3>
          <div className="overflow-x-auto">
            <table className="table mb-6">
              {/* head */}
              
              <tbody>
                {
                  transactions.map((item,i)=>(
                    <tr  key={i}>
                    <td>{i+1}</td>
                    <td>{item.name}</td>
                    <td>{item.amount}</td>
                  </tr>
                  ))
                }
               
               
              
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
