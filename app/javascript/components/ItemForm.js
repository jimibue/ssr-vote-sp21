import React, {useState} from 'react'

const ItemForm = (props) => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const { addItem } = props

    const handleSubmit = (e) => {
        e.preventDefault()
        // here I have my the fields 
        addItem({name, category, description}) 




        // clear form
        setDescription('')
        setName('')
        setCategory('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>name</p>
            <input 
               value={name}
               onChange={(e)=> setName(e.target.value)}           
             />
            <p>category</p>
            <input
             value={category}
             onChange={(e)=> setCategory(e.target.value)}         
            />
            <p>description</p>
            <input 
              value={description}
              onChange={(e)=> setDescription(e.target.value)}     
            />
            <button>add</button>
        </form>
    )
}

export default ItemForm