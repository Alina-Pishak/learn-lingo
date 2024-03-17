import Filters from "./components/Filters/Filters";
import TeacherList from "./components/TeacherList/TeacherList";
// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import Statistics from "./components/Statistics/Statistics";

export const App = () => {
  return (
    <div className="container" style={{ background: "#EEEEEE" }}>
      <Filters />
      <TeacherList />
    </div>
  );
};

export default App;
