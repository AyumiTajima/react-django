import React, {useState} from 'react'


type Producttype = {
    id: number | null,
    name: string | any,
}

const Basic2:React.FC = () => {

    const [products, setProducts] = useState<Producttype[]>([])

    const newProducts = () => {
        setProducts([...products,{
                id: products.length,
                name: "HelloReact"
            }
        ])
    }

  return (
    <>
    <div>Basic2</div>
    <button className='btn'  onClick={newProducts}>Add new Produt</button>
    <ul>
        {products.map (product => (
            <li key={product.id}>{product.name} id: {product.id}</li>
        ))}
    </ul>
    </>
  )
}

export default Basic2