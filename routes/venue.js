//rest for venue 
const express = require('express');
const router = express.Router();

const VenueService= require('../services/venue-service');
router.get('/venue/all', async(req,res)=> {
    const venues = await VenueService.findAll()
    res.render('sport', {sport:sport});
})
router.get("/venue/:id", async (req, res) => {
    const id = req.params.id;
    const venue = await VenueService.find(id)
    res.send(venue);
});
router.delete("/venue/:id", async (req, res) => {
    await VenueService.del(req.params.id);
    res.send("ok");
});

module.exports= router;