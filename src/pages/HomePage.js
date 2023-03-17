import { useNavigate } from "react-router-dom";
import { goToProfilePage } from "../routes/Cordinator";

function HomePage() {

  const navigate = useNavigate()
  

  return (
    <section>
      <h1>Página inicial</h1>

      
      <br>
      </br>
      <br>
      </br>
      <button onClick={() => goToProfilePage(navigate, "Thamiris")}>Ir para Página de Perfil</button>
    </section>
  );
}

export default HomePage;
