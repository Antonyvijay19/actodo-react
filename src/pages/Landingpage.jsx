import Header from "../components/Header";
import Cardcontainer from "../components/cards-container";
import Todolistcontainer from "../components/Todolistcontainer";
import { useLocation } from "react-router-dom"



function Landingpage(){
    const location =useLocation()
    return(
        <div className="bg-black p-16">
     <div className="bg-white p-10 rounded">
         <Header name={location.state.user}/>
         <Cardcontainer/>
         <Todolistcontainer/>
      </div>
  
</div>
    )
}


export default Landingpage