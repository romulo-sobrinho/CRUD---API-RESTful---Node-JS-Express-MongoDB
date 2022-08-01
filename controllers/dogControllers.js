const Dog = require('../model/Dog')

const addDog = async (req, res) => {
  let {breed, lifeExpectancy, weight, levelCute} = req.body
  
  const dog = {
    breed, lifeExpectancy, weight, levelCute
  }
  
  try {
    await Dog.create(dog)
    res.status(201).json({message: 'Dog criado com sucesso!'})
  } catch (error) {
    res.status(500).json({error: error})
  }
}

module.exports = {addDog}




// const showDogs = (req, res) => {
  //   console.log("Método GET funcionando")
//   res.json(dogs.showDogs())
// }

// const updateDog = (req, res) => {
  //   let {id, breed, life, weight, levelCute} = req.body

//   dogs.updateDog(id, breed, life, weight, levelCute)

//   console.log("Método PUT funcionando")
//   res.send("Doguinho atualizado")
// }

// const deleteDog = (req, res) => {
//   let {id} = req.body
//   dogs.deleteDog(id)
//   console.log("Método DELETE funcionando")
//   res.send("Doguinho deletado")
// }
