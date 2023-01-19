import m from "mithril";

import Auth from "./models/auth.js";

const User = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,
    user: {},
    updateUser: () => {
        const mutation = `
            mutation {
                updateUser(
                    id: "${Auth.user.id}",
                    firstName: "${Auth.user.firstName}",
                    lastName: "${Auth.user.lastName}",
                    password: "${Auth.user.password}"
                    email: "${Auth.user.email}",
                    phone: "${Auth.user.phone}",
                    password: "${Auth.user.password}"
                ) {
                    id
                }
            }
        `;

        return m
            .request({
                method: "POST",
                url: `${Auth.url}/graphql`,
                body: {
                    query: mutation,
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

export default User;
