/* eslint-disable react/prop-types */
import sprite from "../../images/symbol-defs.svg";
import {
  ReviewCard,
  ReviewImg,
  ReviewRating,
  ReviewRatingComment,
  ReviewRatingName,
  ReviewRatingWrapper,
} from "./ReviewList.styled";

const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review, index) => (
        <ReviewCard key={index}>
          <ReviewImg
            src="/src/images/no-photo.jpeg"
            alt={review.reviewer_name}
            width={44}
            height={44}
          />
          <ReviewRatingName>{review.reviewer_name}</ReviewRatingName>
          <ReviewRatingWrapper>
            <svg width={16} height={16}>
              <use href={`${sprite}#icon-star`} />
            </svg>
            <ReviewRating>{review.reviewer_rating}</ReviewRating>
          </ReviewRatingWrapper>
          <ReviewRatingComment>{review.comment}</ReviewRatingComment>
        </ReviewCard>
      ))}
    </ul>
  );
};

export default ReviewList;
