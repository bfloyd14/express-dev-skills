import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const skillSchema = new Schema({
  strength: String,
  have: Boolean,
})

const Skill = mongoose.model('Skill', skillSchema)

export{
  Skill
}