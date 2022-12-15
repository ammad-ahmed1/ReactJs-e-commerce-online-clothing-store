 import useState from 'react'
 let nextd = 0;
export const AddInCart  = (
    item,
    cartArr,
  setCartArr)=>{
    //const [cartArr, setCartArr] = useState([]) 
   console.log(item)
   console.log(cartArr,'cartArr')
   let obj = {id: nextd++, title: item.title, img: item.img, price: item.price, quantity: item.quantity = 1}
//    console.log(cartArr[0])
   console.log(obj,'testing')
    // setCartArr(
    //      ...cartArr,
    //     // {id: nextd++, title: item.title, img: item.img, price: item.price}
    //     [obj]
         
        
    //   )
      
}