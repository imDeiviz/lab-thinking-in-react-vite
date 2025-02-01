import PropTypes from 'prop-types';

function SearchBar({ searchTerm, onSearchChange, showInStock, onShowInStockChange }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
      />
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={showInStock}
          onChange={e => onShowInStockChange(e.target.checked)}
        />
        <label className="form-check-label">
          Solo mostrar productos en stock
        </label>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  showInStock: PropTypes.bool.isRequired,
  onShowInStockChange: PropTypes.func.isRequired,
};

export default SearchBar;
