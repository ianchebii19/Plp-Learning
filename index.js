document.addEventListener('DOMContentLoaded', function() {
    const words = document.querySelectorAll('.word');
    let index = 0;

    function rotateWords() {
        const currentWord = words[index];
        const nextWord = words[(index + 1) % words.length];

        currentWord.style.transform = 'rotateX(90deg)';
        nextWord.style.transform = 'rotateX(0deg)';

        index = (index + 1) % words.length;
    }

    setInterval(rotateWords, 2000); // Adjust the interval as needed
});
function showAbout() {
    var aboutSection = document.getElementById('about');
    aboutSection.style.display = (aboutSection.style.display === 'none' || aboutSection.style.display === '') ? 'block' : 'none';
};



