import { Filters } from './Filters'

function titleize(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export function Header({ products }) {
  const categories = products.reduce((acc, product) => {
    acc.add(titleize(product.category))
    return acc
  }, new Set())

  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filters categories={categories} />
    </header>
  )
}
