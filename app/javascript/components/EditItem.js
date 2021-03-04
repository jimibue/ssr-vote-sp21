import React, { useState } from 'react'
import axios from 'axios'

const EditItem = (props) => {
    const {  id, category:catInit, name: nameInit , description: desInit, } = props.item
    
    const [name, setName] = useState(nameInit)
    const [category, setCategory] = useState(catInit)
    const [description, setDescription] = useState(desInit)


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        let response = await axios.put(`/items/${id}`, {name,category, description })
            // manual redirect here to localhost:3000/ ie homepage
            // THis is a bit of a hack
            // this is like say type localhost:3000 in your url bar and hit enter
            window.location.href = '/'
        } catch(err){
        }
     

    }
    return (
        <form onSubmit={handleSubmit} style={styles.formContainer}>
            <h1>Editing</h1>
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
            <button type='submit'>Edit</button>
            <a href='/'>cancel</a>
            {/* {setShowForm && <button type="button" onClick={() => setShowForm(false)}>cancel</button>} */}
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

export default EditItem