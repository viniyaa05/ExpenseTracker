import {useState} from "react"
function App(){
  const[expense,setexpense]=useState("");
  const[amount,setamount]=useState(0);

  return(
    <div>
      <h1>Expense Tracker</h1>
      <input placeholder= "Enter amount" value={expense} onChange={((e)=>setexpense(e.target.value))} required/>
      <input placeholder ="Enter amount" value={amount} onChange={((e)=>setamount(e.target.value))} required/>
     <button> ADD </button>
    </div>
  );
}
export default App;