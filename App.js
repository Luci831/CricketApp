import { ListOfPlayers } from './Components/ListOfPlayers';
import { LPlayers } from './Components/ListOfPlayers';
import { IndianPlayers }  from './Components/IndianPlayers';
import { OddPlayers } from './Components/IndianPlayers';
import { EvenPlayers } from './Components/IndianPlayers';
import { ListOfIndianPlayers } from './Components/IndianPlayers';



function App() {
    var flag = true;
    if (flag === true)
    {
        return (
            <div className="App">
                <h1>List Of Players</h1>
                <ListOfPlayers />
                <h1>List of Players having Scores Less than 70</h1>
                <LPlayers />
            </div>)
      }
    else {
       
        return (
            <div>
                <div>
                   
                    <h1>Odd Players</h1>
                    {OddPlayers(IndianPlayers)}
                    <hr/>
                <h1>Even Players</h1>
                {EvenPlayers(IndianPlayers)}
                 </div>
           <hr/>
               <div>
                    <h1>List of Indian Players Merged:</h1>
                    <ListOfIndianPlayers/>
               </div>
               </div>      
                   )
    }
  
}

export default App;
