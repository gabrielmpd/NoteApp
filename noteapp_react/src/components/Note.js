import React, {useState} from 'react'
import NoteForm from './NoteForm'

function Note() {

    const[edit,setEdit] = useState({
        id:null,
        value: ''
    })

    return lists.map((list, index) => (
        <div className={list.isComplete ? 'list complete' :
    'list-row'} key={index}
    >

        <div key = {list.id} onClick={() => completeList(list.id)}>
        {list.text}
        </div>
        
        <div className = "icons">
            
            </div>        


        </div>
    ))
        
}

export default Note
