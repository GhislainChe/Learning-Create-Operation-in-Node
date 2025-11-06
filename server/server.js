const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

let categories = [
    { id: 1, name: 'Work' },
    { id: 2, name: 'Personal' },
    { id: 3, name: 'Learning' }
];

app.post('/api/category', (req, res) => {
    const newCategory = res.body.name

    if (!newCategory) {
        return res.status(400).json({error: 'empty category fiels'})
    }

    const updateCategory = {
        id: categories.length + 1,
        name: newCategory
    }

    categories.push(updateCategory)
    res.status(200).json(newCategory)

})

app.listen(PORT, () => {
    console.log(`hello the serve is running on port ${PORT}`)
})