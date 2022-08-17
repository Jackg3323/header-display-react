import PropTypes from "prop-types";

export default function Products({ products }) {
  const listItems = products.map((product) => (
    <li key={product.name}>
      {product.name} {product.price}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};
