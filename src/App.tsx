import './App.css';

import { useState } from 'react';


function App() {

  const [item,setItem]=useState('');

  const [quantity,setQuantity]=useState('');
  const [list,addList]=useState([] as any);
  
  const addItem = (event:any)=>{
    event.preventDefault();
    let data =
      {
        id:(Math.random()*1000).toFixed(0),
        itemName : item,
        itemQuantity : quantity,
      }
    
    let  templist=list
    templist.push(data)
    addList(templist)
    setItem('');
    setQuantity('');
  };

  const add =(id:any)=>{
    let  newlist =list.filter((items:any)=>items.id===id)
    newlist[0].itemQuantity=parseInt(newlist[0].itemQuantity)+1;
    let templist=list.filter((items:any)=>items.id!==id)
    templist.push(newlist[0]); 
    addList(templist);  
    setItem('');
    setQuantity('');
  }
  
  const subtract=(id:any)=>{
    let  newlist =list.filter((items:any)=>items.id===id)
    newlist[0].itemQuantity=parseInt(newlist[0].itemQuantity)-1;
    let templist=list.filter((items:any)=>items.id!==id)
    templist.push(newlist[0]); 
    addList(templist);    
  }

  const remove = (id:any)=>{
    let newList = list.filter((item: any) => item.id !== id);
    addList(newList);
  }
  return (
    <div className="App">
      <section className='store'>
        <section id='store'>
          <h1>store</h1>
        </section>
    <form onSubmit={addItem}>
      <label htmlFor="item">Item</label>
    <br />
    <input type="text" id="item" name='item' onChange={(e)=>setItem(e.target.value)} value={item} />
    <br />
    <label htmlFor="quantity">quantity</label>
    <br />
    <input type="number" id="quantity" name='quantity'onChange={(e)=>setQuantity(e.target.value) } value={quantity} />
    <br />
    <button type='submit' id='submit' >add</button>
    
    </form>
      </section>
      <section className='showData'>
        <h2>cart</h2>

      </section>
      <section>
      
         {
         list.map((items:any)=>(
          items.itemQuantity>0?(
            
          <div key={items.id} id='cart' >
          <div id='details'>
          {items.itemName} X {items.itemQuantity} <span></span>
          </div>  
          <div>
            
          <button id='add' onClick={()=>add(items.id)}>+</button> 
          <button  id='subtract' onClick={()=>subtract(items.id)}>-</button> 
          <button id='remove' onClick={()=>remove(items.id)}>delete</button> </div>
          </div>
          )
          :null)
          )
        }
      </section>
    </div>
  );
}

export default App;
