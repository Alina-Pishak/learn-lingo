/* eslint-disable react/prop-types */
import { useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/favorites";
import { selectUser } from "../../redux/auth/selectors";

import Button from "../ui/Button/Button";

import sprite from "../../images/symbol-defs.svg";

import ReviewList from "../ReviewList/ReviewList";
import BookingForm from "../BookingForm/BookingForm";
import SuccessModal from "../SuccessModal/SuccessModal";
import AddToFavoriteMessage from "../AddToFavoriteMessage/AddToFavoriteMessage";
import LoginForm from "../LoginForm/LoginForm";

import {
  ReadMoreLink,
  TeacherCard,
  TeacherCardContent,
  TeacherDescription,
  TeacherDescriptionItem,
  TeacherDescriptionList,
  TeacherFavoriteBtn,
  TeacherFavoriteIcon,
  TeacherImg,
  TeacherImgWrapper,
  TeacherLevelsItemText,
  TeacherLevelsItemItem,
  TeacherLevelsList,
  TeacherMainText,
  TeacherMainTextPrice,
  TeacherSecondText,
  TeacherStatisticsList,
  TeacherStatisticsListItem,
  TeacherStatisticsWrapper,
  TeacherTitle,
} from "./TeacherListItem.styled";

const TeacherListItem = ({ teacher, favorites }) => {
  const [isOpenSuccessMessage, setIsOpenSuccessMessage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const isFavorite = favorites.includes(teacher._id);
  const addItemToFavorites = (id) => {
    dispatch(addToFavorites(id));
  };
  const removeItemFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };
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
          <TeacherFavoriteIcon $isFavorite={isFavorite && user}>
            <use href={`${sprite}#icon-heart`} />
          </TeacherFavoriteIcon>
        </TeacherFavoriteBtn>
        <TeacherStatisticsWrapper>
          <TeacherSecondText>Languages</TeacherSecondText>
          <TeacherStatisticsList>
            <TeacherStatisticsListItem>
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-open-book`} />
              </svg>
              <TeacherMainText>Lessons online</TeacherMainText>
            </TeacherStatisticsListItem>
            <TeacherStatisticsListItem>
              <TeacherMainText>
                Lessons done: {teacher.lessons_done}
              </TeacherMainText>
            </TeacherStatisticsListItem>
            <TeacherStatisticsListItem>
              <svg width={16} height={16}>
                <use href={`${sprite}#icon-star`} />
              </svg>
              <TeacherMainText>Rating: {teacher.rating}</TeacherMainText>
            </TeacherStatisticsListItem>
            <TeacherStatisticsListItem>
              <TeacherMainText>
                Price / 1 hour:{" "}
                <TeacherMainTextPrice>
                  {teacher.price_per_hour}$
                </TeacherMainTextPrice>
              </TeacherMainText>
            </TeacherStatisticsListItem>
          </TeacherStatisticsList>
        </TeacherStatisticsWrapper>
        <TeacherTitle>
          {teacher.name} {teacher.surname}
        </TeacherTitle>
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

        <ReadMoreLink onClick={() => setIsReadMore(!isReadMore)}>
          {isReadMore ? "Read less" : "Read more"}
        </ReadMoreLink>
        {isReadMore && (
          <>
            <TeacherDescription>{teacher.experience}</TeacherDescription>
            <ReviewList reviews={teacher.reviews} />
            <Button
              variant="filters"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book trial lesson
            </Button>
          </>
        )}

        <TeacherLevelsList>
          {teacher.levels?.map((level) => (
            <TeacherLevelsItemItem key={level}>
              <TeacherLevelsItemText>#{level}</TeacherLevelsItemText>
            </TeacherLevelsItemItem>
          ))}
        </TeacherLevelsList>
      </TeacherCardContent>
      {isModalOpen &&
        createPortal(
          <AddToFavoriteMessage
            onClose={() => setIsModalOpen(false)}
            setIsLoginOpen={setIsLoginOpen}
          />,
          document.body
        )}
      {isBookingModalOpen &&
        createPortal(
          <BookingForm
            onClose={() => setIsBookingModalOpen(false)}
            setIsOpenSuccessMessage={setIsOpenSuccessMessage}
            teacher={teacher}
          />,
          document.body
        )}
      {isOpenSuccessMessage &&
        createPortal(
          <SuccessModal onClose={() => setIsOpenSuccessMessage(false)} />,
          document.body
        )}
      {isLoginOpen &&
        createPortal(
          <LoginForm onClose={() => setIsLoginOpen(false)} />,
          document.body
        )}
    </TeacherCard>
  );
};

export default TeacherListItem;
