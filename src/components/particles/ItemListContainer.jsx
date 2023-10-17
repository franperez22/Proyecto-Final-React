import PropTypes from 'prop-types'
import { Card } from '../atoms'

export default function ItemListContainer ({data}) {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
      {data.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

ItemListContainer.propTypes = {
  data: PropTypes.array.isRequired
}
