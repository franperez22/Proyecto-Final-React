import { useFetch } from "../../server/apiFunctions";
import PropTypes from 'prop-types'

export default function ItemDetailContainer ({id}) {
    const { data } = useFetch(`https://fakestoreapi.com/products/${id}`)
    console.log("data", data)
    return (
        <div>{data.title}</div>
    )
}

ItemDetailContainer.propTypes = {
    id: PropTypes.string
}