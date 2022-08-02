const Dog = require('../model/Dog')


const showDogs = async (req, res) => {
  try{
    const dogs = await Dog.find()
    res.status(200).json(dogs)
  }catch(error) {
    res.status(500).json({message: error})
  }
}

const showSpecificDog = async (req, res) => {
  const breed = req.params.breed

  try{
    const dog = await Dog.findOne({breed})

    if(!dog) {
      res.status(422).json({message: "Dog não encontrado"})
      return
    }

    res.status(200).json(dog)
  }catch(error) {
    res.status(500).json({message: error})
  }
}

const addDog = async (req, res) => {
  const {breed, lifeExpectancy, weight, levelCute} = req.body
  
  if(!breed || !lifeExpectancy || !weight || !levelCute) {
    res.status(422).json({message: 'Os dados breed, life expectancy, weight, levelCute são obrigatórios!'})
    return
  }

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

module.exports = {showDogs, showSpecificDog, addDog}





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
