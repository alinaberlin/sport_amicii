const { UserService, SportService, VenueService, SportEventService } = require("./services");
const { User, Venue, Sport, SportEvent } = require("./models");

const main = async () => {
    const user = await UserService.add(User.create({ firstName: "Arnold", secondName: "Swarz", email: "aa@gmail.com", password: "password" }));
    const sport = await SportService.add(Sport.create({ type: "running", minAttendee: 1 }));
    const venue = await VenueService.add(Venue.create({ name: "prenz", address: "Joseph 1", sports: [sport] }));
    const sportEvent = await SportEventService.add(SportEvent.create({ date: new Date(), venue, maxNumber: 2, minAttendee: 1, sport }));
};

main();
