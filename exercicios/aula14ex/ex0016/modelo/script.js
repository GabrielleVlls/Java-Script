function Contar() {
    var i = document.getElementById('txti')
    var fim = document.getElementById('txtfim');  
    var pass = document.getElementById('txtpass');
    var res = document.getElementById('res')

    if (i.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente.');
        } else {
            res.innerHTML = 'Contando: '
            var i = Number(i.value)
            var fim = Number(fim.value)
            var pass = Number(pass.value)
        }
    }

   