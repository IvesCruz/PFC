window.onload = function(){
	data = new Date();
    mes = data.getMonth();
	dia = data.getDate();
	ano = data.getFullYear();
	var str_data = dia + '/' + (mes+1) + '/' + ano;
	document.getElementById("DataAtual").value = str_data
}

$(document).ready(function() {
  $('#inputOculto').hide();
  $('#labelOculto').hide();
  $('#mySelect').change(function() {
    if ($('#mySelect').val() == 'Outros') {
      $('#inputOculto').show();
      $('#labelOculto').show();
    } else {
      $('#inputOculto').hide();
      $('#labelOculto').hide();
    }
  }); 
});

function teste(){
	
	const produtos = [
		{
			nome: "Abacate",
			densidade_de_armazenamento: "330",
			temperatura_de_congelamento_do_produto: "-0.70",
			calor_especifico_do_produto_nao_congelado: "0.790",
			calor_especifico_do_produto_congelado: "0.400",
			calor_latente_de_congelamento: "52",
			calor_de_respiracao: "3600"
		},

		{

		}
	]
}

function calcular(){

	//Primeira Página
	//var comprimento = document.getElementById("Comprimento").value 
	//var largura = document.getElementById("Largura").value
	var comprimento = $("[name='tx_comprimento']").val();
	var largura = $("[name='tx_largura']").val();
	var altura = $("[name='tx_altura']").val();
	var tempInterna = $("[name='tx_TempInterna']").val();
	var conduTermi = $("[name='tx_ConduTermi']").val();
	var espessuraIsolamento = $("[name='tx_EspessuraIsolamento']").val();
	var tempExterna = $("[name='tx_TempExterna']").val();
	var frequencia = $("[name='tx_Frequencia']").val();
	

	//Primeira Página
	//window.localStorage.setItem("tx_comprimento", comprimento);
	window.localStorage['tx_comprimento'] = comprimento;
	window.localStorage['tx_largura'] = largura;
	window.localStorage['tx_altura'] = altura;
	window.localStorage['tx_TempInterna'] = tempInterna;
	window.localStorage['tx_ConduTermi'] = conduTermi;
	window.localStorage['tx_EspessuraIsolamento'] = espessuraIsolamento;
	window.localStorage['tx_TempExterna'] = tempExterna;
	window.localStorage['tx_Frequencia'] = frequencia;

	volume = (comprimento * largura) * altura;
	area = comprimento * largura;

 	$('#areaDoPiso').val(area);
 	$('#volume').val(volume);
}

