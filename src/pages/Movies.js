import Grid from "../components/Utils/Grid";
import MovieShowCard from "../components/Utils/MovieShowCard";
import PageContainer from "../components/Utils/PageContainer";
import PageTitle from "../components/Utils/PageTitle";

const Movies = ({ data }) => {
  return (
    <PageContainer>
      <PageTitle>Movies</PageTitle>
      <Grid>
        {data.map((movie) => (
          <MovieShowCard key={movie.id} data={movie} />
        ))}
      </Grid>
    </PageContainer>
  );
};

export default Movies;
