import React, {useState} from 'react'
import NoteForm from './NoteForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import ReactMarkdown from 'react-markdown'


function formataData(data = new Date()){
    var dia = data.getDate();
    var mes = data.getMonth()+1;
    //var ano = data.getFullYear();

    if (dia.toString().length === 1) dia = '0'+dia;
    if (mes.toString().length === 1) mes = '0'+mes;

    var datas = '   - '+dia+'/'+mes

    return datas
}


function Note({lists, completeList, removeList, updateList}) {

    const[edit,setEdit] = useState({
        id:null,
        value: ''
    })

    const submitUpdate = value => {
        updateList(edit.id, value)
        setEdit({
            id: null,
            value: ''

        })
    }

    
    if (edit.id) {
        return <NoteForm edit={edit} onSubmit={submitUpdate} />
    }

    return lists.map((list, index) => (
        <div className={list.isComplete ? 'list complete' :
    'list-row'} key={index}
    >   

        <div key = {list.id} onClick={() => completeList(list.id)}>
        {list.text + formataData()}
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
