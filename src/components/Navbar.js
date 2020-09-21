import React from 'react';
import Card from '@material-ui/core/Card';

class Navbar extends React.Component {

    render() {

    return (
        <div>
            <Card position="static" style={{backgroundColor:'white'}}>   
                <img src='https://image4.owler.com/logo/stackline_owler_20170129_010716_original.png' style={{height:30,width:170}}/>
            </Card>
        </div>
        );
    }
}
export default Navbar