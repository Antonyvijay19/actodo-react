import { MdWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
function Signup(props){

    const navigate = useNavigate()
    const[euser,seteuser] =useState()
    const[epwd,setepwd] =useState()
    const [confirmPwd, setConfirmPwd] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);


      const ruser =props.ruser
      const setruser=props.setruser

      function handleeuser(event){
        seteuser(event.target.value)
    }

    function handleepwd(event){
        setepwd(event.target.value)
    }

    function handleCheckboxChange() {
        setShowPassword(!showPassword);
    }


    function handleConfirmPwd(event) {
        setConfirmPwd(event.target.value);
    }

    function handleadd(){
        
        if (epwd !== confirmPwd) {
            setError("Passwords do not match");
            return;
        }


        setruser([...ruser,{user:euser,pwd:epwd}])
        navigate("/")
    }

    return(
        <>
        <div className="bg-black p-10 ">
            <div className="bg-white p-10 border rounded-md">
               <div className="flex items-center gap-5">
               <h1 className="text-3xl font-medium">Hey Hi </h1>
               <i className="text-3xl text-yellow-500"><MdWavingHand /></i>
               </div>
               <p className="text-xl">You can Signup Here :)</p>

              
            <div className="flex flex-col gap-3 my-3">
                <input type="text"  onChange={handleeuser} className="w-52 border rounded-md bg-transparent  p-2" placeholder="username"/>
                <input type={showPassword ? "text" : "password"}  onChange={handleepwd}  className="w-52 border rounded-md bg-transparent  p-2" placeholder="password"/>
                <input type="password" onChange={handleConfirmPwd} className="w-52 border rounded-md bg-transparent p-2" placeholder="confirm password"/>
              
                <div>
                    <input type="checkbox" onChange={handleCheckboxChange} />
                    <label> Show Password</label>
                 </div> 

                {error && <p className="text-red-500">{error}</p>}
               
                <button onClick={handleadd} className="bg-[#695AAF] p-2 w-24 rounded-md">
                    Signup
                </button>
            </div>
            <p>Already have an account? <Link to={"/"} className="underline">login</Link></p>

            </div>

            
        </div>
        
</>
    )
}

export default Signup