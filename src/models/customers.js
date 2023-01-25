import m from "mithril";

const Customers = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,
    allCustomers: [],
    customer: [],
    newCustomer: {},
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
                Customers.allCustomers = response.data.getAllCustomers;
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
                if (response.data.getCustomerById) {
                    Customers.customer = response.data.getCustomerById;

                    Customers.newCustomer = {
                        customerId: Customers.customer[0].id,
                        userId: Customers.customer[0].user.id,
                        first_name: Customers.customer[0].user.first_name,
                        last_name: Customers.customer[0].user.last_name,
                        username: Customers.customer[0].user.username,
                        email: Customers.customer[0].user.email,
                        phone: Customers.customer[0].user.phone,
                        role: Customers.customer[0].user.role,
                        roleId: 2,
                    };
                }
            });
    },
    updateCustomer: () => {
        console.log(Customers.newCustomer);
    },
};

export default Customers;
