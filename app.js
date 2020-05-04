const yargs= require('yargs');
const notes = require('./notes');

yargs.version('1.2.2');

yargs.command({
    command:'add',
    describe: "adding notes",
    builder:{
        title:{
            describe:"Note title",
            demandOption:'true',
            type:'string'
        },
        body:{
            describe:"This body belongs to the title",
            describeOption:'true',
            type:'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body);
    }
});

yargs.command({
    command:'remove',
    describe:'remove notes',
    builder:{
        title : {
            describe: 'note title to remove',
            describeOption : "true",
            type: "string"
        }
    },
    handler(argv) {
        console.log('removing a notes');
        notes.removeNotes(argv.title);
    }

});

yargs.command({
    command:'list',
    describe:'list notes',
    handler: () => {
        notes.listNotes();
    }

});


yargs.command({
    command:'read',
    describe:'read notes',
    builder:{
        title:{
            describe:"note title to read",
            describeOption: "true",
            type: "string"
        }
    },
    handler:(argv) => {
        notes.readNote(argv.title);
    }

})

yargs.parse();


