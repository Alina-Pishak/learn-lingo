import styled from "styled-components";

export const ReviewCard = styled.li`
  display: grid;
  grid-template-columns: 44px auto;
  grid-template-rows: 24px 18px 36px;
  grid-column-gap: 12px;
  grid-row-gap: 4px;
  margin-bottom: 32px;
`;

export const ReviewImg = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 100px;
  grid-column: 1/2;
  grid-row: 1/2;
`;

export const ReviewRatingWrapper = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const ReviewRatingName = styled.p`
  grid-column: 2/3;
  grid-row: 1/2;
  font-size: 16px;
  font-weight: 500;
  color: #8a8a89;
`;
export const ReviewRatingComment = styled.p`
  grid-column: 1/3;
  grid-row: 3/4;
  font-size: 16px;
  font-weight: 500;
  margin-top: 12px;
  line-height: 1.5;
  /* line-height: 24px; */
  /* text-align: left; */
  /* text-underline-position: from-font; */
  /* text-decoration-skip-ink: none; */
`;
export const ReviewRating = styled.span`
  font-size: 14px;
  font-weight: 500;
  /* text-align: left; */
  /* text-underline-position: from-font; */
  /* text-decoration-skip-ink: none; */
  color: #121417;
`;
