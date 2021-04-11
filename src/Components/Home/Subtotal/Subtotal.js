import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';


export const Subtotal = () => {
    const [{basket},dispatch]=useStateValue();
  const total=basket.reduce((ammount,item)=>ammount+item.price,0)
    
    console.log(basket)
    return (
        <div className="subtotal">
            <CurrencyFormat
             renderText={(value)=>(
                 <>
                     <p>
                         Subtotal ({basket.length} items): <strong>{value}</strong>
                     </p>
                     <small className="subtotal_gift">
                         <input type="checkbox"/>
                         This order contais a gift
                     </small>
                 </>
             )}
            decimalScale={2}
            value={total} displayType={'text'} thousandSeparator={true} prefix={'$'}
            />
      <button>Proceed to Checkout</button>
           
        </div>
    )
}
