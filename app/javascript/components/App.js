import React, {useState} from 'react'
import Items from './Items'

const App = () => {

    // const [getter/currentState, funtiontosetGetter] = useState(intialValue)
    const [items, setItems] = useState([
        {id:1,category:'cat 1', name:'jon', likes:2, description:'desashdfkjahdkfjhasldkfhak a jkahs dfjha kdhf akjshdf kjas dfkjha sdkjfhaksjdhf kjashd fkjasdkfjh aksjdhf kajshd fkjasdkfjh aksjdhf kjashdf kjahsd fkjhaskdjfh kajsdc'},
        {id:1, category:'cat 2', name:'jon2', likes:3, description:'desc1'},
    ])

    const getItems = () =>{
        console.log('getItems called')
    }

    return (
    <>
        <h1>App</h1>
        <button onClick={getItems}>getItems</button>
        <Items header='Items Yo' items={items}/>
    </>
    )
}

export default App