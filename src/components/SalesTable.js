import * as React from 'react';
import { connect } from "react-redux";
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'weekEnding', headerName: 'WEEK ENDING', width: 200 },

  { field: 'retailSales', headerName: 'RETAIL SALES', width: 250, valueGetter: (params) =>
  "$ "+ `${params.getValue('retailSales').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` },

  { field: 'wholesaleSales', headerName: 'WHOLE SALES', width: 250, valueGetter: (params) =>
  "$ "+`${params.getValue('wholesaleSales').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` },

  { field: 'unitsSold', headerName: 'UNIT', width: 200 },

  { field: 'retailerMargin', headerName: 'RETAILER MARGIN', width: 300, valueGetter: (params) =>
  "$ "+ `${params.getValue('retailerMargin').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }` }
];

class SalesTable extends React.Component {


render(){
  const {products} =  this.props;
  return (
    <div style={{ height: 600, padding:'10px'}}>
      {products?<DataGrid rows={products} columns={columns} pageSize={10}  /> :''}
    </div>
  );
}
}


function mapStateToProps(state) {
  
  if(state.products.products.length){
    console.log("state success",state.products.products[0]['sales']);
    return{
      products: state.products.products[0]['sales']
     }
  }else{
    console.log("state fail");
    return{
      products: null
     }
  }

}

export default connect(mapStateToProps)(SalesTable);