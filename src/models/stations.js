import m from "mithril";

const Stations = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,
    allStations: [],
    station: [],
    newStation: {
        name: "",
        zoneId: "",
        longitude: "",
        latitude: "",
        cityId: "",
    },
    getAllStations: () => {
        const query = `
            {
                getAllStations
                {
                    id
                    station_name
                    city_name
                    zone_type
                    longitude
                    latitude
                }
            }
          `;

        m.request({
            method: "POST",
            url: `${Stations.url}/graphql`,
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                query: query,
            },
        }).then((response) => {
            console.log(response.data.getAllStations);
            Stations.allStations = response.data.getAllStations;
        });
    },
    getStatioById: (stationId) => {
        const query = `{
            getStatioById("id": "${stationId}")
            {
                id
                station_name
                city_name
                zone_type
                longitude
                latitude
            }
            
        }
          
          }`;

        m.request({
            method: "POST",
            url: `${Stations.url}/graphql`,
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                query: query,
            },
        }).then((response) => {
            Stations.station = response.data.getStatioById;
        });
    },
    addStation: () => {
        const mutations = `
            mutation {
                addStation(
                    name: "${Stations.newStation.name}",
                    zone_id: "${Stations.newStation.zoneId}",
                    longitude: "${Stations.newStation.longitude}",
                    latitude: "${Stations.newStation.latitude}",
                    city_id: "${Stations.newStation.cityId}"
                )
                {
                    id
                }
            }
            `;

        m.request({
            method: "POST",
            url: `${Stations.url}/graphql`,
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                query: mutations,
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

export default Stations;
