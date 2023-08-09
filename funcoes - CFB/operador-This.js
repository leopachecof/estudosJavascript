function aluno(nome, nota){
    this.nome=nome
    this.nota=nota

    this.dados_anonimos=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}
aluno("Leo", 100)