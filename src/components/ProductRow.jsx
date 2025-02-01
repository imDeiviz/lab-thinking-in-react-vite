
import PropTypes from 'prop-types';

function ProductRow({ product }) {
  return (
    <tr style={{ color: product.inStock ? 'black' : 'red' }}>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.inStock ? 'En stock' : 'Agotado'}</td>
    </tr>
  );
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    inStock: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ProductRow;
