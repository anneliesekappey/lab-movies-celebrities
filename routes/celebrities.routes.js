import { Router } from 'express'
import Celebrity from '../models/Celebrity.model.js'

const router = Router()

router.get('/celebrities/create', async (req, res, next) => {
  const { celebrityId } = req.params
  try {
    const allCelebritiesFromDb = await Celebrity.find(celebrityId)
    console.log('Retrieved celebrities from DB', allCelebritiesFromDb)
    res.render('celebrities/new-celebrity.hbs', {
      celebrities: allCelebritiesFromDb,
    })
  } catch (error) {
    next(error)
  }
})

router.post('/celebrities/create', (req, res, next) => {
  console.log(req.body)
  const { name, occupation, catchPhrase } = req.body

  Celebrity.create({ name, occupation, catchPhrase }).then((celebrityFromDb) =>
    console.log(`New celebrity created: ${celebrityFromDb.name}.`)
  )
})

export default router
