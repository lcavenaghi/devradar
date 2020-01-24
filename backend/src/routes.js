const {Router} = require('express');
const axios = require('axios');
const Dev = require('./models/dev')

const routes = Router();

routes.post('/devs', async (request, response) => {

    const {github_username, techs, latitude, longitude} = request.body;

    const responseGithub = await axios.get('https://api.github.com/users/' + github_username);     
    const { name = login, avatar_url, bio} = responseGithub.data;
    const techsArray = techs.split(",").map(tech => tech.trim());

    const location = {
        type : 'Point',
        coordinates : [longitude, latitude],
    }

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
    });
    
    return response.json({message: dev});

})

module.exports = routes;