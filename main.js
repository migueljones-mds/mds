const links = document.querySelectorAll("a");

        links.forEach((link) => {link.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "hsl(" + randomNumber(255) + " ,85% ,40%)";
            console.log("Over");
            });

 

            link.addEventListener('mouseout', (e) => {
            e.target.removeAttribute('style');
            console.log("Out");

            });

 

        });

 

        function randomNumber(max) {
        return Math.floor(Math.random() * max);

        }