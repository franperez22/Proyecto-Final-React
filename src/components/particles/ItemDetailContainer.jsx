import { useFetch } from "../../server/apiFunctions";
import PropTypes from 'prop-types'

export default function ItemDetailContainer ({id}) {
    const { data } = useFetch(`https://fakestoreapi.com/products/${id}`)
    console.log("data", data)
    return (
        <section className="productDetail flex gap-12 mt-12">
            <div className="productDetail-img md:w-[400px] w-[40vw]">
                <img className="w-full h-auto object-cover" src={data.image} alt="" />
            </div>
            <div className="productDetail-info flex-grow basis-0 shop">
                <h2 className="text-2xl font-semibold mb-4">{data.title}</h2>
                <p className="mb-5">{data.description}</p>
                <span className="text-[#ff9577] text-lg font-semibold">${data.price}</span>
                <div className="productDetail-info-buttons mt-5">
                    <button className="cart">Add to cart</button>
                    <button className="buy">Buy</button>
                </div>
            </div>
        </section>
    )
}

ItemDetailContainer.propTypes = {
    id: PropTypes.string
}