import { Skill } from "../models/skill.js"


function index(req, res) {
Skill.find({})
.then(skills =>{
  res.render('skills/index', {
    skills: skills
  })
})
.catch(error=>{
  console.log(error)
  res.redirect('/')
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res){
  req.body.done = false
  Skill.create(req.body)
  .then(skill => {
    res.redirect('/skills')
  })
  .catch(error =>{
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res){
  Skill.findById(req.params.skillId)
  .then(skill => {
    res.render('skills/show',{
      skill: skill
    })
  })
  .catch(error =>{
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res){
  //use model to delete a skill
  Skill.findByIdAndDelete(req.params.skillId)
  .then(skill=>{
    //redirect to skills index
    res.redirect('/skills')
  })
  .catch(error =>{
    console.log(error)
    res.redirect('/skills')
  })
}

function update(req, res){
  //handle checkboc logic
  req.body.have = !!req.body.have
  console.log(req.body)
  //find the skill by id and update
  Skill.findByIdAndUpdate(req,params.skillId, req.body, {new:true})
  .then(skill =>{
    //redirect back to show view
    res.redirect(`/skills/${req.params.skillId}`)
  })
  .catch(error =>{
    console.log(error)
    res.redirect('/skills')
  })
}

function edit(req, res){
  //find the skill and pass it to render
  Skill.findById(req.params.skillId)
  .then(skill =>{
    //render a view with a form (edit.ejs)
    res.render('skills/edit',{
      skill: skill
    })
  })
  .catch(error =>{
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  update,
  edit
}