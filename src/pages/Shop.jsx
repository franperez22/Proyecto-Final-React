import { ItemListContainer } from "../components";
import { useFetch } from "../server/apiFunctions";

export default function Shop () {
  const { data } = useFetch('https://fakestoreapi.com/products')

  return (
    <section className="flex justify-center">
      <div className="container">
        <ItemListContainer data={data} />
      </div>
    </section>
  )
}