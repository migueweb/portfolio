export const showSkills = (skills) => {
    let skillsParent = document.getElementById('skillsParent')
    skillsParent.innerHTML = ""
    for (const skill of skills) {

        let card = document.createElement('div');

        card.classList.add('col-12', 'col-md-4', 'col-lg-2')
        
        let skillsNames = ""

        for (const skillName of skill.skills) {
            let skillComponent = `<li class="list-group-item">${skillName}</li>`
            skillsNames = skillsNames + skillComponent 
        }

        card.innerHTML = `
            <article class="card skills-card">
                <div class="card-header fw-semibold">
                    ${skill.title}
                </div>
                <ul class="list-group list-group-flush">
                    ${skillsNames}
                </ul>
            </article>
          `
        skillsParent.appendChild(card);
    }
}