import m from "mithril";

import Auth from "./auth.js";

const User = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,
    user: {},
    updateUser: () => {
        console.log(Auth.user);
        const mutation = `
        mutation {
            updateUserById(
                id: "${Auth.user.id}",
                first_name: "${Auth.user.firstName}",
                last_name: "${Auth.user.lastName}",
                username: "${Auth.user.username}",
                password: "${Auth.user.password}"
                email: "${Auth.user.email}",
                phone: "${Auth.user.phone}",
                role_id: "${Auth.user.roleId}"
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
                if (result.data) {
                    m.route.set("/admin");
                }
            });
    },
};

export default User;
