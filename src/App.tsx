import { ChildrenNode } from "./Components/ChildrenNode";
import { Greet } from "./Components/Greet";
import { Reducer } from "./Components/Hooks/Reducer";
import { Ref } from "./Components/Hooks/Ref";
import { Userfuture } from "./Components/Hooks/Userfuture";
import { Usestatedemo } from "./Components/Hooks/Usestatedemo";
import { ParentNode } from "./Components/ParentNode";
import { Person } from "./Components/Person";
import { PersonList } from "./Components/PersonList";

function App() {
  const person={
    firstname:'Naren',
    lastname:'Vasu'
  }
  const persons=[
    {
      firstname:'Naren',
      lastname:'Vasu'
    },
    {
      firstname:'Chandiran',
      lastname:'Vasu'
    }
  ]
  return(
    /*<div>
      <Greet name={'Naren'}/>
      <Person names={person}/>
      <PersonList names={persons}/>
      <ParentNode>
        <ChildrenNode/>
      </ParentNode>
      <Usestatedemo />
      <Userfuture/>
         <Reducer/>
    </div>*/
    <Ref/>
 
    
  );
}
export default App;