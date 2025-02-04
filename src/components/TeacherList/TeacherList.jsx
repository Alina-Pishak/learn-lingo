import { useGetTeachersQuery } from "../../redux/teachers/teachers";
import TeacherListItem from "../TeacherListItem/TeacherListItem";

const TeacherList = () => {
  const { data: teachers } = useGetTeachersQuery();
  console.log(teachers);
  return (
    teachers?.length > 0 && (
      <div>
        <ul className="teachers-container">
          <TeacherListItem teachers={teachers} />
        </ul>
        <button type="button">Load more</button>
      </div>
    )
  );
};

export default TeacherList;
