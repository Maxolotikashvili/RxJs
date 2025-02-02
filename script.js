let isDarkModeOn = JSON.parse(localStorage.getItem('darkMode')) || false;

const domElements = {
    stylesheet: document.getElementById('stylesheet'),
    body: document.getElementsByTagName('body')[0],
    h1: document.getElementsByTagName('h1')[0],
    h2List: Array.from(document.getElementsByTagName('h2')),
    paragrapsList: Array.from(document.getElementsByTagName('p')),
    liLists: Array.from(document.getElementsByTagName('li')),
    newWordsList: Array.from(document.querySelectorAll('.new-word')),
    theoryWordsList: Array.from(document.querySelectorAll('.theory-word'))
}

lightModeColors = {
    primary: '#ffffff',
    secondary: '#79c0ff'
}

darkModeColors = {
    primary: '#202020',
    secondary: '#bb1166'
}

function initializeHiglightJs() {
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    });
}

function handleDarkMode() {
    isDarkModeOn = !isDarkModeOn;
    localStorage.setItem('darkMode', JSON.stringify(isDarkModeOn));

    applyStyles()
}

function applyStyles() {
    document.querySelector('input[type="checkbox"]').checked = isDarkModeOn;

    if (!isDarkModeOn) {
        domElements.stylesheet.href = 'highlightjs/highlightjs-theme-light.css'
        domElements.body.style.background = lightModeColors.primary;
        domElements.h1.style.color = lightModeColors.secondary;
        domElements.h2List.map((h2) => h2.style.color = darkModeColors.primary);
        domElements.paragrapsList.map((p) => p.style.color = darkModeColors.primary);
        domElements.liLists.map((li) => li.style.color = darkModeColors.primary);
        domElements.newWordsList.map((newWord) => newWord.style.color = lightModeColors.secondary)
        domElements.theoryWordsList.map((theoryWord) => theoryWord.style.color = lightModeColors.secondary);
    } else {
        domElements.stylesheet.href = 'highlightjs/highlightjs-theme-dark.css';
        domElements.body.style.background = darkModeColors.primary;
        domElements.h1.style.color = darkModeColors.secondary;
        domElements.h2List.map((h2) => h2.style.color = lightModeColors.primary);
        domElements.paragrapsList.map((p) => p.style.color = lightModeColors.primary);
        domElements.liLists.map((li) => li.style.color = lightModeColors.primary);
        domElements.newWordsList.map((newWord) => newWord.style.color = darkModeColors.secondary)
        domElements.theoryWordsList.map((theoryWord) => theoryWord.style.color = darkModeColors.secondary);
    }

}

initializeHiglightJs();
applyStyles();