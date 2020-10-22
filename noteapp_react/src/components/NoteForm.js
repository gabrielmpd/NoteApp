import React, {useState, useEffect, useRef} from 'react';

function NoteForm(props) {

    const[input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

     setInput ('');   

        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text: input
        });
    };

    return (
        <form className ='form-list' on onSubmit={handleSubmit}>
        <input type='text'
        placeholder = 'Add a Note' 
        value = {input}
        name = 'text'
        className = 'list-input'
        onChange = {handleChange}
        ref={inputRef}
        />
        <button className='list-button'>Add to Notes</button>
        </form>


        
    );

}

export default NoteForm
