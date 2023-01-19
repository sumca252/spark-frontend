import m from "mithril";

const Scooters = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,

    allScooters: [],
    scooter: [],
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
                Scooters.allScooters = result.data.getAllScooters;
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
                Scooters.scooter = result.data.getScooterById;
            });
    },
    moveScooter: () => {
        const query = `
            mutation {
                updateScooterById(
                    id: "${Scooters.scooter.id}",
                    battery: "${Scooters.scooter.battery}",
                    status_id: "${Scooters.scooter.status.id}",
                    longitude: "${Scooters.scooter.longitude}",
                    latitude: "${Scooters.scooter.latitude}",
                    price_id: "${Scooters.scooter.price.id}",
                    speed: "${Scooters.scooter.speed}",
                    station_id: "${Scooters.scooter.station.id}",
                ) {
                    id,
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
                console.log(result);
            });
    },
};

export default Scooters;
