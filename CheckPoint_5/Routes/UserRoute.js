var {getAllUsers,AddUser,UpdateUser,DeleteUser}= require('../Controllers/UserController')

function init(router){
    router.route('/Users').get(getAllUsers) //get all users
    router.route('/Users').post(AddUser) //add a user to the db
    router.route('/Users/:id').put(UpdateUser) //update by id
    router.route('/Users/:id').delete(DeleteUser) //delete by id
}
module.exports.init=init