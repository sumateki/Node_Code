const http=require('http');
const date = require('date-and-time');
http.createServer(function(req, res)
{
    const now = new Date();
    res.end(`Todays's date and time is: ${date.format(now, 'YYYY/MM/DD HH:mm:ss')}`)
    //res.end method ends the current response process
    //used to quickly end the response without any data
}).listen(8080);
//, 8080, ()=> { 
 console.log(`Server is running on `); 
//}); 