
async function getJson() {
    var data = await fetch("http://127.0.0.1:5500/data.json");
    return data.json();
}

getJson().then((data) => {

    // data.sort((a, b) => 0.5 - Math.random());

    for (i = 0; i < 1; i++) {


        console.log("data", i);
        //information utiles
        console.log("recup data", data);
        var choix = data[i].choix;
        var quest = data[i].question;
        var id = data[i].id;
        var reponse = data[i].reponse;
        var explication = data[i].explication;
        console.log("recuperer id", id);
        var reponse = data[i].reponse;
        // var input = document.getElementById('input-radio');
        var scoreElmnt = document.getElementById('score');
        var restantElmnt = document.getElementById('restant');
        var btn = document.getElementById('btn');
        // btn.addEventListener('click', debuter);
        var souris = document.getElementById('btn');

        var section = `
        <section>
        <form>
        <h2 class="asw">${quest}</h2>
        <div class="input-radio">
        <div >
        <input type="radio" class="choix1" name="choix" value=${choix[i]} checked >
        <label for="choix1">${choix[0]} </label>
        </div>
        <span class="explication0"></span>
        <div>
        <input type="radio" class="choix2" name="choix" value=${choix[i]}  checked>
        <label for="choix2" >${choix[1]}</label>
        </div>
        <span class="explication1"></span>
        <div>
        <input type="radio" class="choix3" name="choix" value=${choix[i]} checked>
        <label for="choix3" >${choix[2]}</label>
        </div>
        <span class="explication2"></span>
        <div>
        <input type="radio" class="choix4" name="choix" value=${choix[i]}  checked>
        <label for="choix4" >${choix[3]}</label>
        </div>
        <span class="explication3"></span>
        </div>
        </form>
        </section>
        
        `
        var infoElmnt = document.getElementById('info');
        infoElmnt.innerHTML += section;


    }
    //condition de victoire
    const conditionDeVictoire = choix[
        [0, 1, 2, 3]
    ]
    console.table([0, 1, 2, 3])
    // messages

    const gagne = () => `le joueur ${choix[i]} a gagner `
    const perdu = () => `le joueur a perdu`
    console.log(perdu());



     ) {
        
     }

    // document.querySelectorAll('#input-radio').forEach(input => input.addEventListener("click", gestionClicInput))


    function gestionClicInput() {
const indexInput= parseInt(this.choix)
console.log(indexInput);
    }


    souris.addEventListener("mouseover", function handleMouseOver() {
        souris.style.color = "green";
        souris.style.color = "red";

        console.log("btn", souris);



        


    });

});

var input = document.querySelectorAll('.input-radio')
input.forEach(input => {
    input.addEventListener('click', (gestionClicInput))

    
    function gestionClicInput() {
        console.log(this);
    }
});

   