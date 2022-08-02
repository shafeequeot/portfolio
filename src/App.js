import Footer from "./components/footer";
import Header from "./components/header"
import Homepage from "./page/homepage";

localStorage.theme = 'dark'
function App() {

  return (
    <div className="mt-8 ">
    
      <Header/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
