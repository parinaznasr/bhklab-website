const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const login = async(req, res) => {
    res.json({mssg: 'login'})
    console.log("login", res, req)
}

const logout = async(req, res) => {
    res.json({mssg: 'log out'});
    console.log("logout", res, req)
}


module.exports = {
    login,
    logout
};
