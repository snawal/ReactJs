import React from 'react';
import './ProductList.css';
import Product from './Product';


class ProductList extends React.Component{
    render(){
        let products = [];

        for (let product of  this.props.items)
        {
            //products.push(<Product item={product}  selectHandler={this.props.selectHandler} />);
            products.push(<Product item={product} addToCartHandler={this.props.addToCartHandler}/>);
        }

        return(
            <ul>
                {products}
            </ul>
        );
    }
}

export default ProductList;

/*import React from 'react';
import './ProductList.css';
import Product from './Product';

class ProductList extends React.Component {
  render() {
      let products = [];

      for (let product of this.props.items) {
          products.push(<Product item={product} selectHandler={this.props.selectHandler}/>);
      }

    return <ul>{products}</ul>;
  }
}

export default ProductList;*/

