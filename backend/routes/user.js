const express = require("express");
const router = express.Router();
const UserService = require("../services/user-service");

//rest for user
router.get("/all", async (req, res) => {
    const users = await UserService.findAll();
    res.render("user", { users: users });
});

router.get("/all/json", async (req, res) => {
    const users = await UserService.findAll();
    res.send(users);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const user = await UserService.find(id);
    res.send(user);
});
router.get("/:id/json", async (req, res) => {
    const id = req.params.id;
    const user = await UserService.find(id);
    res.send(user);
});
router.post("/", async (req, res) => {
    console.log("New user data is", req.body);
    const user = await UserService.add(req.body);
    //console.log(req.body)
    res.send(user);
});

router.delete("/:id", async (req, res) => {
    await UserService.del(req.params.id);
    res.send("ok");
});

module.exports = router;
