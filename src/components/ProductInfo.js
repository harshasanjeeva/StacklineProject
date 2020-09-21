import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import HomeIcon from '@material-ui/icons/Home';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { fetchProducts } from "../actions";
import BarChartIcon from '@material-ui/icons/BarChart';

class ProductInfo extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchProducts());
    }
  
    
    render() {
      const { error, loading, products } = this.props;
  
      if (error) {
        return <div>Error! {error.message}</div>;
      }
  
      if (loading) {
        return <div>Loading...</div>;
      }
      
      return (<div>
        
        {products?products.map(product => (
          <Card >
          <CardActionArea>
            <CardMedia
             style={{height: 200,backgroundSize: 'contain'}}
              image={product.image}
              title="Contemplative Reptile"
            />
            <CardContent style={{textAlign:'center'}}>
              <Typography gutterBottom variant="h5" component="h2" >
               {product.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
              {product.subtitle}
              </Typography>
            </CardContent>
          </CardActionArea>
          <Card style={{paddingTop: '15px'}}>
          {product.tags.map((tag,i) => (
            <Button size="small" variant="contained" key={i} style={{margin:'10px',backgroundColor:'#ffffff' }}>
            {tag} 
            </Button>
            ))}
          </Card>
        </Card>
        )):''}

        <Card style={{marginTop:'15px'}}>
        <HomeIcon style={{float:'left'}}/>
            <Typography variant="overline" display="block" gutterBottom>
             OVERVIEW
            </Typography>
            <BarChartIcon style={{float:'left', color:'#38b6f4'}}/>
            <Typography variant="overline" display="block" gutterBottom><strong>
            SALES
            </strong></Typography>
        
        </Card>    
        </div>);
    }
  }
  
  const mapStateToProps = state => ({
    products: state.products.products,
    title:state.products.title,
    loading: state.products.loading,
    error: state.products.error
  });
  
  export default connect(mapStateToProps)(ProductInfo);




