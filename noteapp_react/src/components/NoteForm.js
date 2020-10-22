import React, {useState} from 'react'

function NoteForm() {

    const[input, setInput] = useState('')

    return (
        <form className ="form-list">
        <input type="text"
        placeholder = "Add a Note" 
        value = {input}
        name = 'text'
        className = 'form-list'
        />
        <button className='list-button'>Add to Notes</button>
        </form>


        
    );

}

export default NoteForm
