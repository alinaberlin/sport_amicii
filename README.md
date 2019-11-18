# sport_amicii

## Sport enpoints

1. Create a sport

```javascript
axios
    .post("/sport", {
        name: "Football",
        minAttendee: 2
    })
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
```

2. Get by a id

```javascript
axios
    .get("/sport/5dd31c6e0972723ee789b1c8")
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
```
