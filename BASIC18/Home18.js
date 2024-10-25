import React from 'react'
import { increment,dicrement } from './Createslice18'
import { useSelector,useDispatch } from 'react-redux'
import { setcolor } from './CreateSecoundSlice'
function Home18() {
    let dispatch=useDispatch()
    let count=useSelector((state)=>state.counter.count)
    let color=useSelector((state)=>state.colorChanger.color)

    let handlechange=(e)=>{
        dispatch(setcolor(e.target.value))
    }
  return (
    <div>
<h1>{count}</h1>
<button onClick={()=>dispatch( increment())}> Increment</button>

<button onClick={()=>dispatch( dicrement())}>dicrement</button>


<div style={{width:"200px",height:"200px",backgroundColor:color}}>

</div>
<input type='color' value={color} onChange={handlechange}/>
    </div>
  )
}

export default Home18