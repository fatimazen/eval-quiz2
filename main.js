async function getJson() {
    var data = await fetch("http://127.0.0.1:5500/data.json");
    return data.json();
}

getJson().then((data) => {
    console.log(data);

    var quizElmt = document.getElementById('quiz')

    var radio2 = document.getElementById("input-radio2 ")
    var radio3 = document.getElementById('input-radio3 ')
    var radio4 = document.getElementById('input-radio4 ')

    var choixselection = [1, 2, 3, 4]
    var joueur = "name"
    var score = "votre score est de:"
    var jeuActif = true;



    for (i = 0; i < 1; i++) {

        console.log("data", i);

        //information utiles
        console.log("recup data", data);

        var choix = data[i].choix;
        var question = data[i].question;
        var id = data[i].id;
        var reponse = data[i].reponse;
        console.log(reponse);
        var explication = data[i].explication;
        console.log("recuperer id", id);
        var reponse = data[i].reponse;

        var section = `
        <section>
        <div class="container-quiz">


        <div class="radio">
        <h2 class="asw">${question}</h2>
        <form>
        <div >
        <input type="radio"${choix[0]} name="choix" value="${reponse}" class="input-radio"data-index="0"  >
        <label for="input-radio" class="input">${choix[0]}</label label="label">
                <span></span>
            
            <span class="explication"></span>
        </div>

        <div >

        <input type="radio"${choix[1]} name="choix" value="${reponse}" class="input-radio" data-index="1">
        <label for="input-radio" >${choix[1]}</label class="label">
                <span></span>
           
            <span class="explication1"></span>
        </div>

        <div >
        <input type="radio"${choix[2]} name="choix" value="${reponse}" class="input-radio "data-index="2" >
        <label for="input-radio" >${choix[2]}</label class="label">
                <span></span>
            
            <span class="explication2"></span>
        </div>

        <div >
        <input type="radio" ${choix[3]}name="choix" value="${reponse}" class="input-radio"data-index="3" >
        <label for="input-radio" >${choix[3]}</label class="label">
                <span></span>
            
            <span class="explication3"></span>
        </div>
        </form>
         </div>
    
        </section>
        `
        var infoElmnt = document.getElementById('info');
        infoElmnt.innerHTML += section;

        var input = document.querySelectorAll('.input-radio')
        input.forEach(input => {
            input.addEventListener('click', (gestionClicInput))
            // console.log(input);
            var button = document.getElementById('btn');

            function gestionClicInput() {
                const indexInput = parseInt(this.dataset.index)
                if (choixselection[indexInput] == reponse || choixselection[indexInput] === jeuActif) {

                    console.log('bonne reponse');
                } else {
                    console.log('mauvaise reponse');
                }

            }

        })
        var button = document.getElementById('suivant');
        button.addEventListener('click', () => suivant());
        function suivant() {
            console.log(button);
         const melange= data.sort((a, b) => 0.5 - Math.random());
         
         console.log(question);          
        }



    }


});