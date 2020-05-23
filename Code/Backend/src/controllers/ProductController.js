const mongoose = require('mongoose')
const Product = mongoose.model('Product');


module.exports = {
    async index(req, res) {
        const { page = 1} = req.query;
        const products = await Product.paginate({}, { page, limit: 10 })

        return res.status(200).json(products);
    },

    async show(req, res) {
        try {
            const product = await Product.findById(req.params.id)

            return res.json(product)
        }
        catch (e) {
            res.status(500).json(e)
        }
    },

    async store(req, res) {
        const product = await Product.create(req.body)

        return res.status(200).json(product)
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.status(200).json(product)
    },
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id)
        return res.send()
    }





}




