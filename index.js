function tabela(event){
    event.preventDefault();

    var nome = event.target[0].value;
    var matricula = event.target[1].value;
    var nota1 = parseFloat(event.target[2].value);
    var nota2 = parseFloat(event.target[3].value);

    console.log({nome, matricula, nota1, nota2 });


    var tr = document.createElement("tr");
    var td_nome = document.createElement("td");
    td_nome.innerHTML = nome;
    var td_matricula = document.createElement("td");
    td_matricula.innerHTML = matricula;
    var td_nota1 = document.createElement("td");
    td_nota1.innerHTML = nota1;
    var td_nota2 = document.createElement("td");
    td_nota2.innerHTML = nota2;
    
    var media = (nota1 + nota2) / 2;
    var td_media = document.createElement("td");
    td_media.innerHTML = media.toFixed(2);

    var situacao;
    if (media >= 5) {
        situacao = "Aprovado";
    } else {
        situacao = "Reprovado";
    }
    var td_situacao = document.createElement("td");
    td_situacao.innerHTML = situacao;

    tr.appendChild(td_nome);
    tr.appendChild(td_matricula);
    tr.appendChild(td_nota1);
    tr.appendChild(td_nota2);
    tr.appendChild(td_media);
    tr.appendChild(td_situacao);

    document.querySelector("body > section:nth-child(4) > table > tbody").appendChild(tr);
    var aluno = {nome, matricula, nota1, nota2, media, situacao};
    var alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    alunos.push(aluno);
    localStorage.setItem("aluno", JSON.stringify(aluno));

}