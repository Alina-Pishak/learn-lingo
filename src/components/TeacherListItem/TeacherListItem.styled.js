import styled from "styled-components";

export const TeacherCard = styled.li`
  display: flex;
  gap: 48px;
  border-radius: 24px;
  padding: 24px;
  width: 1184px;
  /* height: 328px; */
  background-color: #fff;
  position: relative;
  margin-bottom: 32px;
`;

export const TeacherImgWrapper = styled.div`
  border: 3px solid #fbe9ba;
  border-radius: 100px;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeacherImg = styled.img`
  border-radius: 100px;
  width: 96px;
  height: 96px;
`;

export const TeacherCardContent = styled.div``;

export const TeacherFavoriteBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
`;

export const TeacherStatisticsWrapper = styled.div`
  display: flex;
  gap: 192px;
`;

export const TeacherStatisticsList = styled.ul`
  display: flex;
  gap: 32px;
`;

export const TeacherTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  color: #121417;
  margin-top: 8px;
  margin-bottom: 32px;
`;

export const TeacherDescriptionList = styled.ul`
  margin-bottom: 8px;
`;

export const TeacherDescriptionItem = styled.li`
  margin-bottom: 8px;
`;

export const TeacherMainText = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const TeacherDescription = styled.p`
  font-size: 16px;
  color: #121417;
  /* display: inline-block; */
  width: 900px;
  margin-bottom: 32px;
  margin-top: 16px;
`;

export const TeacherSecondText = styled(TeacherMainText)`
  color: #8a8a89;
`;

export const ReadMoreLink = styled(TeacherMainText)`
  text-decoration: underline;
`;

export const TeacherLevelsList = styled.ul`
  margin-top: 32px;
  display: flex;
  gap: 8px;
`;
export const TeacherLevelText = styled.p``;
export const TeacherFavoriteIcon = styled.svg`
  width: 26px;
  height: 26px;
  fill: ${({ $isFavorite }) => ($isFavorite ? "red" : "white")};
  stroke: ${({ $isFavorite }) => ($isFavorite ? "red" : "black")};
`;
