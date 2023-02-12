//an interactive terminal
//readline prvides an interface for reading data fom a readable stream -- stdin
//query() - this func asks a ques to user using the readline
const readline = require('readline')
const r1= readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
function query(question){
    r1.question(question, (answer) =>
    {
        if(answer === 'e')
        {
            process.exit(1)
        }
        r1.write(`the ansr to the gven ques is: ${answer}\n`)
        query(question)
    })
}
query("What is ur name?\n")