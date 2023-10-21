import express from 'express';
import { insertAdminController } from '../controllers/controller_admin.js';
import { Admin } from '../db/entities/Admin.js';
import { login } from '../controllers/controller_admin.js';

const route = express.Router();

route.post('/signup', async (req, res) => {
    try {
        const { userName, email, password, type } = req.body;
        if (type !== 'admin') {
            res.status(400).send({ error: "You are not admin." });
        }
        if (!userName || !email || !password) {
            res.status(400).send({ error: "All fields are required." });
        }
        const existingAdmin = await Admin.findOne({ where: { email: req.body.email } });
        if (existingAdmin) {
            res.status(400).send({ error: "Admin already exists." });
        }
        await insertAdminController(req.body);
        res.status(201).send('Admin successfully')

    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error')
    }
})


route.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (email && password) {
            login(email, password)
            res.status(200).send('login successfully')
        } else {
            res.status(404).send("Email and Password are required")
        }
    } catch (error) {
        throw "something went wrong"
    }
})

route.put('/update', (req, res) => {
    console.log('update admin route details')
    res.status(200).send('admin updated successfully');
})


route.delete('/admin', (req, res) => {
    console.log('delete admin route details')
    res.status(200).send('admin deleted successfully');
});


route.get('/admins', (req, res) => {
    console.log('list of admins')
    res.status(200).send('list of admins returned successfully');
})


export default route;