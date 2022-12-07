import { Schema, model } from 'mongoose'

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [{ type: Schema.Types.ObjectID, ref: 'Celebrity' }],
})

export default model('Movie', movieSchema)
