window.addEventListener('load', function () {


    const h1 = this.document.querySelector('h1');
    const img__1 = this.document.querySelectorAll('img')[0];
    const img__2 = this.document.querySelectorAll('img')[1];
    const strong__1 = this.document.querySelectorAll('strong')[0];
    const strong__2 = this.document.querySelectorAll('strong')[1];
    const button = this.document.querySelector('button');
    const stars_Block_1 = this.document.querySelector('.stars_Block_1-parants');
    const stars_Block_2 = this.document.querySelector('.stars_Block_2-parants');



    function refreshGame() {
        stars_Block_1.classList.remove('displayBloke');
        stars_Block_2.classList.remove('displayBloke');
        var randomNumber__1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber__2 = Math.floor(Math.random() * 6) + 1;
        const pathImg__1 = `images/dice${randomNumber__1}.png`;
        const pathImg__2 = `images/dice${randomNumber__2}.png`;
        img__1.setAttribute('src', pathImg__1);
        img__2.setAttribute('src', pathImg__2);
        strong__1.textContent = randomNumber__1;
        strong__2.textContent = randomNumber__2;

        if (randomNumber__1 > randomNumber__2) {
            h1.textContent = 'Play 1 Wins';
        } else if (randomNumber__1 < randomNumber__2) {
            h1.textContent = 'Play 2 Wins';
        } else {
            h1.textContent = 'You Draw!';
            stars_Block_1.classList.add('displayBloke');
            stars_Block_2.classList.add('displayBloke');

        }

    };


    button.addEventListener('click', refreshGame);



    console.log(h1);
    console.log(strong__1);
    console.log(strong__2);
    // console.log(pathImg__1);
    // console.log(pathImg__2);
    // console.log(img__1);
    // console.log(img__2);
    // console.log(button);



})