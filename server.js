import express from 'express'
import nunjucks from 'nunjucks'

const app = express()
nunjucks.configure("views", {
    autoescape: true,
    express: app,
})
app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log(req.query)
    const name = req.query.name
    console.log(name)
    res.render("index.njk", {
        message: `Hello World! My name is ${name}`,
        title: "Nunjucks hello world",
        innehåll: "Välkommen till min hemsida.",
    })
})

app.get('/watch', (req, res) => {
    const movieID = req.query.v
    console.log(movieID)

    const movies = {
        'tt0111161': {
            title: 'Big World',
            year: 1994,
        }
    }

    const movie = movies[movieID]
    console.log(movie)

    res.render("watch.njk", {
        title: 'Watch',
        movie: movie,
    })
    
    // res.json(movie)
})

app.get('/om', (req,res) => {
    res.render("om.njk", {
        message: "Bababoiii",
        innehåll: "Det är bababoiii",
    })
})

app.get("/ytub", (req, res) => {
    const ID = req.query.v 
    console.log(ID)
    res.render('ytub.njk', {
        title: 'Youtube',
        youtubeID: ID,
    })
})

app.get('/Teapot', (req, res) => {
    console.log(req)
    res.status(418).sendFile("status code")
    console.log(res)
})

app.get("/readme", (req,res) => {
    res.render("readme.njk", {
        message: "LÄS MIG",
        innehåll: "NUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",
    })
})

//const PORT = process.env.PORT || 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})
