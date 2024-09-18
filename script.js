const avanca = document.querySelectorAll('.btn-proximo');
Guilherme Borges da Silva Guimarães 2D 18-09-24
avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
