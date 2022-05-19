import Grid from "../components/Utils/Grid";
import MovieShowCard from "../components/Utils/MovieShowCard";
import PageContainer from "../components/Utils/PageContainer";
import PageTitle from "../components/Utils/PageTitle";

const Shows = ({ data }) => {
  return (
    <PageContainer>
      <PageTitle>TV Shows</PageTitle>
      <Grid>
        {data.map((show) => (
          <MovieShowCard key={show.id} data={show} />
        ))}
      </Grid>
    </PageContainer>
  );
};

export default Shows;
