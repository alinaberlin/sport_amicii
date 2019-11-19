const express = require("express");
const router = express.Router();
const SportEventService = require("../services/sport-event-service");

router.post("/participate/:eventId/:userId", async (req, res) => {
    const user = await UserService.find(req.params.userId);
    const event = await SportEventService.find(req.params.eventId);
    console.log("Event is", event);
    const result = await SportEventService.addParticipant(user, event);
    res.send(result);
});

router.post("/", async (req, res) => {
    const event = await SportEventService.add(req.body);
    res.send(event);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const event = await SportEventService.find(id);
    res.send(event);
});

router.delete("/:id", async (req, res) => {
    await SportEventService.del(req.params.id);
    res.send("ok");
});

module.exports = router;
