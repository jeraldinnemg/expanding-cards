//Select the element

const panels= document.querySelectorAll('.panel'); 

// Loop for each picture and a click event
panels.forEach(panel => {   
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})

// Remove active classes by each picture

function removeActiveClasses() { //3. Declaración de la función remove
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}