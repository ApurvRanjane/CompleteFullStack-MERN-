import Lottery from './lottery'
import './App.css'
import { sum } from './helper'

function App() {
  let winCondition=(ticket)=>{
    return ticket[0]==0;
  }

  return (
    <>
      <Lottery n={2}  winCondition={winCondition}/>
    </>
  );
}

export default App
