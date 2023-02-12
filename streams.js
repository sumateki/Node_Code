process.stdin.on("data", (data)=>
{
    console.log(data)
    const name = data.toString().trim().toUpperCase()
    const name2 = data.toString().trim().toLowerCase()
    if(name !== "" && name2 !=="")
    {
        process.stdout.write(`hello.. ${name}\n`)
        process.stdout.write(`hello.. ${name2}\n`)
    }
    else{
        process.stderr.write("Invalid data")
    }
})