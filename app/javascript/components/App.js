import React, {useState} from 'react'
import Items from './Items'

const dummyData = [
    {id:1,category:'cat 1', name:'jon', likes:2, description:'desashdfkjahdkfjhasldkfhak a jkahs dfjha kdhf akjshdf kjas dfkjha sdkjfhaksjdhf kjashd fkjasdkfjh aksjdhf kajshd fkjasdkfjh aksjdhf kjashdf kjahsd fkjhaskdjfh kajsdc'},
    {id:1, category:'cat 2', name:'jon2', likes:3, description:'desc1'},
]
const App = () => {

    // const [getter/currentState, funtiontosetGetter] = useState(intialValue)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const getItems = () =>{
        console.log('getItems called')
        setLoading(true)
        setTimeout(()=>{
            setItems(dummyData)
            setLoading(false)

        }, 2000)
    }

    return (
    <>
        <h1>App</h1>
        <button disabled={loading} onClick={getItems}>{loading ? 'loading': 'getItems'}</button>
        <Items header='Items Yo' items={items}/>
    </>
    )
}

export default App