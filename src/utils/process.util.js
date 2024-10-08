process.on("exit", (code)=> {
    console.log("PROCESO TERMINADO CON CODIGO "+code);    
})

/* process.on("uncaughtException", (err)=> {
    console.log("ERROR: "+err.message);    
}) */


//process.pid()   //genere a proposito un error
process.exit()