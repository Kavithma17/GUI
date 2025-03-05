const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());


const UserModel = require('./models/User');
const AppointmentModel = require('./models/Appointment');


if (!mongoose.connection.readyState) {
    mongoose.connect("mongodb://127.0.0.1:27017/user", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("MongoDB connected"))
      .catch((err) => console.log(err));
}


app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.json("The password is incorrect");
            }
        } else {
            res.json("No record existed");
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});


app.post('/register', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});


app.post('/appointment', async (req, res) => {
    try {
        const appointment = await AppointmentModel.create(req.body);
        res.json({ message: "Appointment booked successfully", appointment });
    } catch (error) {
        res.status(500).json({ error: "Error booking appointment" });
    }
});


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
