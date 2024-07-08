import { fetchCharacterDetail } from '../../shared/api';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { Link, useLocation, useParams } from 'react-router-dom';

const Container = styled.div``;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.gray[50]};
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: ${(props) => props.theme.space[6]};
`;

const ChracterFilms = styled.ul`
  display: grid;
  gap: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[4]};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background: rgba(182, 189, 207, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.4px);
  -webkit-backdrop-filter: blur(9.4px);
  border: 1px solid rgba(53, 101, 242, 0.12);
`;

const ChracterFilm = styled.li``;

interface ChracterData {
  id: string;
  films: [string];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

const DetailPage = () => {
  const { characterId } = useParams<Record<string, string | undefined>>();

  const { isLoading, data } = useQuery({
    queryKey: ['characterDetail', characterId],
    queryFn: () => fetchCharacterDetail(`${characterId}`),
  });
  const { state } = useLocation();

  return (
    <Container>
      <Header>
        <Title>
          {state?.name ? state.name : isLoading ? 'Loading...' : data?.name}
        </Title>
      </Header>
      <Main>
        {isLoading ? (
          <Loader>Loading ...</Loader>
        ) : (
          <>
            <Link to={data.sourceUrl}>
              <Img src={`${data.imageUrl}`} alt={`${data.name}`} />
            </Link>
            <ChracterFilms>
              {data?.films.map((film: string) => (
                <ChracterFilm>{film}</ChracterFilm>
              ))}
            </ChracterFilms>
          </>
        )}
      </Main>
    </Container>
  );
};

export default DetailPage;
