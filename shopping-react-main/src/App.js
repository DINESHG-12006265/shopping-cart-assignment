import React from 'react';
import './App.css';

function App() {
  return (
   
    <React.Fragment>
    <h1 className=" text-center my-5 text-danger text-capitalize">
       shopping
        </h1>
        <div className="container">
        <div className="row">
        <div className="col-sm">
        <div className = "d-flex justify-content-center align-items center">
        
        <div className="card" style={{width: "18rem"}}>
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQmMHAKtHkxnh9PqjSeg9wdnKAcLX6BzDphg&usqp=CAU"  
        className="card-img-top"
        alt="..."
        height="150px"/><div className='heart_1'>🤍</div>
        
        
         <div className="card-body">
         <p><b>white long dress</b>. </p> ⭕ 🔘<br/>4.8/5★★★☆☆
         
         </div>
         <div className="card-body_2">
        <h6 className='dollor'>$5.99</h6>
        </div>
        <div>
        <button className='Button'> Buy Now</button>
        </div>
        </div>
        </div>
        </div>

        <div className="col-sm">
        <div className = "d-flex justify-content align-items-center ">
        <div className="card" style={{width: "18rem"}}>
        <img
        
        src="https://www.billionaire.com/on/demandware.static/-/Sites-billionaire-master-catalog/default/dw6acbb0a4/images/large/WABC-MRP1788-PTE003N_0216_sf.jpg"
        className="card-img-top"
        alt="..."
        height="150px"/><div className='heart_2'>🤍</div>
          <div className="card-body">
          <p className="card-text">
          <b>Full Sleeve Denim Jacket</b>
          </p>⭕ 🔘<br/>4.8/5★★★☆☆
        
      
        
          </div>
          <div className="card-body_2">
          <h6 className='dollor'>$4.99</h6>
        </div>
        <div>
        <button className='Button'> Buy Now</button>
        </div>
        </div>
        </div>
        </div>

        <div className="col-sm">
        <div className="d-flex justify-content-center align-items center">
        <div className="card" style={{width: "18rem"}}>
        <img 
        src="https://tse2.mm.bing.net/th?id=OIP.L8k0jB3bLyc6HFj5bhBzqwHaGz&pid=Api&P=0"
        className="card-img-top"
        alt="..."
        height="150px"/> 
         
        <div className="cart">
        <div className='heart_3'>🤍</div>
        </div>
        



        <div className="card-body">
        <p className="card-text"><b>Hush puls</b>
        </p>⭕ 🔘<br/>4.8/5★★★☆☆
       
        </div>
        <div className="card-body_2">
        <h6 className='dollor'>$3.99</h6>
        
        </div>
        <div>
        <button className='Button'> Buy Now</button>
        </div>

        


        </div>
        </div>
        
        </div>
        
        </div>
        
        </div>
        
        
        
    </React.Fragment>
  );
}

export default App;
