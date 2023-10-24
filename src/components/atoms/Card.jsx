import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

export default function Card ({ product }) {
  const navigate = useNavigate();
  const handleClick = () => {
    return navigate("/shop/item/" + product.id)
  }

  return (
    <div 
      className='flex flex-col p-[10px] gap-2 rounded shadow-[0_1px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_1px_12px_rgba(0,0,0,0.3)] transition ease-in cursor-pointer'
      onClick={() => handleClick()}
    >
      <div className='relative pb-[120%]'>
        <div className='absolute w-full h-full'>
          <img className='w-full h-full object-contain' src={product.image}/>
        </div>
      </div>
      <div className='flex flex-col gap-4 flex-grow'>
        <span className='flex-grow'>{product.title}</span>
        <span> ${product.price}</span>
        <button className='text-white bg-[#ff9577] p-1 rounded-[40px]'>Add to cart</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  product: PropTypes.object
}