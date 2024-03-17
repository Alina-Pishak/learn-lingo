import {
  StatisticsItem,
  StatisticsList,
  StatisticsNumber,
  StatisticsText,
} from "./Statistics.styled";

const Statistics = () => {
  return (
    <StatisticsList className="container">
      <StatisticsItem>
        <StatisticsNumber>32,000+</StatisticsNumber>
        <StatisticsText>Experienced tutors</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsNumber>300,000+</StatisticsNumber>
        <StatisticsText>5-star tutor reviews</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsNumber>120+</StatisticsNumber>
        <StatisticsText>Subjects taught</StatisticsText>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsNumber>200+</StatisticsNumber>
        <StatisticsText>Tutor nationalities</StatisticsText>
      </StatisticsItem>
    </StatisticsList>
  );
};

export default Statistics;
