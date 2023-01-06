// Enable boostrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


import { PROJECTS } from './data/projects.js'
import { SKILLS } from './data/skills.js'
import { showProjects } from './showProjects.js'
import { showSkills } from './showSkills.js'

showProjects(PROJECTS)
showSkills(SKILLS)
