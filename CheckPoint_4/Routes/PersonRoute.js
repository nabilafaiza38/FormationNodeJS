var {getAllPersons,AddPerson,AddPersons,getOneByFood,getById,AddBurger,updatePersonAge,DeletePersonById,DeletePersonByName,queryHelper}= require('../Controllers/PersonController')

function init(router){
    router.route('/persons').get(getAllPersons)
    router.route('/AddPerson').post(AddPerson) //create one
    router.route('/AddPersons').post(AddPersons) //create many
    router.route('/getOneByFood/:food').get(getOneByFood) 
    router.route('/getById/:id').get(getById)
    router.route('/AddBurger/:id').get(AddBurger)
    router.route('/updatePersonAge/:name').get(updatePersonAge)
    router.route('/DeletePersonById/:id').get(DeletePersonById)
    router.route('/DeletePersonByName/:name').get(DeletePersonByName)
    router.route('/queryHelper').get(queryHelper)


}
module.exports.init=init