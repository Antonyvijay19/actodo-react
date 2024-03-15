
import { MdDeleteForever } from "react-icons/md";




function Todolistitem(props){

    const activityArr =props.activityArr
    const setactivityArr =props.setactivityArr


   function handledelete(deleteid){

           var tempArr = activityArr.filter(function(item){
                 if(deleteid === item.id){
                    return false
                 }
                 else{
                    return true
                 }
           })
           setactivityArr(tempArr)
   }

    return(
        
        <div className="flex justify-between">

             <p>{props.id}. {props.activity}</p>
             <button className="text-red-500" onClick={()=>{handledelete(props.id)}}><MdDeleteForever/></button>
        </div>
    )
}


export default Todolistitem