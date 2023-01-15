import m from "mithril";

const Auth = {
    user: {},
    isAuthenticated: false,
    register: () => {
        console.log("Register", Auth.user);
    },
    login: () => {
        console.log("login", Auth.user);
    },
    loginWithGithub: () => {
        console.log("Github");
    },
    loginWithGoogle: () => {
        console.log("Google");
    },
};

export default Auth;
