import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/Cart.jsx'

function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <CartProvider>
        <Cart />
        <Header products={initialProducts} />
        <Products products={filteredProducts} />
      </CartProvider>
    </>
  )
}

export default App
