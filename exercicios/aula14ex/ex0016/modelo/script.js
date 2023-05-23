function Contar() {
    var i = document.getElementById('txti')
    var fim = document.getElementById('txtfim');  
    var pass = document.getElementById('txtpass');
    var res = document.getElementById('res')

    if (i.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente.');
        } else {
            res.innerHTML = 'Contando: <br>'
            var ini = Number(i.value)
            let f = Number(fim.value)
            let p = Number(pass.value)
            if (p <= 0) {
                window.alert('Passo inválido! Considerando PASSO 1')
                p = 1
            }
            if (ini < f) {
                for(let c = ini; c <=f ; c += p) {
                  res.innerHTML += `${c} \u{1f449}`
                 }
            } else  {
                for (var c = ini; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1f449}`;
                }
            }

            res.innerHTML += `\u{1F3C1}`
        }
    }

    /*function Contar() {
        var i = document.getElementById('txti').value;
        var fim = document.getElementById('txtfim').value;  
        var pass = document.getElementById('txtpass').value;
        var res = document.getElementById('res');
    
        if (i.length == 0 || fim.length == 0 || pass.length == 0) {
            window.alert('[ERRO] Verifique os dados e tente novamente.');
        } else {
            res.innerHTML = 'Contando: ';
            var inicio = Number(i);
            var final = Number(fim);
            var passo = Number(pass);
    
            for (var c = inicio; c <= final; c += passo) {
                res.innerHTML += c + " ";
            }
        }
    }*/
    

   