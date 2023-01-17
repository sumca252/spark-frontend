import m from "mithril";

const Stations = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,
    allStations: [], // list of all stations
    station: [], // single station
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
};

export default Stations;
