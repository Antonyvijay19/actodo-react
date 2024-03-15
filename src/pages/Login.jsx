import { MdWavingHand } from "react-icons/md";
import { Link } from "react-router-dom";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
function Login(props){
    
    const navigate =useNavigate()
    const[euser,seteuser] =useState()
    const[epwd,setepwd] =useState()
    const [check,setcheck]=useState(true)
    const [showPassword, setShowPassword] = useState(false);


    const ruser =props.ruser

    
    function handleeuser(event){
        seteuser(event.target.value)
    }

    function handleepwd(event){
        setepwd(event.target.value)
    }

    function handleCheckboxChange() {
        setShowPassword(!showPassword);
    }


   
    function handleregister(){
        console.log(ruser)

        var checkUser =false
        ruser.forEach(function (item) {
            if (euser === item.user && epwd === item.pwd) {
                checkUser = true;
                console.log("login successful");
                navigate("./Landingpage", { state: { user: euser } });
            }

        })

        if(checkUser===false){
            console.log("login failed")
            setcheck(false)
        }
        
             
        
    }

    return(
        <>
         <div className="bg-black p-10 ">
            <div className="bg-white p-10 border rounded-md">
               <div className="flex items-center gap-5">
               <h1 className="text-3xl font-medium">Hey Hi </h1>
               <i className="text-3xl text-yellow-500"><MdWavingHand /></i>
               </div>

               {
                check?<p className="text-xl">I help you manage your activities after login :)</p>:<p className="text-red-600">Please signup before login</p>
               }
               

              
            <div className="flex flex-col gap-3 my-3">
                <input type="text"  onChange={handleeuser} className="w-52 border rounded-md bg-transparent  p-2" placeholder="username"/>
                <input type={showPassword ? "text" : "password"} onChange={handleepwd} className="w-52 border rounded-md bg-transparent  p-2" placeholder="password"/>
                
                       <div>
                            <input type="checkbox" onChange={handleCheckboxChange} />
                            <label> Show Password</label>
                        </div>


                <button  onClick={handleregister} className="bg-[#695AAF] p-2 w-24 rounded-md">
                    Login
                </button>
            </div>
            <p>Don't have an account? <Link to={"/Signup"} className="underline">Signup</Link></p>

            </div>

            
        </div>
        </>
    )
}

export default Login