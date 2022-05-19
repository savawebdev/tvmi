import styled from "styled-components";

const Card = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  border-radius: 10px;
`;

const Title = styled.span`
  font-weight: bold;
  margin-top: 10px;
`;

const HomeMovieCard = ({ data }) => {
  return (
    <Card>
      <Img src={`https://image.tmdb.org/t/p/w200${data.poster_path}`} alt="" />
      <Title>{data.title || data.name}</Title>
    </Card>
  );
};

export default HomeMovieCard;
