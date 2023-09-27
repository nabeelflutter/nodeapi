const express = require('express');
const router = new express.Router();
const HostelOwner = require('../models/hostel');
const checkauth = require('../middleware/checkauth')
router.post('/hostels', checkauth, async (req, res) => {
    try {
        console.log(req.body);
        const hostel = new HostelOwner(req.body);
        const addHostel = await hostel.save();
        res.status(201).send(addHostel); // Send a JSON response with status 201
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: error.message }); // Send a JSON error response with status 400
    }
});
router.get('/hostels', async (req, res) => {
    try {

        const hostelData = await HostelOwner.find().sort({ "hostelname": 1 });
        res.send(hostelData);

    } catch (e) {
        res.send(e);
    }
});

router.get('/hostels/:typehostel', async (req, res) => {
    try {
        const typehostel = req.params.typehostel;
        let hostelData;

        if (typehostel === "Girls") {
            hostelData = await HostelOwner.find({ typehostel: "Girls" });
        } else if (typehostel === "Boys") {
            hostelData = await HostelOwner.find({ typehostel: "Boys" });
        } else {
            // Handle invalid typehostel value (e.g., send an error response)
            return res.status(400).json({ error: 'Invalid typehostel value' });
        }

        res.send(hostelData); // Send the response once, after the conditionals
    } catch (e) {
        res.status(500).send(e);
    }
});

router.delete('/hostels/:id', checkauth, async (req, res) => {
    try {

        const deletehostel = await HostelOwner.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deletehostel);

    } catch (e) {
        res.status(500).send(e);
    }
})

router.patch('/hostels/:id', checkauth, async (req, res) => {
    try {
        const id = req.params.id;
        const updateHostel = await HostelOwner.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.send(updateHostel);
    } catch (e) {
        res.status(500).send(e);
    }
})
module.exports = router;