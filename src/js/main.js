
          
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
  var myChart = echarts.init(document.getElementById('grafico1'),'dark');
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
  var myChart = echarts.init(chartDom, 'dark');
  var option;

  option = {
    xAxis: {
      type: 'category',
      data: ['1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'axis'
    },

    series: [
      {
        data: [264, 243, 294,	306,	306,	420,	461,	532,	594,	605,	553,	549,	629,	716,	689,	717,	806,	842,	924,	955,	964,	960, 956,	927,	945, 1106, 1221],
        type: 'line',
        smooth: true
      }
    ]
  };

  option && myChart.setOption(option);
}
{
  var chartDom = document.getElementById('grafico3');
  var myChart = echarts.init(chartDom, 'dark');
  var option;

  option = {
    title: {
      text: 'Participação das regiões no VBP em 2021',
      subtext: 'valores em %',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Participação do:',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 6.3, name: 'Norte' },
          { value: 9.7, name: 'Nordeste' },
          { value: 23.4, name: 'Sul' },
          { value: 26.6, name: 'Sudeste' },
          { value: 34.12, name: 'Centro-Oeste' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  option && myChart.setOption(option);

}
{
  var chartDom = document.getElementById('grafico4');
  var myChart = echarts.init(chartDom, 'dark');
  var option;

  const dataAll = [
      
    [
      [10.0, 8.04],
    ]
    ];

const markLineOpt = {
animation: false,
label: {
  formatter: 'y = 0.5 * x',
  align: 'right'
},
lineStyle: {
  type: 'solid'
},
tooltip: {
  formatter: 'y = 0.5 * x'
},
data: [
  [
    {
      coord: [0, 0],
      symbol: 'none'
    },
    {
      coord: [15, 8],
      symbol: 'none'
    }
  ]
]
};
option = {
title: {
  text: "Anscombe's quartet",
  left: 'center',
  top: 0
},
tooltip: {
  formatter: 'Group {a}: ({c})'
},
xAxis: [
  { gridIndex: 0, min: 0, max: 20 }
],
yAxis: [
  { gridIndex: 0, min: 0, max: 15 }
  ],
  series: [
  {
    name: 'I',
    type: 'scatter',
    xAxisIndex: 0,
    yAxisIndex: 0,
    data: dados
  }
]
};
option && myChart.setOption(option);
  
}
