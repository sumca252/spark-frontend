import m from "mithril";

const Auth = {
    url: process.env.DEV_API_BASE_URL
        ? process.env.DEV_API_BASE_URL
        : process.env.PROD_API_BASE_URL,
    user: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        role: "",
        roleId: "",
    },
    isAuthenticated: true,
    register: () => {
        return m
            .request({
                method: "POST",
                url: `${Auth.url}/auth/register`,
                body: {
                    firstName: Auth.user.firstName,
                    lastName: Auth.user.lastName,
                    username: Auth.user.username,
                    email: Auth.user.email,
                    password: Auth.user.password,
                    phone: Auth.user.phone,
                    roleId: Auth.user.roleId,
                },
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    console.log(response);
                    m.route.set("/login");
                }
            });
    },
    login: () => {
        return m
            .request({
                method: "POST",
                url: `${Auth.url}/auth/login`,
                body: {
                    email: Auth.user.email,
                    password: Auth.user.password,
                },
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    Auth.email = response.user.email;
                    Auth.userId = response.user.id;
                    Auth.isAuthenticated = true;

                    m.route.set("/");
                }
            });
    },
    loginWithGithub: () => {
        console.log("Github");
    },
    loginWithGoogle: () => {
        window.location.href = `${Auth.url}/auth/google2`;
    },
    checkAuth: async () => {
        const res = await m.request({
            method: "GET",
            url: `${Auth.url}/auth/success`,
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });

        if (res.status === 200) {
            Auth.isAuthenticated = true;
            Auth.user.firstName = res.user.first_name;
            Auth.user.lastName = res.user.last_name;
            Auth.user.username = res.user.username;
            Auth.user.email = res.user.email;
            Auth.user.phone = res.user.phone;
            Auth.user.role = res.user.role;
            Auth.user.roleId = res.user.role_id;
            m.route.set("/");
        }
    },
};

export default Auth;
