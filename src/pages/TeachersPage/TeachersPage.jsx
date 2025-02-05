import Header from "../../components/Header/Header";
import TeacherList from "../../components/TeacherList/TeacherList";

const TeachersPage = () => {
  return (
    <div style={{ background: "#F8F8F8", paddingBottom: "100px" }}>
      <Header />
      <TeacherList />
    </div>
  );
};

export default TeachersPage;
