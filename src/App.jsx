import "./App.css";
import Banner from "./section/Banner";
import Fotter from "./section/Fotter";
import StudentList from "./section/StudentList";
import Nav from "./section/Nav";

function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Nav />
      <Banner />
      <StudentList />
      <Fotter />
    </div>
  );
}

export default App;
