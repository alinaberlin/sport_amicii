//rest for venue
const express = require("express");
const router = express.Router();
const VenueService = require("../services/venue-service");

router.get("/all", async (req, res) => {
    const venues = await VenueService.findAll();
    res.render("venue", { venues: venues });
});
router.post("/", async (req, res) => {
    const venue = await VenueService.add(req.body);
    //console.log(req.body)
    res.send(venue);
});
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const venue = await VenueService.find(id);
    res.send(venue);
});
router.delete("/:id", async (req, res) => {
    await VenueService.del(req.params.id);
    res.send("ok");
});

module.exports = router;
