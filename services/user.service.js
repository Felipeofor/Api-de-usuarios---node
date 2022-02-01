const userData = require('../db/context');

class UserService{
    GetAllUsers(){
        return userData;
    }

    GetIndex(id){
        return userData.findIndex((data) => data.id.toString() === id.toString());
    }

    GetUserById(id){
        let index = this.GetIndex(id);
        return userData[index];
    }

    CreateUser(data){
        userData.push(data);
        return "User created successfully";
    }

    UpdateUserById(id, data){
        let index = this.GetIndex(id);
        userData[index].userName = data.userName;
        userData[index].password = data.password;
        userData[index].email = data.email;
        userData[index].createDate = data.createDate;
        userData[index].name = data.name;
        return "User updated successfully";
    }
    DeleteUserById(id){
        let index = this.GetIndex(id);
        userData.splice(index, 1);
        return "User deleted successfully";
    }
}

module.exports = new UserService();