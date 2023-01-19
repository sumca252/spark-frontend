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

                Scooters.scooter = result.data.getAllScooters.filter(
                    (scooter) => {
                        return scooter.id > 1 && scooter.id <= 1000;
                    }
                );
                console.log(Scooters.scooter);
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
};

export default Scooters;
