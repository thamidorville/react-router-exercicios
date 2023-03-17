import { Navigate, useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/Cordinator";

function ProfilePage() {
  const navigate = useNavigate()
  return (
    <section>
      <h1>Página de perfil</h1>
   
      <button onClick={() => goToHomePage(navigate)}>Voltar para Página Inicial</button>
    </section>
  );
}

export default ProfilePage;
