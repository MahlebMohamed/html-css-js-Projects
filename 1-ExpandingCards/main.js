const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', (e) => {
        removeActiveClasses();
        e.target.classList.add('active');
    })
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}


// console.log({
//     parent: app.parentElement,
//     prevSiter: app.previousElementSibling,
//     nextSiter: app.nextElementSibling,
//     firstChild: app.firstElementChild,  renvoie le premier nœud enfant
//     lastChild: app.lastElementChild,  renvoie le dernier nœud enfant
//     children: app.children, toutes les enfants
// });