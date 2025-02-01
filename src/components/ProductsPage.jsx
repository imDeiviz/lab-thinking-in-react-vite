import { useState } from "react";
import jsonData from "../data.json"; // Ruta de importación corregida
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState("");
  const [showInStock, setShowInStock] = useState(false); // Nuevo estado para la casilla de verificación

  const filteredProducts = products.filter(product => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStock = showInStock ? product.inStock : true; // Filtrar por stock si la casilla está marcada
    return matchesSearchTerm && matchesStock;
  });

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
        showInStock={showInStock} 
        onShowInStockChange={setShowInStock} 
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}

export default ProductsPage;
