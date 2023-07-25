import { useState } from "react";
const Expense = ({ addTransaction}) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      addTransaction({name, amount: -amount});
      setName('');
      setAmount('');
    }
    return (
        
        <>
            <div className="items-center text-center w-full md:w-2/4 md:mx-auto mt-5 ov">
        <div className=" bg-slate-200">
          <h1 className="text-2xl">Expense Tracker</h1>
          <p>Total Expense : 0 Taka </p>
          <div className="py-4">
          <input type="text" required placeholder="Text" className="input input-bordered input-warning w-full max-w-xs" value={name}  onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="py-4">
          <input type="number" required placeholder="Amount" className="input input-bordered input-warning w-full max-w-xs" value={amount}  onChange={(e)=>setAmount(e.target.value)}/>
          </div>
          <div className="py-4">
          <button className="btn btn-warning" onClick={handleSubmit}>Add Expense</button>
          </div>
          </div>
          </div>
        </>
    );
};

export default Expense;