const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    console.log("getting notes");
}

const removeNotes = (title) => {
    console.log('removing notes');
    const notes = loadNotes();

    const dataKeep = notes.filter((note) => note.title !== title );
      
        if ( notes.length > dataKeep.length ){
            console.log(chalk.green.inverse('Note removed'));
            saveNotes(dataKeep);
        }else {
            console.log(chalk.red.inverse('no note found'));
        }    
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

   if(note){
       console.log(chalk.inverse.green(note.title));
       console.log(note.body);
   }else {
       console.log(chalk.red.inverse("Note not found"));
   }

}


const addNotes = (title, body) => {
   
    console.log('adding notes in progress ....');

    const notes = loadNotes();
    
    debugger
    const duplicate =  notes.find( (note) =>  note.title === title );
    
    if(!duplicate){
        notes.push({
            title:title,
            body:body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse("note added"));
    }else {
        console.log(chalk.red.inverse('cannot add a note'));
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse("Your notes"));
    notes.forEach( (note) => {
            console.log(chalk.green.inverse(note.title))        
    });


}

const saveNotes = (note) => {
    noteJson = JSON.stringify(note)
    fs.writeFileSync('notes.json', noteJson);
}

const loadNotes = () => {
    try {
        const noteBuffer = fs.readFileSync('notes.json');
        const noteJSON = noteBuffer.toString();
        return JSON.parse(noteJSON);
    } catch (e) {
        return [];
        
    }
    
}


module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote



}