// Selecciona el elemento donde se mostrará el texto que se está escribiendo
const typingText = document.querySelector('.typing-text span');

// Array de textos que se mostrarán de forma dinámica
const textArray = ['Programador', 'Desarrollador Web', 'Diseñador Gráfico'];
let textIndex = 0; // Índice del texto actual que se está mostrando
let charIndex = 0; // Índice del carácter actual que se está mostrando

// Función para escribir el texto
function type() {
    if (charIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(charIndex); // Agregar carácter al texto
        charIndex++; // Avanzar al siguiente carácter
        setTimeout(type, 100); // Llamar de nuevo a la función después de un corto retraso
    } else {
        setTimeout(deleteText, 1000); // Esperar un segundo antes de borrar el texto
    }
}

// Función para borrar el texto
function deleteText() {
    if (charIndex > 0) {
        typingText.textContent = textArray[textIndex].substring(0, charIndex - 1); // Borrar el último carácter
        charIndex--; // Retroceder al anterior
        setTimeout(deleteText, 50); // Llamar de nuevo a la función después de un corto retraso
    } else {
        textIndex = (textIndex + 1) % textArray.length; // Cambiar al siguiente texto en el array
        setTimeout(type, 500); // Llamar a la función de escribir después de medio segundo
    }
}

// Inicia el efecto de escritura una vez que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    type();
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            const targetId = link.getAttribute('href'); // Obtener el ID de la sección
            const targetElement = document.querySelector(targetId); // Seleccionar la sección
            
            // Calcular la posición del objetivo y desplazar la vista
            const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 80; // Ajusta -80 según sea necesario
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Desplazamiento suave
            });
        });
    });

    type(); // Llama a la función de tipeo
});
