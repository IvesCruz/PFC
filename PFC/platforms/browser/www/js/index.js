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

	//SEGUNDA PAGE
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

	//TERCEIRA PÁGINA 
	
}