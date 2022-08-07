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
      res.status(422).json({message: 'Dog não encontrado'})
      return
    }

    res.status(200).json(dog)
  }catch(error) {
    res.status(500).json({message: 'Lista de dogs não localizada', error: error})
  }
}

const addDog = async (req, res) => {
  const {breed, lifeExpectancy, weight, levelCute} = req.body
  
  if(!breed || !lifeExpectancy || !weight || !levelCute) {
    res.status(422).json({message: 'Os dados breed, life expectancy, weight, levelCute são obrigatórios!'})
    return
  }

  if(await Dog.findOne({breed})) {
    res.status(422).json({message: 'Dog não pode ser cadastrado, já existe essa raça'})
    return
  }

  const dog = {
    breed, lifeExpectancy, weight, levelCute
  }
  
  try {
    await Dog.create(dog)
    res.status(201).json({message: 'Dog cadastrado com sucesso!'})
  } catch (error) {
    res.status(500).json({message: 'Dog não cadastrado', error: error})
  }
}

const updateDog = async (req, res) => {
  const id = req.params.id
  const {lifeExpectancy, weight, levelCute} = req.body
  try {
    const updateDog = await Dog.updateOne({_id: id}, {lifeExpectancy, weight, levelCute})
    if(updateDog.matchedCount === 0) {
      res.status(422).json({message: 'Dog não encontrado'})
      return
    }
    res.status(200).json({message: 'Dog atualizado com sucesso!'})
  } catch (error) {
    res.status(500).json({message: 'Dog não atualizado'})
  }
}

const deleteDog = async (req, res) => {
  let id = req.params.id

  const dog = Dog.findOne({_id: id})

  if (!dog) {
    res.status(422).json({message: 'Dog não encontrado'})
    return
  } 

  try{
    await Dog.deleteOne({_id: id})
    res.status(200).json({message: 'Registro do Dog deletado com sucesso!'})
  }catch (error) {
    res.status(500).json({message: 'Registro do Dog não deletado'})
  }
}

module.exports = {showDogs, showSpecificDog, addDog, updateDog, deleteDog}







