import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import StickyNote from './StickyNote';

const Notes = () => {

    const {notes}=useContext(AppContext);


    <>
        {notes.map((noteItem)=>{
            return (
                <StickyNote key={noteItem.id} note={noteItem}/>
            )
        })}
    </>
}

export default Notes