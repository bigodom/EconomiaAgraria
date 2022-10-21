var nomes = [];
var dados = [];
var maxX = 0;
var maxY = 0;
function teste() {
  var quantidade = document.getElementById("Quantidade").value;
  if(quantidade > maxX){
    maxX = quantidade;
  }
  var preco = document.getElementById("Preco").value;
  if(preco > maxY){
    maxY = preco;
  }
  alert("Informação adicionada: \n" + "Quantidade: " + quantidade + "\n" + "Preço: " + preco);
  dados.push([quantidade,preco]);
}

function ec(){
  var chartDom = document.getElementById('grafico4');
  var myChart = echarts.init(chartDom);
  var option;
  chartDom.style.display = 'block'

option = {
title: {
  text: "Grafico de oferta e demanda",
  left: 'center',
  top: 0
},
tooltip: {
  trigger: 'axis',
},
xAxis: {
  name: 'Quant'
},
yAxis: {
  name:'Preço',
  axisLabel: {
    formatter:'R${value},00'
  }
},
  series: [
  {
    symbolSize: 20,
    name: 'I',
    type: 'scatter',
    data: dados,
  }
]
};
option && myChart.setOption(option);


}
{
  var chartDom = document.getElementById('grafico2');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: "Valor Bruto da Produção ao longo dos anos",
      left: 'center',
      top: 0
    },
    xAxis: {
      type: 'category',
      name: 'Ano',
      data: ['1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    },
    yAxis: {
      name: 'ano'
    },

    yAxis: {
      name:'Valor(em milhões)',
      axisLabel: {
        formatter: 'R${value}'
      }
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
  var myChart = echarts.init(chartDom);
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
  var chartDom = document.getElementById('importacaoExportacao');
  var myChart = echarts.init(chartDom);
  var option;
  
  option = {
    title: {
      text: 'import/export',
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Importação', 'Exportação']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        // prettier-ignore
        data: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        name: 'ano'
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'em 1.000 toneladas'
      }
    ],
    series: [
      {
        name: 'Importação',
        type: 'bar',
        data: [
          9353.9, 8242.0, 9498.8, 9525.5, 10188.5, 9182.1, 8802.0
        ],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      },
      {
        name: 'Exportação',
        type: 'bar',
        data: [
          33213.3, 26894.1, 44866.9, 39350.6, 25020.3, 43597.9, 51228.0
        ],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      }
    ]
  };
  
  option && myChart.setOption(option);
  
  
}
