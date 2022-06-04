const {response,request} = require('express');
const fetch= require('node-fetch') ;




const getPokemon = async(req=request, res=response) => {
    const {name,imageType="front_default"} = req.query;

    if(imageType!=="front_default" && imageType!=="front_shiny"){
        return res.status(400).json({
            msg:'Wrong Image Type'
        });
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data= await response.json();
    const pokeName=data.name;
    if(imageType==="front_default"){
        const image=data.sprites.front_default;
        return res.status(200).json({
            name:pokeName,
            image
        });
    }else{
        const image=data.sprites.front_shiny;
        return res.status(200).json({
            name:pokeName,
            image
        });

    }
}


module.exports={
    getPokemon
 }