function validacao(){
	//nome
	if(document.dados.tx_nome.value == ""){
		alert("Preencha o campo NOME.")
		document.dados.tx_nome.focus();
		return false;
	}

	//obra
	if(document.dados.tx_obra.value == ""){
		alert("Preencha o campo 0BRA.")
		document.dados.tx_obra.focus();
		return false;
	}

	//comprimento
	if (document.dados.tx_comprimento.value == ""){
		alert("Preencha o campo COMPRIMENTO.")
		document.dados.tx_comprimento.focus();
		return false;
	}else if(isNaN(dados.tx_comprimento.value)){
		alert("Preencha o campo COMPRIMENTO apenas com NÚMEROS.")
		document.dados.tx_comprimento.focus();
		return false;
	}   

	//largura
	if (document.dados.tx_largura.value == ""){
		alert("Preencha o campo LARGURA.")
		document.dados.tx_largura.focus();
		return false;
	}else if(isNaN(dados.tx_largura.value)){
		alert("Preencha o campo LARGURA apenas com NÚMEROS.")
		document.dados.tx_largura.focus();
		return false;
	}   

	//altura
	if (document.dados.tx_altura.value == ""){
		alert("Preencha o campo ALTURA.")
		document.dados.tx_altura.focus();
		return false;
	}else if(isNaN(dados.tx_altura.value)){
		alert("Preencha o campo ALTURA apenas com NÚMEROS.")
		document.dados.tx_altura.focus();
		return false;
	}

	//Temperatura Interna
	if (document.dados.tx_TempInterna.value == ""){
		alert("Preencha o campo TEMPERATURA INTERNA.")
		document.dados.tx_TempInterna.focus();
		return false;
	}else if(isNaN(dados.tx_TempInterna.value)){
		alert("Preencha o campo TEMPERATURA INTERNA apenas com NÚMEROS.")
		document.dados.tx_TempInterna.focus();
		return false;
	}
/**
	if()
	//Condutividade Térmica
	if (document.dados.tx_ConduTermi.value == ""){
		alert("Preencha o campo CONDUTIVIDADE TÉRMICA.")
		document.dados.tx_ConduTermi.focus();
		return false;
	}else if(isNaN(dados.tx_ConduTermi.value)){
		alert("Preencha o campo CONDUTIVIDADE TÉRMICA apenas com NÚMEROS.")
		document.dados.tx_ConduTermi.focus();
		return false;
	}
**/

	//Espessura Isolamento
	if (document.dados.tx_EspessuraIsolamento.value == ""){
		alert("Preencha o campo ESPESSURA DO ISOLAMENTO.")
		document.dados.tx_EspessuraIsolamento.focus();
		return false;
	}else if(isNaN(dados.tx_EspessuraIsolamento.value)){
		alert("Preencha o campo ESPESSURA DO ISOLAMENTO apenas com NÚMEROS.")
		document.dados.tx_EspessuraIsolamento.focus();
		return false;
	}

	//Temperatura Externa
	if (document.dados.tx_TempExterna.value == ""){
		alert("Preencha o campo TEMPERATURA EXTERNA.")
		document.dados.tx_TempExterna.focus();
		return false;
	}else if(isNaN(dados.tx_TempExterna.value)){
		alert("Preencha o campo TEMPERATURA EXTERNA apenas com NÚMEROS.")
		document.dados.tx_TempExterna.focus();
		return false;
	}

	//Frequência
	if (document.dados.tx_Frequencia.value == ""){
		alert("Preencha o campo FREQUÊNCIA.")
		document.dados.tx_Frequencia.focus();
		return false;
	}else if(isNaN(dados.tx_Frequencia.value)){
		alert("Preencha o campo FREQUÊNCIA apenas com NÚMEROS.")
		document.dados.tx_Frequencia.focus();
		return false;
	}

	////////////////////////////SEGUNDA PAGE///////////////////////////////////////////////
	//Massa Total de Produto Armazenado
	if (document.dados.tx_MassaTotalArma.value == ""){
		alert("Preencha o campo MASSA TOTAL DE PRODUTO ARMAZENADO.")
		document.dados.tx_MassaTotalArma.focus();
		return false;
	}else if(isNaN(dados.tx_MassaTotalArma.value)){
		alert("Preencha o campo MASSA TOTAL DE PRODUTO ARMAZENADO apenas com NÚMEROS.")
		document.dados.tx_MassaTotalArma.focus();
		return false;
	}

	//Massa de Produto em Movimento
	if (document.dados.tx_MassaProdMov.value == ""){
		alert("Preencha o campo MASSA DE PRODUTO EM MOVIMENTO.")
		document.dados.tx_MassaProdMov.focus();
		return false;
	}else if(isNaN(dados.tx_MassaProdMov.value)){
		alert("Preencha o campo MASSA DE PRODUTO EM MOVIMENTO apenas com NÚMEROS.")
		document.dados.tx_MassaProdMov.focus();
		return false;
	}

	//Tempo de Resfriamento e/ou Congelamento do Produto
	if (document.dados.tx_TempResfCongProd.value == ""){
		alert("Preencha o campo TEMPO DE RESFRIAMENTO E/OU CONGELAMENTO DO PRODUTO.")
		document.dados.tx_TempResfCongProd.focus();
		return false;
	}else if(isNaN(dados.tx_TempResfCongProd.value)){
		alert("Preencha o campo TEMPO DE RESFRIAMENTO E/OU CONGELAMENTO DO PRODUTO apenas com NÚMEROS.")
		document.dados.tx_TempResfCongProd.focus();
		return false;
	}

	//Temperatura de Entrada do Produto
	if (document.dados.tx_TempEntrada.value == ""){
		alert("Preencha o campo TEMPERATURA DE ENTRADA DO PRODUTO.")
		document.dados.tx_TempEntrada.focus();
		return false;
	}else if(isNaN(dados.tx_TempEntrada.value)){
		alert("Preencha o campo TEMPERATURA DE ENTRADA DO PRODUTO apenas com NÚMEROS.")
		document.dados.tx_TempEntrada.focus();
		return false;
	}

	////////////////////////////////TERCEIRA PÁGINA/////////////////////////////////
	//Numero de Pessoas 
	if (document.dados.tx_NumPessoas.value == ""){
		alert("Preencha o campo NÚMERO DE PESSOAS.")
		document.dados.tx_NumPessoas.focus();
		return false;
	}else if(isNaN(dados.tx_NumPessoas.value)){
		alert("Preencha o campo NÚMERO DE PESSOAS apenas com NÚMEROS.")
		document.dados.tx_NumPessoas.focus();
		return false;
	}

	//Tempo de Permanência das Pessoas
	if (document.dados.tx_TempPermPessoas.value == ""){
		alert("Preencha o campo TEMPO DE PERMANÊNCIA DAS PESSOAS.")
		document.dados.tx_TempPermPessoas.focus();
		return false;
	}else if(isNaN(dados.tx_TempPermPessoas.value)){
		alert("Preencha o campo TEMPO DE PERMANÊNCIA DAS PESSOAS apenas com NÚMEROS.")
		document.dados.tx_TempPermPessoas.focus();
		return false;
	}

	//Potência de Iluminação
	if (document.dados.tx_PotIlumina.value == ""){
		alert("Preencha o campo POTÊNCIA DE ILUMINAÇÃO DAS PESSOAS.")
		document.dados.tx_PotIlumina.focus();
		return false;
	}else if(isNaN(dados.tx_PotIlumina.value)){
		alert("Preencha o campo POTÊNCIA DE ILUMINAÇÃO apenas com NÚMEROS.")
		document.dados.tx_PotIlumina.focus();
		return false;
	}

	//Tempo de Iluminação
	if (document.dados.tx_TempIlumina.value == ""){
		alert("Preencha o campo TEMPO DE ILUMINAÇÃO.")
		document.dados.tx_TempIlumina.focus();
		return false;
	}else if(isNaN(dados.tx_TempIlumina.value)){
		alert("Preencha o campo TEMPO DE ILUMINAÇÃO apenas com NÚMEROS.")
		document.dados.tx_TempIlumina.focus();
		return false;
	}

	//Potência de Motores(exceto dos evaporadores)
	if (document.dados.tx_PotMotores.value == ""){
		alert("Preencha o campo POTÊNCIA DE MOTORES.")
		document.dados.tx_PotMotores.focus();
		return false;
	}else if(isNaN(dados.tx_PotMotores.value)){
		alert("Preencha o campo POTÊNCIA DE MOTORES apenas com NÚMEROS.")
		document.dados.tx_PotMotores.focus();
		return false;
	}

	//Tempo de Operação dos Motores
	if (document.dados.tx_TempOpeMotores.value == ""){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS MOTOROES.")
		document.dados.tx_TempOpeMotores.focus();
		return false;
	}else if(isNaN(dados.tx_TempOpeMotores.value)){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS MOTOROES apenas com NÚMEROS.")
		document.dados.tx_TempOpeMotores.focus();
		return false;
	}

	//Fator de Segurança
	if (document.dados.tx_FatSeguranca.value == ""){
		alert("Preencha o campo FATOR DE SEGURANÇA.")
		document.dados.tx_FatSeguranca.focus();
		return false;
	}else if(isNaN(dados.tx_FatSeguranca.value)){
		alert("Preencha o campo FATOR DE SEGURANÇA apenas com NÚMEROS.")
		document.dados.tx_FatSeguranca.focus();
		return false;
	}

	//Tempo de Operação do Compressor
	if (document.dados.tx_TempOpeCompre.value == ""){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS COMPRESSOR.")
		document.dados.tx_TempOpeCompre.focus();
		return false;
	}else if(isNaN(dados.tx_TempOpeCompre.value)){
		alert("Preencha o campo TEMPO DE OPERAÇÃO DOS COMPRESSOR apenas com NÚMEROS.")
		document.dados.tx_TempOpeCompre.focus();
		return false;
	}
}