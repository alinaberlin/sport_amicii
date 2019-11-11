const { UserService, SportService, VenueService, SportEventService } = require("./services");
const { User, Venue, Sport, SportEvent } = require("./models");

const main = async () => {
    const sport = await SportService.add(Sport.create({ type: "running", minAttendee: 1 }));
    const tempUser = User.create({ firstName: "Arnold", secondName: "Swarz", email: "aa@gmail.com", password: "password" });
    tempUser.addInterest(sport);
    const user = await UserService.add(tempUser);
    const venue = await VenueService.add(Venue.create({ name: "prenz", address: "Joseph 1", sports: [sport] }));
    const tempEvent = SportEvent.create({ date: new Date(), venue: venue, maxNumber: 2, minAttendee: 1, sport });
    tempEvent.addParticipants(user);
    const sportEvent = await SportEventService.add(tempEvent);
};

main();
