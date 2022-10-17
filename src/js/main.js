
          
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
  var myChart = echarts.init(document.getElementById('grafico1'));
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
{
  var chartDom = document.getElementById('grafico2');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', '2021']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1188],
        type: 'line',
        smooth: true
      }
    ]
  };

  option && myChart.setOption(option);
}