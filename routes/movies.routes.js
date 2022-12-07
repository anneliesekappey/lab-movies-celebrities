import { Router } from 'express'
import Movie from '../models/Movie.model.js'

const router = Router()

router.get('/movies/create', async (req, res, next) => {
  const { movieId } = req.params
  try {
    const allMoviesFromDb = await Movie.find(movieId)
    console.log('Retrieved movies from DB', allMoviesFromDb)
    res.render('movies/new-movie.hbs', {
      movies: allMoviesFromDb,
    })
  } catch (error) {
    next(error)
  }
})

router.post('/movies/create', (req, res, next) => {
  console.log(req.body)
  const { title, genre, plot, cast } = req.body

  Movie.create({ title, genre, plot, cast }).then((movieFromDb) =>
    console.log(`New movie created: ${movieFromDb.title}.`)
  )
})

export default router
