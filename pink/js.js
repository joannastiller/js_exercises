  const btn = document.querySelector("button");
        const list = document.querySelector('ul');
        let number = 1;

        btn.addEventListener('click', function () {
            const newLi = document.createElement('li');
            list.appendChild(newLi);
            newLi.textContent = number;

            if (number % 3 == 0) {
                newLi.classList.add('pink');
            }

            number += 2;
        })