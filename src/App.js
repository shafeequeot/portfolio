import CoverSection from "./components/coverSection";
import Footer from "./components/footer";
import Header from "./components/header"
import Knowledge from "./components/portfolio";

localStorage.theme = 'dark'
function App() {

  return (
    <div className="mt-8 ">
    
      <Header/>
      <div className="container m-auto">
      <CoverSection/>
      <Knowledge/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
