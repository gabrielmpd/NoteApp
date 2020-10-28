import React from 'react';
import './App.css';
import NoteList from './components/NoteList';

function App() {
    // localStorage.setItem('test','teste123')
   // console.log(localStorage.getItem('test'))
      return (
        <div className='note-app'>
        
        <NoteList/>


        </div>
      );
    

  }

export default App;
