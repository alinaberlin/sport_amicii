const express = require('express')
const router = express.Router()
const SportService = require('../services/sport-service')

router.get('/sports/all', async(req,res)=> {
    const sports = await SportService.findAll()
    res.render('sport', {sports:sports})
})
router.get("/sport/:id", async (req, res) => {
    const id = req.params.id;
    const sport = await UserService.find(id);
    res.send(sport);
});
router.delete("/sport/:id", async (req, res) => {
    await SportService.del(req.params.id);
    res.send("ok");
});

module.exports = router