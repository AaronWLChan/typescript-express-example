import express from 'express'
import routes from './endpoints'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json());

//Use Routes
app.use("/todos", routes.todo)

//Connect to MongoDB (You should use .env)
mongoose.connect("mongodb://localhost:27017/my-db")

const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Listen
app.listen(PORT, () => {
    console.log("Server listening on port: " + PORT)
})

