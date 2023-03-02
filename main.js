async function getJson() {
    var data = await fetch("http://127.0.0.1:5500/data.json");
    return data.json();
}

getJson().then((data) => {
    console.log(data);


        var choixselection = [1, 2, 3, 4]
         var joueur = "name"
        var jeuActif = true;
    

        for (i = 0; i < 3; i++) {

        console.log("data", i);

        //information utiles
        console.log("recup data", data);
        // var quizdata = data[i];
        // console.log(quizdata);
        var choix = data[i].choix;
        var question = data[i].question;
        console.log(question);
        var id = data[i].id;
        var reponse = data[i].reponse;
        console.log(reponse);
        var explication = data[i].explication;
        console.log("recuperer id", id);

        
        
        var section = `
        <section>
        <div class="container-quiz">
        

        <div class="radio">
        <h2 class="asw">${question}</h2>
        <form class reponse>
        <div class= quiz>
        <input type="radio"${choix[0]} name="choix" value="${reponse}" class="input-radio"data-index="0"  >
        <label for="input-radio" class="input">${choix[0]}</label 
        <span></span>
            
            <span class="explication"></span>
            </div>
            
        <div class=quiz >

        <input type="radio"${choix[1]} name="choix" value="${reponse}" class="input-radio" data-index="1">
        <label for="input-radio"  class="input">${choix[1]}</label >
                <span></span>
           
            <span class="explication1"></span>
        </div>
        
        <div  class=quiz>
        <input type="radio"${choix[2]} name="choix" value="${reponse}" class="input-radio "data-index="2" >
        <label for="input-radio" class="input" >${choix[2]}</label 
        <span></span>
        
            <span class="explication2"></span>
            </div>
            
            <div class=quiz>
            <input type="radio" ${choix[3]}name="choix" value="${reponse}" class="input-radio"data-index="3" >
            <label for="input-radio" class= input>${choix[3]}</label>
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
            input.addEventListener('click', (verfiGagne))
            //  
            var juste =document.getElementById('juste');
            var faux = document.getElementById('faux');
            var score = document.getElementById('score');
            var scoreJoueur = document.getElementById('scoreplayer');
             var nbrJuste=0
             var nbrFaux=0

            function verfiGagne() {
                const indexInput = parseInt(this.dataset.index)
                
                
                
                if (choixselection[indexInput] !== reponse && !jeuActif) {
                    
                    choixselection[indexInput] == jeuActif
                
                 
                }

                if (choixselection[indexInput] == reponse || choixselection[indexInput] === jeuActif) {


                    console.log('bonne reponse');
                    
                    nbrJuste += 1;
                    juste.textContent =nbrJuste;
                    
                    
                } else  {
                    
                    console.log('mauvaise reponse');
                    
                    nbrFaux += 1;
                    faux.textContent = nbrFaux;
                     
                }
                score =0
                
            }
            score.textContent = 'votre score est de ';            
                    



        })
        //
     
        var valider= document.getElementById('suivant');
        // valider.addEventListener('click',()=>suivant());
    
        
        var quest= document.querySelector('.asw');
        
        
    
    const melange = data.sort((a, b) => 0.5 - Math.random());
        







    }


});