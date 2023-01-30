const m = require("mithril");

const Scooters = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,

    allScooters: [],
    scooter: [],
    updateScooter: {
        scooterId: "",
        battery: "",
        statusId: "",
        longitude: "",
        latitude: "",
        priceId: "1",
        speed: "",
        stationId: "",
    },
    getAllScooters: () => {
        const query = `
            query {
                getAllScooters {
                    id,
                    battery,
                    status {
                        status,
                    },
                    longitude,
                    latitude,
                    price {
                        start_cost
                        travel_cost
                        parking_cost
                    },
                    speed,   
                }
            } 
        `;

        return m
            .request({
                method: "POST",
                url: `${Scooters.url}/graphql`,
                body: {
                    query: query,
                },
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((result) => {
                Scooters.allScooters = result.data.getAllScooters.slice(
                    0,
                    1000
                );
            });
    },
    getScooterById: (id) => {
        const query = `
            query {
                getScooterById(id: "${id}") {
                    id,
                    battery,
                    status {
                        status,
                    },
                    longitude,
                    latitude,
                    price {
                        start_cost
                        travel_cost
                        parking_cost
                    },
                    speed,   
                }
            } 
        `;

        return m
            .request({
                method: "POST",
                url: `${Scooters.url}/graphql`,
                body: {
                    query: query,
                },
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((result) => {
                if (result.data.getScooterById) {
                    Scooters.scooter = result.data.getScooterById;

                    Scooters.updateScooter.scooterId =
                        result.data.getScooterById[0].id;

                    Scooters.updateScooter.battery =
                        result.data.getScooterById[0].battery;

                    Scooters.updateScooter.longitude =
                        result.data.getScooterById[0].longitude;

                    Scooters.updateScooter.latitude =
                        result.data.getScooterById[0].latitude;

                    Scooters.updateScooter.speed =
                        result.data.getScooterById[0].speed;

                    console.log(result.data.getScooterById);
                }
            });
    },
    moveScooter: () => {
        console.log(Scooters.updateScooter);

        const query = `
            mutation {
                updateScooterById(
                    id: "${Scooters.updateScooter.scooterId}",
                    battery: "${Scooters.updateScooter.battery}",
                    status_id: "${Scooters.updateScooter.statusId}",
                    longitude: "${Scooters.updateScooter.longitude}",
                    latitude: "${Scooters.updateScooter.latitude}",
                    price_id: "${Scooters.updateScooter.priceId}",
                    speed: "${Scooters.updateScooter.speed}",
                    station_id: "${Scooters.updateScooter.stationId}",
                ) {
                    id,
                }
            }
        `;

        console.log(query);
        return m
            .request({
                method: "POST",
                url: `${Scooters.url}/graphql`,
                body: {
                    query: query,
                },
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((result) => {
                if (result.data.updateScooterById === null) {
                    m.route.set("/sparkcyklar");
                }
            });
    },
};

module.exports = Scooters;
