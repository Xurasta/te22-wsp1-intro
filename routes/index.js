import express from 'express'

const router = express.Router()

router.get("/test", (req, res) => {
    res.send("Hello World Everybody")
});

//Gamla routes
router.get('/', (req, res) => {
    console.log(req.query)
    const name = req.query.name
    console.log(name)
    res.render("index.njk", {
        message: `Hello World! My name is ${name}`,
        title: "Nunjucks hello world",
        innehåll: "Välkommen till min hemsida.",
    })
})

router.get('/watch', (req, res) => {
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

router.get('/om', (req,res) => {
    res.render("om.njk", {
        message: "Bababoiii",
        innehåll: "Det är bababoiii",
    })
})

router.get("/ytub", (req, res) => {
    const ID = req.query.v 
    console.log(ID)
    res.render('ytub.njk', {
        title: 'Youtube',
        youtubeID: ID,
    })
})

router.get('/Teapot', (req, res) => {
    console.log(req)
    res.status(418).sendFile("status code")
    console.log(res)
})

router.get("/readme", (req,res) => {
    res.render("readme.njk", {
        message: "LÄS MIG",
        innehåll: "NUUUUUUUUUUUUUUUUUUUUUUUUUUUUU",
    })
})

export default router