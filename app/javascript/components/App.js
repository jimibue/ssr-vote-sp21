import React, {useState} from 'react'
import Items from './Items'
import axios from 'axios'
import ItemForm from './ItemForm'

const App = () => {
    const handleError = (error) =>{
        console.log(error)
        alert('error getting item check console')
    }

    // const [getter/currentState, funtiontosetGetter] = useState(intialValue)
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    //GET localhost:3000/items => render items json
    // [{"id":1,"category":"misc","name":"XML","description":"The GB panel is down, hack the primary panel so we can transmit the EXE array!","likes":0,"created_at":"2021-03-03T16:48:47.564Z","updated_at":"2021-03-03T16:48:47.564Z"}]
    const getItems = async () =>{
        console.log('getItems called')
        try{
        setLoading(true)
        let response = await axios.get('/items')
        setLoading(false)
        setItems(response.data)
        } catch(error){
            handleError(err)
            setLoading(false)
        }
    }
    // DELETE	/items/:id
    const deleteItem = async(id) => {
        console.log('clicked, ID:', id)
        try{
           // extra step: actually delete from db
          //   TODO: uncomment whenDB ready  
          let response = await axios.delete(`/items/${id}`)
          // response.data should the thing deleted
          // remove Id from UI
          // filter id out if items in new array with filter
          let filterItems = items.filter( i => i.id !== id )

            // setItems with newArray
            setItems(filterItems)
        }catch(err){
            handleError(err)
            setLoading(false)
        }
    }

    const addItem = async (obj) => {

       console.log(obj)
        // want to add to db
        try{
        let response = await axios.post('/items', {...obj, likes:0 })
         //then update UI(need to in app.js)
         setItems([response.data, ...items])
        }
        catch(err){
            handleError(err)
        }

       
    }

    // const getItemsNoAsync = () => {
    //     // promiseCall().then((res)=>{}).catch((err)=>{})
    //     axios.get('/items').then((res)=>{
    //        // finished: success
    //        setLoading(false)
    //        setItems(res.data)
    //     }).catch((err)=>{
    //       // finished: error
    //       console.log(err)
    //       alert('error getting item check console')
    //       setLoading(false)
    //     })
    // }

    return (
    <>
        <h1>App</h1>
        <button disabled={loading} onClick={getItems}>{loading ? 'loading': 'getItems'}</button>
        {/* <button disabled={loading} onClick={getItemsNoAsync}>{loading ? 'loading': 'getItems'}</button> */}
        <ItemForm  addItem={addItem}/>
        {/* passing deleteItem function here as 'deleteItem' props */}
        <Items deleteItem={deleteItem} header='Items Yo' items={items}/>
    </>
    )
}

export default App