import PropTypes from 'prop-types';
import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Disponibilidad</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductTable;
