// {id, category:'cat 2', name:'jon2', likes:3, description:'desc1'},
import React, { useState } from 'react'
import ItemForm from './ItemForm'

const Item = (props) => {
    const { id, category, name, description, likes, deleteItem, updateItem } = props
    const [showForm, setShowForm] = useState(false)
    const renderItem = () => {
        return (
            <>
                <div className='item-header'>
                    <h1>{name}</h1>
                    <div>
                        <p>{category} </p>
                        <p> {likes}</p>
                    </div>
                </div>
                <p>{description}</p>
                <div className='item-footer'>
                    <p onClick={() => deleteItem(id)}>delete</p>
                    <p onClick={() => setShowForm(true)}>edit</p>
                    <p>Id: {id}</p>
                </div>
            </>
        )

    }
    const clickHandler = () => {
        console.log('clicked!!!')
    }

    return (
        <div className='item-container'>
            {!showForm && renderItem()}
            {showForm && <ItemForm updateItem={updateItem} id={id} setShowForm={setShowForm} category={category} name={name} description={description} />}
        </div>
    )
}

export default Item



