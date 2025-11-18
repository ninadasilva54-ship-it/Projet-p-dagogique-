const courses = [
    {
        name: "UE2 — Bases moléculaires, cellulaires et tissulaires des traitements médicamenteux",
        description: "Cours imprimé - prix bientôt disponible.",
        lydia: "https://lydia-app.com/paiement-exemple" // remplace par ton lien Lydia
    }
];

function loadCourses() {
    const container = document.getElementById("courses");

    courses.forEach(course => {
        const div = document.createElement("div");
        div.classList.add("course-card");

        div.innerHTML = `
            <h2 class="course-title">${course.name}</h2>
            <p class="course-description">${course.description}</p>
            <a class="button-lydia" href="${course.lydia}" target="_blank">Commander</a>
        `;

        container.appendChild(div);
    });
}

loadCourses();
