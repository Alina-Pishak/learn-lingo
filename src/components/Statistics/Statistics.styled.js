import styled from "styled-components";

export const StatisticsContainer = styled.div`
  border: 1.5px dashed #9fbaae;
  border-radius: 30px;
  width: 1312px;
  margin: 0 auto;
`;

export const StatisticsList = styled.ul`
  /* width: 1312px; */
  /* height: 117px; */
  padding: 40px 122px;
  display: flex;
  align-items: center;
  gap: 100px;

  /* justify-content: space-around; */
  /* box-sizing: border-box; */
`;

export const StatisticsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StatisticsText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  max-width: 75px;
  letter-spacing: -0.02em;
  color: rgba(18, 20, 23, 0.7);
`;

export const StatisticsNumber = styled.span`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.02em;
  color: #121417;
`;
