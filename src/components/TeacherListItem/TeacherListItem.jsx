/* eslint-disable react/prop-types */
import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/favorites";
import { selectUser } from "../../redux/auth/selectors";

import Modal from "../Modal/Modal";

import sprite from "../../images/symbol-defs.svg";

import {
  ReadMoreLink,
  TeacherCard,
  TeacherCardContent,
  TeacherDescriptionItem,
  TeacherDescriptionList,
  TeacherFavoriteBtn,
  TeacherFavoriteIcon,
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

const TeacherListItem = ({ teacher, favorites }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const isFavorite = favorites.includes(teacher._id);
  const addItemToFavorites = (id) => {
    dispatch(addToFavorites(id));
  };
  const removeItemFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };
  console.log(isFavorite);
  return (
    <TeacherCard>
      <TeacherImgWrapper>
        <TeacherImg
          src={teacher.avatar_url}
          alt={teacher.name}
          width={96}
          height={96}
        />
      </TeacherImgWrapper>
      <TeacherCardContent>
        <TeacherFavoriteBtn
          type="button"
          onClick={() =>
            user
              ? isFavorite
                ? removeItemFromFavorites(teacher._id)
                : addItemToFavorites(teacher._id)
              : setIsModalOpen(true)
          }
        >
          <TeacherFavoriteIcon $isFavorite={isFavorite}>
            <use href={`${sprite}#icon-heart`} />
          </TeacherFavoriteIcon>
        </TeacherFavoriteBtn>
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
      {isModalOpen &&
        createPortal(
          <Modal onClose={() => setIsModalOpen(false)} />,
          document.body
        )}
    </TeacherCard>
  );
};

export default TeacherListItem;
