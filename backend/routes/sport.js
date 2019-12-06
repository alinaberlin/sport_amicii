const express = require("express");
const router = express.Router();
const SportService = require("../services/sport-service");

router.post("/", async (req, res) => {
    const sport = await SportService.add(req.body);
    res.send(sport);
});

router.get("/all", async (req, res) => {
    const sports = await SportService.findAll();
    res.render("sport", { sports: sports });
});

router.get("/all/json", async (req, res) => {
    const sports = await SportService.findAll();
    res.send(sports);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const sport = await SportService.find(id);
    res.send(sport);
});

router.delete("/:id", async (req, res) => {
    await SportService.del(req.params.id);
    res.send("ok");
});

module.exports = router;
