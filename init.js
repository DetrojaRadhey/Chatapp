const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(()=>{
    console.log("connection successfull");
}).catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "neha",
        to:  "preeti",
        msg: "send me notes for exam",
        created_at: new Date(),
    },
    {
        from: "rahul",
        to:  "jay",
        msg: "let's play cricket",
        created_at: new Date(),
    },
    {
        from: "raj",
        to:  "adam",
        msg: "su kr chho taklu",
        created_at: new Date(),
    },
    {
        from: "dharmi",
        to:  "neha",
        msg: "good night",
        created_at: new Date(),
    },
    {
        from: "modi",
        to:  "radhey",
        msg: "su hale bhura",
        created_at: new Date(),
    },
    {
        from: "radhey",
        to:  "putin",
        msg: "aapde ek meeting rakhvi padse",
        created_at: new Date(),
    },
];
Chat.insertMany(allChats);