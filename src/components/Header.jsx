import { MdWavingHand } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Header(props){
    const navigate = useNavigate()
  
  
    function handlelogout (){
      navigate("/")
   }

    return(
        
        <div className="flex justify-between items-center">
        <div>
            <div className="flex items-center gap-3">
            <h1 className="text-3xl">Hello {props.name}</h1>
            <i className="text-3xl text-yellow-600"><MdWavingHand /></i>
            </div>
            <p>I help you manage your activties:)</p>
        </div>
        <div>
            <button onClick={handlelogout} className="bg-black text-white p-2 w-24 rounded-md" type="submit">Logout</button>
        </div>

        </div>
        

    )
}

export default Header