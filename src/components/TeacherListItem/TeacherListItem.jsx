import {
  ReadMoreLink,
  TeacherCard,
  TeacherCardContent,
  TeacherDescriptionItem,
  TeacherDescriptionList,
  TeacherFavoriteBtn,
  TeacherImg,
  TeacherImgWrapper,
  TeacherLevelText,
  TeacherLevelsList,
  TeacherMainText,
  TeacherSecondText,
  TeacherStatisticsList,
  TeacherStatisticsWrapper,
  TeacherTitle,
} from "./TeacherListItem.styled";

// eslint-disable-next-line react/prop-types
const TeacherListItem = ({ teachers }) => {
  console.log(teachers);
  return teachers.map((teacher) => (
    <TeacherCard key={teacher.id}>
      <TeacherImgWrapper>
        <TeacherImg
          src={teacher.avatar_url}
          alt={teacher.name}
          width={96}
          height={96}
        />
      </TeacherImgWrapper>
      <TeacherCardContent>
        <TeacherFavoriteBtn type="button">heart</TeacherFavoriteBtn>
        <TeacherStatisticsWrapper>
          <TeacherSecondText>Languages</TeacherSecondText>
          <TeacherStatisticsList>
            <li>
              <TeacherMainText>Lessons online</TeacherMainText>
            </li>
            <li>
              <TeacherMainText>
                Lessons done: {teacher.lessons_done}
              </TeacherMainText>
            </li>
            <li>
              <TeacherMainText>Rating: {teacher.rating}</TeacherMainText>
            </li>
            <li>
              <TeacherMainText>
                Price / 1 hour: {teacher.price_per_hour}
              </TeacherMainText>
            </li>
          </TeacherStatisticsList>
        </TeacherStatisticsWrapper>
        <TeacherTitle>{teacher.name}</TeacherTitle>
        <TeacherDescriptionList>
          <TeacherDescriptionItem>
            <TeacherSecondText>Speaks:&nbsp;</TeacherSecondText>
            <TeacherMainText>{teacher.languages.join(" ")}</TeacherMainText>
          </TeacherDescriptionItem>
          <TeacherDescriptionItem>
            <TeacherSecondText>Lesson Info:&nbsp;</TeacherSecondText>
            <TeacherMainText>{teacher.lesson_info}</TeacherMainText>
          </TeacherDescriptionItem>
          <TeacherDescriptionItem>
            <TeacherSecondText>Conditions:&nbsp;</TeacherSecondText>
            <TeacherMainText>{teacher.conditions}</TeacherMainText>
          </TeacherDescriptionItem>
        </TeacherDescriptionList>
        <ReadMoreLink>Read more</ReadMoreLink>
        <TeacherLevelsList>
          {teacher.levels?.map((level) => (
            <li key={level}>
              <TeacherLevelText>#{level}</TeacherLevelText>
            </li>
          ))}
        </TeacherLevelsList>
      </TeacherCardContent>
    </TeacherCard>
  ));
};

export default TeacherListItem;
