const { response } = require("express");
const fs = require("fs");

// Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .


var revil = [];

getDateString = () => {
    const monthNamelist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const date = new Date();
    // Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .
    let d = weekday[date.getDay()];
    var currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const year = date.getFullYear();
    // Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    let temp1 = month.split('');
    let n = [];
    for(let i = 0; i < temp1.length; i++ ){
        if(temp1[i]!=0){
            n.push(temp1[i]);
        }
    }
    let m = monthNamelist[n.join('')];
    const day = `${date.getDate()}`.padStart(2, '0');
    var hour = date.getHours();
    // Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return `${year}(year), ${m}(${month})(month) ${day}(date), Time = ${hour}(h) ${minutes}(m) ${seconds}(s), ${d}(day)`
}
// Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .

var data = getDateString();
// Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .

const date = new Date();
let time = date.getTime();
// Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .

const express = require("express");
const app = express();
const PORT = 3000;
// Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .

fs.writeFile(`./files/${data}`, `Date = ${data} && Timestamp = ${time}`,
    (err) => console.log("hi there project success"));
// Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .

fs.readFile(`./files/${data}`, "utf-8", (err, data) => {
    console.log(data);
    app.get("/", (request, response) => {
        response.send(data);
    });
    app.listen(PORT, () => console.log("App is started", PORT));
}
);
// Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .

const Store = './files';

fs.readdir(Store, (err, files) => {
    // Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .

    files.forEach(file => {
        console.log(file);
        revil.push(file);
    });

});
// Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@airtel .

app.get("/files", (request, response) => {
    response.send(revil);
});