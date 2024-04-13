import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/users
router.get('/', skillsCtrl.index )

// Get localhost:3000/new
router.get('/new', skillsCtrl.new)

// Get localhost:3000/skills/:skillId
router.get('/:skillId', skillsCtrl.show)

// Get localhost:3000/skills/:skillId/edit
router.get('/:skillId/edit', skillsCtrl.edit)

// PUT localhost:3000/skills/:skillId
router.put('/:skillId', skillsCtrl.update)

// POST localhost:3000/skills
router.post('/', skillsCtrl.create)

// DELETE localhost:3000/skills/:skillId
router.delete('/:skillId', skillsCtrl.delete)


export { router }
