
function Cards ({Details}){
    return(
        <>

        {
           Details.map(function(item,index){

            return(
                <div key={index} style={{backgroundColor:item.bgcolor}} className="px-10 py-7 text-black flex-grow rounded-md text-center">
                <h1 className="text-2xl font-medium">{item.title}</h1>
                <p>{item.subtitle}</p>
               </div>
            )
           })
        }
           
        </>
    )
}


export default Cards