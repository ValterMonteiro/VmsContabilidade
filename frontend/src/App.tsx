import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary"> Olá! Bem vindo a VMS Contabilidade!👨‍💻</h1>

        <DataTable/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
