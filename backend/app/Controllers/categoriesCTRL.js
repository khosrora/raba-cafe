const Category = require('../model/CategoryMODEL');



const categoriesCTRL = {
    createCategories: async (req, res) => {
        try {
            const { name } = req.body;

            // ! category find
            const category = await Category.findOne({ name });
            if (category) return res.status(400).json({ msg: "این دسته بندی قبلا ثبت شده است" })

            // ! Create category
            const newCategory = await Category({
                name
            })
            // !save Categoty
            await newCategory.save();

            res.json({ msg: "دسته بندی مورد نظر ساخته شد" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getCategories: async (req, res) => {
        try {
            // ! Get categories
            const categories = await Category.find();

            res.json({ categories })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    editCategory: async (req, res) => {
        try {
            const { name } = req.body;
            // ! GET ID AND EDIT
            await Category.findByIdAndUpdate({ _id: req.params.id }, { name })
            // !SEND MESSAGE
            res.json({ msg: "دسته بندی مورد نظر ویرایش شد" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const id = req.params.id;
            //! DELETE CATEGORY
            await Category.findByIdAndRemove(id);
            // !SEND MESSAGE
            res.json({ msg: "دسته بندی مورد نظر حذف شد" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}




module.exports = categoriesCTRL;