const url="https://jsonplaceholder.typicode.com/posts";
export const sampleData=async()=>{
     const response=await fetch(url);
     return response.json();
}

const page = async() => {
    const data=await sampleData(); 
    console.log("checking for sample",data)
  return (
    <div>{
        data.map((item,index)=>(
            <div key={item.id}>
                <div >{`${index}-${item.title}`}</div>
                <hr/>
            </div>
            
        ))
    }</div>
  )
}

export default page