import { Schema, model } from 'mongoose'

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
})

export default model('Celebrity', celebritySchema)
