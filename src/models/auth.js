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
        roleId: 1,
    },
    token: "",
    isAuthenticated: false,
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
        window.location.href = `${Auth.url}/auth/github2`;
    },
    loginWithGoogle: () => {
        window.location.href = `${Auth.url}/auth/google2`;
    },
    checkAuth: () => {
        return m
            .request({
                method: "GET",
                url: `${Auth.url}/auth/success`,
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            .then((response) => {
                if (response.status === 200 && response.user) {
                    Auth.user.id = response.user.id;
                    Auth.user.firstName = response.user.first_name;
                    Auth.user.lastName = response.user.last_name;
                    Auth.user.username = response.user.username;
                    Auth.user.email = response.user.email;
                    Auth.user.phone = response.user.phone;
                    Auth.user.role = response.user.role;
                    Auth.user.roleId = response.user.role_id;
                    Auth.isAuthenticated = true;

                    m.route.set("/");
                }
            });
    },
    logout: () => {
        Auth.isAuthenticated = false;
        Auth.user = {};
        Auth.token = "";

        return m.route.set("/logga-in");
    },
};

export default Auth;
