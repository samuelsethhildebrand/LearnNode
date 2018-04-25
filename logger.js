const LOG_FILENAME = 'GameOn.log';
const fs = require('fs')

//Delete existing log file each time the program runs.
fs.unlink(LOG_FILENAME, err => {if (err) console.log(err)});

function log(msg)
{   
    return {
        
    }
    //Write to the console.
    console.log(msg);

    //Write to a log file.    
    fs.appendFile(LOG_FILENAME, `${new Date(Date.now()).toLocaleString()} ${msg} \r\n`, null, (err) => {});
}

module.exports.Log = log;