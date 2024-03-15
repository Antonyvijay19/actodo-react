import {useState} from "react"
function Todolistadd (props){
  
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [add ,setadd] =useState("")
    
    function handlechange(e){
     
        setadd(e.target.value)
        console.log(e.target.value)
    } 
 
    function handleadd(){
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:add}])
        setadd("")
    }
     

    return(
        <div className="flex flex-col gap-5">
                <h1 className="text-2xl text-medium ">Manage Activities</h1>
                <div>
                <input value={add} onChange={handlechange} className="border border-black p-1" type='text' placeholder='Next Activity?' />
                <button className="bg-black text-white p-1 border border-black" onClick={handleadd}>Add</button>
                </div>
            </div>
    )
}

export default Todolistadd