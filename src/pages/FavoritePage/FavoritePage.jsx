import Header from "../../components/Header/Header";
import TeacherListFavorites from "../../components/TeacherListFavorites/TeacherListFavorites";

const FavoritePage = () => {
  return (
    <div style={{ background: "#F8F8F8", paddingBottom: "100px" }}>
      <Header />
      <TeacherListFavorites />
    </div>
  );
};

export default FavoritePage;
