import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProductItemDetails extends Component {
  state = {
    productItemData: {},
    similarProductData: [],
    apiStatus: apiStatusConstants.initial,
    quality: 1,
  }

  componentDidMount() {
    this.getProductResponse()
  }

  getForrmattedData = eachInfo => ({
    id: eachInfo.id,
    imageUrl: eachInfo.image_url,
    title: eachInfo.title,
    brand: eachInfo.brand,
    totalReviews: eachInfo.total_reviews,
    rating: eachInfo.rating,
    availability: eachInfo.availability,
    description: eachInfo.description,
    price: eachInfo.price,
  })

  getProductResponse = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updateData = this.getForrmattedData(fetchedData)
      const updateSimilarProductData = fetchedData.similar_products.map(
        eachSimilar => this.getForrmattedData(eachSimilar),
      )

      this.setState({
        productItemData: updateData,
        apiStatus: apiStatusConstants.success,
        similarProductData: updateSimilarProductData,
      })
    }
    if (response.status === 404) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <div className="primedeals-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderProduceDetailsFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        className="error-view-image"
        alt="failure view"
      />
      <h1 className="error-view-heading">Product Not Found</h1>
      <Link to="/products">
        <button type="button" className="error-view-button">
          Continue Shopping
        </button>
      </Link>
    </div>
  )

  onClickIncreaseQuality = () => {
    this.setState(prevState => ({
      quality: prevState.quality + 1,
    }))
  }

  onClickDecreaseQuality = () => {
    const {quality} = this.state
    if (quality > 1) {
      this.setState(prevState => ({
        quality: prevState.quality - 1,
      }))
    }
  }

  renderProduceDetailsSuccessView = () => {
    const {productItemData, quality, similarProductData} = this.state
    const {
      id,
      imageUrl,
      title,
      brand,
      totalReviews,
      rating,
      availability,
      description,
      price,
    } = productItemData
    return (
      <div className="succes-container-details-information">
        <div className="succes-container-details-information-row">
          <img src={imageUrl} className="image-product" alt="product" />
          <div className="right-succes-container-details-row">
            <h1 className="title-heading">{title}</h1>
            <p className="price-para">Rs {price}/-</p>
            <div className="rating-review-container">
              <div className="star-rating-container">
                <p className="rating-para">{rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="star-image"
                />
              </div>
              <p className="total_reviews-para">{totalReviews} Reviews</p>
            </div>
            <p className="para-description">{description}</p>
            <div>
              <p className="para-avara-brand">
                <span className="para-avara-brand-span">Available:</span>{' '}
                {availability}
              </p>
              <p className="para-avara-brand">
                <span className="para-avara-brand-span">Brand:</span> {brand}
              </p>
            </div>
            <hr className="horizontal-line" />
            <div className="quality-container">
              <button
                data-testid="minus"
                className="button-bsSquare"
                onClick={this.onClickDecreaseQuality}
              >
                <BsDashSquare />
              </button>
              <p>{quality}</p>
              <button
                data-testid="plus"
                className="button-bsSquare"
                onClick={this.onClickIncreaseQuality}
              >
                <BsPlusSquare />
              </button>
            </div>
            <button className="add-to-cart-button">ADD TO CART</button>
          </div>
        </div>
        <div className="similar_products-container">
          <h1 className="similar_products-headers">Similar Products</h1>
          <ul className="similar_products-list-container">
            {similarProductData.map(eachSimilar => (
              <SimilarProductItem
                similarProductDetails={eachSimilar}
                key={eachSimilar.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderAllCondtionSwtchView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProduceDetailsSuccessView()
      case apiStatusConstants.failure:
        return this.renderProduceDetailsFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {productItemData, similarProductData} = this.state
    console.log(productItemData)
    console.log(similarProductData)
    return (
      <>
        <Header />
        <div className="ProductItemDetails-container">
          {this.renderAllCondtionSwtchView()}
        </div>
      </>
    )
  }
}

export default ProductItemDetails
