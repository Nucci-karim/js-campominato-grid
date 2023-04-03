const btnGioca = document.getElementById('gioca')
const selectDifficolta = document.getElementById('difficolta');
const htmlMain = document.querySelector('main')
const r = document.querySelector(':root');


btnGioca.addEventListener('click', function(){
    campoMinato();
})

// funzioni

function campoMinato(){
    // richiamo valore del select 
    let valoreDifficolta = parseInt(selectDifficolta.value)
    variabileDifficolta(valoreDifficolta)

    // refresh del main 
    htmlMain.innerHTML = ''

    // generazione della griglia 
    let divGriglia = document.createElement('div')

    // con aggiunta classe
    divGriglia.classList.add('griglia')

    // inserimento dopo il click 
    htmlMain.append(divGriglia)




    // generare le celle 
    for (let i = 1; i <= valoreDifficolta; i++ ){
        let divCella = document.createElement('div')
        divCella.classList.add('item')

        // numero nella cella 
        divCella.innerText = i

        document.querySelector('.griglia').append(divCella)

        divCella.addEventListener('click', function(){
            console.log(this)
            this.classList.add('clicked')
        })
    }
}

function variabileDifficolta(x) {
    x = Math.sqrt(x)

    // aggiunta della variabile del --numeocelle per selezionare la difficolta con il select 
    r.style.setProperty('--numCelle', x);
}