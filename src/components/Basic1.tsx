import React,{useState} from 'react'

type Buttontype = {
    name: string,
}
type Arraytype = {
    name1: string,
    price: string,
}

const Basic1 = ({name}: Buttontype, {name1, price}:Arraytype) => {
    const [count, setCount] = useState(0)
    const [product, setProducts] = useState({name1:"",price:""})
  return (
    <>
        <div>Basic1{name}</div>
        <div>{name1}</div>
        <div>{price}</div>

        <form>
        <input className='input' type='text' value={product.name1}
                                       //...要素を分解する
        onChange={evt => setProducts({...product, name1:evt.target.value})}/>
        <input className='input' type='text' value={product.price}
        onChange={evt => setProducts({...product, price:evt.target.value})}/>

      </form>

      <h2>Product name is {product.name1}</h2>
      <h2>Product price is {product.price}</h2>


      <button onClick={() => { setCount(prevCount=>prevCount+1); setCount(prevCount=>prevCount+1); }} className='btn'>
        count {count}
      </button>

    </>
  )
}

export default Basic1