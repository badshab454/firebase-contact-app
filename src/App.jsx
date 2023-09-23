import Navbar from "./components/Navbar";
import {FiSearch} from "react-icons/fi";

const App = () => {
  return (
    <div className="max-w-[420px] mx-auto px-4">
      <Navbar />
      <div className="flex">
        <FiSearch />
        <input
          type="text"
          className="h-10 flex-grow rounded-md border border-white bg-transparent"
        />
      </div>
    </div>
  );
};

export default App;
