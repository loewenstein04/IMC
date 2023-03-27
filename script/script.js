const imgs = document.getElementsByTagName('img')
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
setInterval(function () {
    if (img1.classList.contains('img1')) {
        setTimeout(function () {
            img1.classList.add('img1-transition')
            setTimeout(function () {
                img1.classList.remove('img1')
                img1.classList.add('img1-0')
                img2.classList.remove('img2-0')
                img2.classList.add('img2')
                img1.classList.remove('img1-transition')
            }, 2000)
        }, 6000)
    }

    if (img2.classList.contains('img2')) {
        setTimeout(function () {
            img2.classList.add('img2-transition')
            setTimeout(function () {
                img2.classList.remove('img2')
                img2.classList.add('img2-0')
                img1.classList.remove('img1-0')
                img1.classList.add('img1')
                img2.classList.remove('img2-transition')
            }, 2000)
        }, 6000)
    }
}, 1000)

// parte do cálculo
const btn = document.getElementById('active')
const section = document.getElementById('section')
const fundoCalc = document.getElementById('fundo-calculo')
const avisoPeso = document.getElementById('aviso-peso')
const avisoAltura = document.getElementById('aviso-altura')
const btnExit = document.getElementById('exit')
const btnNext = document.getElementById('next')
const btnVoltar = document.getElementById('voltar')
const divAltura = document.getElementById('divAltura')
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const displayPeso = document.getElementById('display-peso')
const displayAltura = document.getElementById('display-altura')
const btnCalculo = document.getElementById('calcular')
const divResp = document.getElementById('resp')
const btnFechar = document.getElementById('sair')

let tituloDinamico = document.title

window.addEventListener('blur', () => {
    document.title = 'Não quer voltar?'
});

window.addEventListener('focus', () => {
    document.title = 'Obrigado por voltar'
    setTimeout(function(){
        document.title = 'IMC'
    }, 1000)
});
btn.addEventListener('click', () => {
    btn.style.scale = '.9'
    setTimeout(function () {
        btn.style.scale = '1'
        section.classList.remove('inactive')
        function active() {
            section.classList.remove('empty')
            section.classList.add('active')
        } setTimeout(active, 250)
        peso.focus()
    }, 100)
})

btnExit.addEventListener('click', () => {
    btnExit.style.scale = '.9'
    setTimeout(function () {
        section.classList.remove('active')
        section.classList.add('empty')
        btnExit.style.scale = '1'
        function saindo() {
            section.classList.add('inactive')
        } setTimeout(saindo, 250)
    }, 100)
})

btnNext.addEventListener('click', () => {
    btnNext.style.scale = '.9'
    setTimeout(function () {
        btnNext.style.scale = '1'
        if (peso.value == 0) {
            avisoPeso.textContent = 'Você não colocou um valor'
            peso.focus()
        } else if(peso.value < 0) {
            avisoPeso.textContent = 'Você colocou um valor negativo'
            peso.focus()
        } else {
            divAltura.classList.remove('margin-altura')
            divAltura.classList.add('altura')
            setTimeout(function () {
                altura.focus()
            }, 500)
        }
    }, 100)
})

btnVoltar.addEventListener('click', () => {
    btnVoltar.style.scale = '.9'
    setTimeout(function () {
        btnVoltar.style.scale = '1'
        divAltura.classList.remove('altura')
        divAltura.classList.add('margin-altura')
    }, 100)
})

btnCalculo.addEventListener('click', () => {
    btnCalculo.style.scale = '.9'
    setTimeout(function () {
        btnCalculo.style.scale = '1'
        if (altura.value == 0) {
            avisoAltura.innerHTML = 'Você não colocou um valor'
            altura.focus()
        } else if(peso.value < 0) {
            avisoPeso.textContent = 'Você colocou um valor negativo'
            peso.focus()
        } else {
            fundoCalc.classList.remove('calculo')
            fundoCalc.classList.add('calculo-resp')
            const imc = peso.value / (altura.value ** 2)
            displayPeso.innerHTML = peso.value + 'Kg'
            displayAltura.innerHTML = altura.value + 'M'
            divResp.classList.remove('move-result')
            divResp.classList.add('result')
            document.getElementById('resultado').textContent = imc.toFixed(2);
        }
    }, 100)
})

btnFechar.addEventListener('click', () => {
    btnFechar.style.scale = '.9'
    setTimeout(function () {
        btnFechar.style.scale = '1'
        section.classList.remove('active')
        section.classList.add('empty')
        function saindo() {
            section.classList.add('inactive')
        } setTimeout(saindo, 250)
        function sair() {
            divAltura.classList.remove('altura')
            divAltura.classList.add('margin-altura')
            divResp.classList.remove('result')
            divResp.classList.add('move-result')
            fundoCalc.classList.remove('calculo-resp')
            fundoCalc.classList.add('calculo')
            peso.value = ''
            altura.value = ''
        } setTimeout(sair, 251)
    }, 100)
})

function saindo() {
    section.classList.remove('active')
    section.classList.add('empty')
    function saindo() {
        section.classList.add('inactive')
    } setTimeout(saindo, 250)
    function sair() {
        divAltura.classList.remove('altura')
        divAltura.classList.add('margin-altura')
        divResp.classList.remove('result')
        divResp.classList.add('move-result')
        fundoCalc.classList.remove('calculo-resp')
        fundoCalc.classList.add('calculo')
        peso.value = ''
        altura.value = ''
    } setTimeout(sair, 251)
}