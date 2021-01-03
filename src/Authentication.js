class Authentication {
    registerSuccessfulLogin(username, password){
        sessionStorage.setItem("authenticatedUser", username);
    }

    logout(username) {
        sessionStorage.removeItem("authenticatedUser", username)
    }

    getLoggedInUsername() {
        let user = sessionStorage.getItem("authenticatedUser");
        if (user === null) 
            return "";
        return user;
    }
}

export default new Authentication();