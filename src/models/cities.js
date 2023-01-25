import m from "mithril";

const Cities = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,
    allCitites: [],
    city: [],
    newCity: {
        name: "",
        country: "",
        longitude: "",
        latitude: "",
        area: "",
    },
    getAllCities: () => {
        const query = `
            {
                getAllCities
                {
                    id
                    name
                    country
                    longitude
                    latitude
                    area
                }
            }
          `;

        return m
            .request({
                method: "POST",
                url: `${Cities.url}/graphql`,
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    query: query,
                },
            })
            .then((response) => {
                Cities.allCities = response.data.getAllCities;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    getCityById: (cityId) => {
        const query = `{
            getCityById("id": "${cityId}")
            {
                id
                name
                country
                longitude
                latitude
                area
            }
        }
          
          }`;

        m.request({
            method: "POST",
            url: `${Cities.url}/graphql`,
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                query: query,
            },
        }).then((response) => {
            Cities.city = response.data.getCityById;
        });
    },
    addCity: () => {
        const mutation = `
            mutation {
                addCity(
                    name: "${Cities.newCity.name}",
                    country: "${Cities.newCity.country}",
                    longitude: "${Cities.newCity.longitude}",
                    latitude: "${Cities.newCity.latitude}",
                    area: "${Cities.newCity.area}"
                )
                {
                    id
                }
            }
            `;

        m.request({
            method: "POST",
            url: `${Cities.url}/graphql`,
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                query: mutation,
            },
        }).then((response) => {
            console.log(response);
        });
    },
};

export default Cities;
