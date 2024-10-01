import express, { query } from 'express'

const router = express.Router()

router.get('/button', (req, res) => {
    let sum
    let num1 = parseInt(req.query.V1)
    let num2 = parseInt(req.query.V2)
    let button = req.query.button
    if (button==="add") {
        sum = num1 + num2
    } else if (button==="multiply") {
        sum = num1 * num2
    } else if (button==="subtract") {
        sum = num1 - num2
    } else if (button==="divide") {
        sum = num1 / num2
    }
    res.render("calcbutton.njk", {
        title: "Calculator",
        number1: num1,
        number2: num2,
        sum: sum,
    })
});

router.get('/dropdown', (req, res) => {
    let sum
    let num1 = parseInt(req.query.V1)
    let num2 = parseInt(req.query.V2)
    let select = req.query.select
    if (select==="add") {
        sum = num1 + num2
    } else if (select==="multiply") {
        sum = num1 * num2
    } else if (select==="subtract") {
        sum = num1 - num2
    } else if (select==="divide") {
        sum = num1 / num2
    }
    res.render("calcdropdown.njk", {
        title: "Calculator",
        number1: num1,
        number2: num2,
        sum: sum,
    })
})

export default router