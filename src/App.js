import "./App.css";
import { Navbar, PageOptions, SubSections } from "./components";

function App() {
  return (
    <div className="">
      <div className="w-full h-[35%] bg-blue-600 absolute -z-10"></div>
      <main className="max-w-[1140px] mx-auto flex flex-col">
        <Navbar />
        <p className="text-white text-2xl font-medium text-center my-4">
          Products
        </p>
        <PageOptions />
        <SubSections />
      </main>
    </div>
  );
}

export default App;
