const { response } = require('express')

// receiveng several arguments from url by using req.query;
const userGet = (req, res = response) => {
    //const query = req.query; // receiving the whole data
    const { id, name = "No name", lastname = "no lastname" } = req.query;
    res.json({
        'msg': 'get API',
        id,
        name,
        lastname
    })
}

const userPut = (req, res = response) => {
    // capturing segment params
    // we capture this value from route: /:paramName, and we assign param value into a variable
    // we use req.params for that
    const { id } = req.params;
    res.json({
        'msg': 'put API',
        id
    })
}

const userPost = (req, res = response) => {
    const body = req.body;
    res.json({
        'msg': 'post API',
        body
    })
}

const userPost201 = (req, res = response) => {
    res.status(201).json({
        'msg': 'post API code 201'
    })
}

const userDelete = (req, res = response) => {
    res.json({
        'msg': 'delete API'
    })
}

const userPatch = (req, res) => {
    res.json({
        'msg': 'patch API'
    })
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userPost201,
    userDelete,
    userPatch
}