import React, {useState} from 'react'
import NoteForm from './NoteForm'

function NoteList() {
    const[lists, setLists] = useState([]);

    const addlist = list => {
        if(!list.text || /^\s*$/.test('list.text')) { //regex para espacos vazios
          return  
        }
    const newLists = [list, ...lists]
    
    setLists(newLists)
    
    }

    return (
        <div>
            <h1>Start here your notes</h1>
            <NoteForm onSubmit={addlist}/>
        </div>
    );
}

export default NoteList
