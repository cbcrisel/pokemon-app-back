const {Router} = require('express');
const { getPokemon } = require('../controllers/pokemon');




const router=Router();



router.get('/api/v1/images/pokemons',  getPokemon);



module.exports=router;