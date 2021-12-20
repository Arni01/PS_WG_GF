const ProductItem = ({
  product,
  addCardItem,
  deleteWishlistItem,
  addWishlistItem,
}) => {
  const { id, img, name, flag, type, price, alt, isTank, tier } = product

  const handleTogleCheckBox = ({ target }) => {
    target.checked ? addWishlistItem() : deleteWishlistItem()
  }
  console.log(img)
  return (
    <div className="item">
      <input
        className="checkbox_input"
        id={id}
        type="checkbox"
        onChange={handleTogleCheckBox}
      />
      <label className="checkbox_label" htmlFor={id} />
      <a href="/">
        <img className="pictureItem" src={`${img}`} />
      </a>
      <div className="item_conteiner">
        {isTank ? (
          <div className="description">
            <span className={`flag ${flag}`}></span>
            <span className={`type ${type}`}></span>
            <h2>
              {tier} {name}
            </h2>
          </div>
        ) : (
          <div className="description">
            <h2>{name}</h2>
          </div>
        )}
        <span className="price">$ {price}</span>
        <button className="purchase" onClick={addCardItem}>
          PURSHACE
        </button>
      </div>
    </div>
  )
}

export default ProductItem
