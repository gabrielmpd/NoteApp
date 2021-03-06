import React, {useState} from 'react';
import NoteForm from './NoteForm';
import Note from './Note';
import ReactMarkdown from 'react-markdown';


function NoteList() {
    const[lists, setLists] = useState((localStorage.getItem('list-note') != null || localStorage.getItem('list-note') != undefined) ? JSON.parse(localStorage.getItem('list-note')) : []
    );
    
    
    const addlist = list => {
        if(!list.text || /^\s*$/.test('list.text')) { //regex para espacos vazios
          return  
        }
    const newLists = [list,...lists]
    
    setLists(newLists)

    localStorage.setItem('list-note', JSON.stringify(newLists))
    
    
    
    }


    const updateList = (listId, newValue) => {
        if(!newValue.text || /^\s*$/.test('newValue.text')) { //regex para espacos vazios
            return;
        }

        setLists(prev => prev.map(item => (item.id === listId ? newValue : item )))

        
    }

    const removeList = id =>{
        const removeArr = [...lists].filter(list => list.id !== id);
        setLists(removeArr);
    }


    const completeList = id => {
        let updateLists = lists.map(list=>{
            if(list.id ===id){
                list.isComplete = !list.isComplete;
            }
           return list; 
        })
        setLists(updateLists);
    }


    return (
        <div>
            <h1>Start here your notes </h1>
            <NoteForm onSubmit={addlist}/>
            <Note 
            lists = {lists} completeList = {completeList}
            removeList={removeList}
            updateList={updateList}
            />
        </div>
    );
}

export default NoteList
