// import s from './Main.module.css'
import ProductItem from '../../modules/Main/ProductItem'

const Main = ({
  productList,
  addWishlistItem,
  deleteWishlistItem,
  addCardItem,
}) => {
  return (
    <main>
      <div className="grid">
        {productList.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            addWishlistItem={addWishlistItem}
            deleteWishlistItem={deleteWishlistItem}
            addCardItem={addCardItem}
          />
        ))}
      </div>
    </main>
  )
}

export default Main
