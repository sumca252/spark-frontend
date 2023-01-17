import m from "mithril";

const Customers = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,
    allCustomers: [],
    customer: [],
    getAllCustomers: () => {
        const query = `{
            getAllCustomers{
              id,
              user {
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
                    0,
                    10
                );
            });
    },
    getCustomerById: (customerId) => {
        const query = `{
            getCustomerById(id: "${customerId}") {
              id,
              user {
                first_name
                last_name
                username
                email
                phone
                role
              }
            }
          
          }`;

        m.request({
            method: "POST",
            url: `${Customers.url}/graphql`,
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                query: query,
            },
        }).then((response) => {
            Customers.customer = response.data.getAllCustomers.slice(0, 10);
        });
    },
};

export default Customers;
