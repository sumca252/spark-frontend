import m from "mithril";

const Customers = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,
    allCustomers: [],
    customer: {},
    getAllCustomers: () => {
        const query = `{
            getAllCustomers{
              id,
              user {
                id
                first_name
                last_name
                username
                email
                phone
                role
              }
            }
          
          }`;

        return m
            .request({
                method: "POST",
                url: `${Customers.url}/graphql`,
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    query: query,
                },
            })
            .then((response) => {
                Customers.allCustomers = response.data.getAllCustomers.slice(
                    10,
                    20
                );
            });
    },
    getCustomerById: (customerId) => {
        const query = `
            {
                getCustomerById(id: "${customerId}") {
                    id,
                    user {
                        id
                        first_name
                        last_name
                        username
                        email
                        phone
                        role
                    }
                }
            }`;

        return m
            .request({
                method: "POST",
                url: `${Customers.url}/graphql`,
                headers: {
                    "Content-Type": "application/json",
                },
                body: {
                    query: query,
                },
            })
            .then((response) => {
                Customers.customer = response.data.getCustomerById;
            });
    },
};

export default Customers;
