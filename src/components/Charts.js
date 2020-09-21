import React from 'react';
import Chart from 'react-apexcharts';
import Card from '@material-ui/core/Card';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';

class Charts extends React.Component {

    render() {
      var retailSalesArray = []
      var retailMarginArray = []
      var series = []
      var options= []
      options= {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
        },
      }
      const {products} =  this.props;
      
      if(products){
        var MonthObject = {0:1}
        var MonthlyRetailSale = 0
        var MonthlyRetailMargin = 0
        var NumberOfRetailSales=1
        products.map(product => {
          var date = new Date(product.weekEnding)
          
          if(date.getMonth() in MonthObject){
            console.log(date.getMonth())
            NumberOfRetailSales += 1
            MonthlyRetailSale += product.retailSales
            MonthlyRetailMargin += product.retailerMargin
          }else{
            MonthObject[date.getMonth()] = 1
            retailSalesArray.push(Math.floor(MonthlyRetailSale/NumberOfRetailSales))
            retailMarginArray.push(Math.floor(MonthlyRetailMargin/NumberOfRetailSales))
            MonthlyRetailSale = product.retailSales
            MonthlyRetailMargin = product.retailerMargin
          }
          
        })

       
        series= [{
          name: 'Retail Sales Array',
          data: retailSalesArray
         }, {
          name: 'Retail Margin Array',
          data: retailMarginArray
        }]
      }
    
      return (
        <div id="chart" style={{padding:'10px'}}>
          <Typography gutterBottom variant="h6" component="h6" >
            Retail Sales   
          </Typography>
          <Card>
          <Chart options={options} series={series}  height={300} />
          </Card>
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    if(state.products.products.length){
      return{
        products: state.products.products[0]['sales']
       }
    }else{
      return{
        products: null
       }
    }
  }
  export default connect(mapStateToProps)(Charts)

