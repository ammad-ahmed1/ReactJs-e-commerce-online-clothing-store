import React from 'react'

const Cart = () => {
  return (
    <div className='card'>
        <div className='row'>
            <div className='title'>
                <div className='row'>
                    <div className='col'>
                        <h4>Cart</h4>
                    </div>
                    <div class="col align-self-center text-right text-muted">
                        <h4>3 items</h4>
                    </div>
                </div>
            </div> 
            <div className='row'>
                
                <div className='row'>
                    <div className='col-6'>
                        <div className='row border-top border-bottom'>
                            <div className='row main align-items-center'>
                                <div className='col-2'><img className='fluid' src = "{}" /></div>
                                    <div className='col'>
                                        <div className='row text-muted'>Title</div>
                                    </div>
                                <div className='col-8'>
                                    <button>-</button>no of articles<button>+</button>
                                </div>
                                <div>
                                    <div className='col'><p>total cost</p></div>
                                </div>
                    </div>
                    <div className='col-6'>

                        <div class = "col-md-4-summary">
                            <div><h5><b>Summary</b></h5></div>
                            <hr></hr>
                            <div className='row'>
                                <div class = "col" >Total Items</div>
                                <div class = "col text-right">total bill</div>
                            </div>
                            <form>
                                <p>Shipping</p>
                                <select><option class = "text-muted">Standard-Delivery- &euro;5.00</option></select>
                            </form>
                            <div class="row">
                                <div class="col">TOTAL PRICE</div>
                                <div class="col text-right">&euro; 137.00</div>
                            </div>
                            <button class="btn">CHECKOUT</button>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
        </div>

               
               
    </div>
      
    
  )
}

export default Cart
