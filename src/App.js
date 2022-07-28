import CoverSection from "./components/coverSection";
import Header from "./components/header"

localStorage.theme = 'dark'
function App() {

  return (
    <div className="mt-8 ">
    
      <Header/>
      <div className="container m-auto">
      <CoverSection/>

      <div className="bg-yellow-500 h-96">sdf</div>
      </div>
    </div>
  );
}

export default App;
