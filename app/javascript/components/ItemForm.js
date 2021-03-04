import React, { useState } from 'react'

const ItemForm = (props) => {
    const { addItem, setShowForm, id, category:catInit, name: nameInit , description: desInit, updateItem} = props
    
    const [name, setName] = useState(nameInit ? nameInit : "")
    const [category, setCategory] = useState(catInit ? catInit : "")
    const [description, setDescription] = useState(desInit ? desInit : "")


    const handleSubmit = (e) => {
        e.preventDefault()
        // here I have my the fields 
        if(id){
          updateItem({name, category, description}, id)
          // toggle form here
          setShowForm(false)
        } else{
          addItem({ name, category, description })
        }
       
        // clear form
        setDescription('')
        setName('')
        setCategory('')
    }
    return (
        <form onSubmit={handleSubmit} style={styles.formContainer}>
            <h1>{id ? `Editing ${id}` : "Add Item"}</h1>
            <p>name</p>
            <input
                style={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>category</p>
            <input
                style={styles.input}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <p>description</p>
            <input
                style={styles.input}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button type='submit'>{id ? `Edit` : "Add"}</button>
            {setShowForm && <button type="button" onClick={() => setShowForm(false)}>cancel</button>}
            {/* {setShowForm && <div onClick={()=> setShowForm(false)}>cancel</div>} */}
        </form>
    )
}

const styles = {
    formContainer: {
        border: '1px solid black',
        margin: '10px',
        padding: '20px'
    },
    input: {
        width: '600px',
        height: '20px',
        marginBottom: '10px'
    }
}

export default ItemForm