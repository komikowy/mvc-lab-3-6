const User = require("../models/User");

const getSetUserSession = (request, response) => {
    const users = User.getAll();
    response.render("set-user-session", { title: "Set User Session", users });
};

const setUserSession = (request, response) => {
    const userId = request.body.userId;
    request.session.userId = userId;
    response.redirect("/");
};

module.exports = { getSetUserSession, setUserSession };
