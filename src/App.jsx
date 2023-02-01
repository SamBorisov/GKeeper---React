import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer"
import Note from "./components/Note"
import CreateArea from "./components/CreateArea"

//import notes from "./notes"


export default function App() {

    const [notes, setNotes] = React.useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
     
    return(
        <div>
            <Header />

            <CreateArea onAdd={addNote} />

            {notes.map((x, index) => 
             <Note
             key={index}
             id={index}
             title={x.title}
             text={x.content}
             onDelete={deleteNote}
           />) }
            

           

            <Footer />
            
    </div>
    )
}