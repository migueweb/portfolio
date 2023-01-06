export const showProjects = (projects) => {
    let projectsParent = document.getElementById('projectsParent')

    projectsParent.innerHTML = ""

    for (const project of projects) {

        let card = document.createElement('div');

        card.classList.add('col-12', 'col-md-4', 'col-lg-3')
        
        card.innerHTML = `
            <a href="${project.url}" class="card-wrapper" target="_blank">
                <article class="card project-card">
                    <img src="${project.img}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h3 class="card-title">${project.title}</h3>
                        <p class="card-technologies">${project.technologies}</p>
                        <p class="card-text">${project.description}</p>
                    </div>
                </article>
            </a>

          `
        projectsParent.appendChild(card);
    }
}
