class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }
    async check(req, res) {
        res.json('asdasdasd') 
        // http://localhost:5000/api/user/auth
        const query = req.query 
        res.json(query)

        //thats to get query params 
    }
}


module.exports = new UserController()