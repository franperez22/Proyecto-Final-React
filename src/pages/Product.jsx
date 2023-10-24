import { useParams } from "react-router-dom"
import {ItemDetailContainer} from "../components";
export default function Product () {
    const {id} = useParams()
    console.log(id);

    return (
        <section className="flex justify-center">
        <div className="container">
          <ItemDetailContainer id={id} />
        </div>
      </section>
    )
}
