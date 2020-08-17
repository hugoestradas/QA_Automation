const mongoose = require("mongoose");

async function connect() {
    try{
        await mongoose.connect(
            "mongodb+srv://SuperTestUser:SuperTestUser1@cluster0.niuly.mongodb.net/todo-tdd?retryWrites=true&w=majority",
            { useNewUrlParser: true}
        );
    }catch (err){
        console.error("Error connection to mongodb")
        console.error(err);
    }
}

module.exports = { connect};