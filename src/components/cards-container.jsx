import Cards from "./cards"

function Cardcontainer(){


    var details=[
        {bgcolor:"#695AAF",title:"23",subtitle:"Chennai"},
        {bgcolor:"#CA524F",title:"20 December",subtitle:"14:02:34"},
        {bgcolor:"#CA8202",title:"Built using",subtitle:"react"}

]

   return(
    <div className="flex justify-between gap-7 my-5 flex-wrap">
        <Cards Details ={details}/>
    </div>
   )

   
}

export default Cardcontainer