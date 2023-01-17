import m from "mithril";

const Cities = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,
    allCitites: [],
    city: [],
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
};

export default Cities;
