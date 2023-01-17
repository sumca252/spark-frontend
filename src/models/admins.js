import m from "mithril";

const Admins = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,
    allAdmins: [],
    getAllAdmins: () => {
        const query = `
            {
                getAllAdmins
                {
                    id
                    first_name
                    last_name
                    username
                    email
                    phone
                    role
                }
            }
          `;

        m.request({
            method: "POST",
            url: `${Admins.url}/graphql`,
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                query: query,
            },
        }).then((response) => {
            console.log(response.data.getAllAdmins);
            Admins.allAdmins = response.data.getAllAdmins;
        });
    },
};

export default Admins;
