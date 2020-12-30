class Authentication {
    registerSuccessfulLogin(username, password){
        sessionStorage.setItem("authenticatedUser", username);
    }

    logout(username) {
        sessionStorage.removeItem("authenticatedUser", username)
    }

    checkLoggedIn() {
        let user = sessionStorage.getItem("authenticatedUser");
        if (user === null) 
            return false;
        return true;
    }
}

export default new Authentication();