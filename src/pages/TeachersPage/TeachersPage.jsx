import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import TeacherList from "../../components/TeacherList/TeacherList";

const TeachersPage = () => {
  return (
    <div>
      <Header />
      <Filters />
      <TeacherList />
    </div>
  );
};

export default TeachersPage;
