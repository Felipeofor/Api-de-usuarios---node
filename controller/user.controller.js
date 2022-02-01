var userService = require('../services/user.service');

class UserController{
    async GetAllUsers(req, res){
        await res.json(userService.GetAllUsers());
    }

    async GetUserById(req, res){
        await res.json(userService.GetUserById(req.params.id));
    }

    async CreateUser(req, res){
        await res.json(userService.CreateUser(req.body));
    }
    async UpdateUserById(req, res){
        await res.json(userService.UpdateUserById(req.params.id, req.body));
    }
    async DeleteUserById(req, res){
        await res.json(userService.DeleteUserById(req.params))
    }
}

module.exports = new UserController;