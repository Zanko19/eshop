import Loading from "./loading";
import Header from "./header";
import MyPage from "./buttontest";

function App() {
  return (
    <>
    <Header />
      <div className="flex justify-center m-2 p-2">
        <div className="border border-black">
          Vite React Tailwind css project for Eshop
        </div>
        
      </div>
      <Loading/>
    </>
  );
}

export default App;
