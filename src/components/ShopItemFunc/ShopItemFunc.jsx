import PropTypes from "prop-types"; // Добавьте этот импорт вверху файла

function shopItemFunc({ item }) {
  // ... (остальной код)
}

shopItemFunc.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    descriptionFull: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

export default shopItemFunc;
