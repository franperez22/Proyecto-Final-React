import PropTypes from 'prop-types'

export default function Banner ({ url, children }) {
  return (
    <div className="banner-container relative overflow-hidden">
      <img className="w-full h-auto" src={url} alt="banner"/>
      {children}
    </div>
  )
}

Banner.propTypes = {
  url: PropTypes.string,
  children: PropTypes.any
}