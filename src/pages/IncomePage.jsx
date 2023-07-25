import { useState } from "react";
const IncomePage = ({ addTransaction}) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction({name, amount: +amount});
        setName('');
        setAmount('');
      }
      console.log(addTransaction)
    return (
        <>
            <div className="items-center text-center w-full md:w-2/4 md:mx-auto mt-5 ov">
        <div className=" bg-slate-200">
          <h1 className="text-2xl">Income Tracker</h1>
          <p>Total Income : 0 Taka </p>
          <div className="py-4">
          <input type="text" placeholder="Text" required className="input input-bordered input-warning w-full max-w-xs" value={name}  onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="py-4">
          <input type="number" required placeholder="Amount" className="input input-bordered input-warning w-full max-w-xs" value={amount}  onChange={(e)=>setAmount(e.target.value)}/>
          </div>
          <div className="py-4">
          <button className="btn btn-warning" onClick={handleSubmit}>Add Income</button>
          </div>
          </div>
          </div>
        </>
    );
};

export default IncomePage;