import { useNavigate, useParams } from "react-router-dom"


 const ProductPage = () => {

    const navigate = useNavigate()
    const params = useParams()
    console.log(params)

    return (
        <section>
        <h1>Produtos</h1>
        <p>Produtos: {params.id}</p>
      </section>
    )
}
export default ProductPage