import {useState} from "react"
import Todolistadd from "./Todolistadd"
import Todolist from "./todolist"
function Todolistcontainer(){
   
    const[activityArr, setactivityArr] =useState([
    
        {
            id :"1",
            activity:"Wake up at 6.00am"
        },
    
        {
            id :"2",
            activity:"go for excercise at 6.30am"
        },
    
       {
            id :"3",
            activity:"bath at 8.00am"
       }
    ])

    return(
        <>
           <div className="flex gap-5 flex-wrap">
               <Todolistadd activityArr={activityArr} setactivityArr={setactivityArr} />
               <Todolist activityArr={activityArr} setactivityArr={setactivityArr} />
               
            </div>
        
        </>
    )
}

export default Todolistcontainer