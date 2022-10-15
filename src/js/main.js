
          
var nomes = [];
var dados = [];

function teste() {
  var dado = document.getElementById("Dado").value;
  var nome = document.getElementById("Nome").value;
  alert("Informação adicionada: \n" + "Nome: " + nome + "\n" + "Dado: " + dado);
  dados.push(dado);
  nomes.push(nome);
}

function ec(){
  // Initialize the echarts instance based on the prepared dom
  var myChart = echarts.init(document.getElementById('main'));
  // Specify the configuration items and data for the chart
  var option = {
    title: {
      text: ''
    },
    tooltip: {},
    legend: {
      data: ['Teste']
    },
    xAxis: {
      data: nomes
    },
    yAxis: {},
    series: [
      {
        name: '',
        type: 'bar',
        data: dados
      }
    ]
  };

  // Display the chart using the configuration items and data just specified.
  myChart.setOption(option);
}
