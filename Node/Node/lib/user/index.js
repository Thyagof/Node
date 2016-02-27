var Usuario = function Usuario(){
    var _autorizado = false;
    var _usuario = undefined;
    var _senha = undefined;

    var autorizar = function (usuario, senha){
        _usuario = usuario;
        _senha = senha;
        // Executar lógica de validação
        _autorizado = true
        return true;
    }

    return {
        autorizar: autorizar,
        autorizado: function(){ return autorizado; }
    }
}

module.exports = Usuario;