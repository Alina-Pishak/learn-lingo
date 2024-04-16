import Filters from "../../components/Filters/Filters";
import TeacherList from "../../components/TeacherList/TeacherList";

const TeachersPage = () => {
  return (
    <div style={{ background: "#D9D9D9" }}>
      <Filters />
      <TeacherList />
    </div>
  );
};

export default TeachersPage;
