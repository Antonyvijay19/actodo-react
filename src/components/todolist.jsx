
import Todolistitem from "./Todolistitem"

function Todolist(props) {
   
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr




    return (
        <div className="bg-[#9990BD] flex-grow border rounded-md p-2">
                <h1 className="text-2xl text-medium ">Today's Activity</h1>

              
            {
                activityArr.length===0?<p>You have not added anything yet</p>:""
            }

                {
                    activityArr.map(function(item,index)
                    {
                        return (
                            <Todolistitem key={index} id={item.id} activity={item.activity} activityArr={activityArr} setactivityArr={setactivityArr} />
                        )
                    })
                }
            </div>
    )
}


export default Todolist