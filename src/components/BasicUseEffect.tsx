import React, {useState,useEffect} from 'react'

const BasicUseEffect = () => {

    const [count, setCount] = useState(0)
    const [item, setItem] = useState("")


    //第2引数は監視したいStateを指定
    useEffect(() => {
        console.log("useEffect")
    },[])

  return (
    <div>
        <button className='btn' onClick={() => setCount(prevCount => prevCount+1)}>
            Click {count}
        </button>
    </div>
  )
}

export default BasicUseEffect