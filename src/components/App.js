import React from 'react'
import Navbar from './Navbar'
import Charts from './Charts'
import SalesTable from './SalesTable'
import ProductInfo from './ProductInfo'


class App extends React.Component {

  render() {
    return (
      <div>
        <Navbar/>
        <div style={{ float: 'left', width: '20%',padding:'10px'}} >
            <ProductInfo   />
        </div>
        <div style={{ float: 'left', width: '75%'}}>
          <Charts />
          <SalesTable />
        </div>
      </div>
    );
  }
}


export default App