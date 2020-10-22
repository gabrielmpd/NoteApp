import React, {useState} from 'react'
import NoteForm from './NoteForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Note({lists, completeList, removeList}) {

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
            <RiCloseCircleLine 
            onClick={() => removeList(list.id)}
            className='delete-icon'/>
            <TiEdit onClick={() => setEdit({id: list.id, value: list.text})}
            className='edit-icon'
            />
            
            </div>        


        </div>
    ))
        
}

export default Note
