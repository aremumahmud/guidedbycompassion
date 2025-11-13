import './Loader.css'
import logoImage from '../assets/Logo-Color.png'

function Loader({ isLoading = true }) {
  return (
    <div className={`loader-overlay ${!isLoading ? 'hidden' : ''}`}>
      <div className="loader-container">
        <div className="loader-logo">
          <img src={"https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png"} alt="Guided by Compassion Home Care" />
        </div>
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <p className="loader-text">Loading...</p>
      </div>
    </div>
  )
}

export default Loader

