const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagienka", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];

const prefixes = ["I think", "I have the impression", "Honestly, I think", "I'm sure", "I'm 100% sure", "I can tell you", "I know"];

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    const indexPrefix = Math.floor(Math.random() * prefixes.length);
    div.textContent = `${prefixes[indexPrefix]} that the best name for your child is ${names[indexName]}`;
}

btn.addEventListener('click', nameGenerator);