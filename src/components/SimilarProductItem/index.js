// Write your code here

import './index.css'

const SimilarProductItem = props => {
  const {similarProductDetails} = props
  const {id, brand, imageUrl, price, rating, title} = similarProductDetails
  return (
    <li className="list-item-similar">
      <img
        src={imageUrl}
        className="item-image"
        alt={`similar product ${title}`}
      />
      <p className="title-para-item">{title}</p>
      <p className="brand-para-item">by {brand}</p>
      <div className="price-rating-container-list">
        <p className="price-para-list">Rs {price}/-</p>
        <div className="rating-star-container-list">
          <p className="rating-para-list">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star-img-list"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
