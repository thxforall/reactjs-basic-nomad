import { useMatch, useNavigate } from 'react-router-dom';
import {
  ModalImgSection,
  ModalInfoList,
  ModalInfoListItem,
  ModalInfoOverview,
  ModalInfoSection,
  ModalInfoTitle,
  ModalOverlay,
  ModalWrapper,
} from './modal.styles';
import { useMovieById } from '../hooks/useMovies';
import { makeBgPath } from '../../api';
import Loading from '../../widgets/loading/Loading';

const MovieModal = () => {
  const movieIdPathMatch = useMatch('/movie/:movieId');
  const movieId = movieIdPathMatch?.params?.movieId;
  const { data, isLoading } = useMovieById(Number(movieId));
  const navigate = useNavigate();
  const exitModal = () => {
    navigate(-1);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ModalOverlay onClick={exitModal}>
          <ModalWrapper
            layoutId={movieIdPathMatch?.params.movieId}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalImgSection
              imgPath={makeBgPath(data?.backdrop_path ?? ``)}
            ></ModalImgSection>
            <ModalInfoSection>
              <ModalInfoTitle>{data?.title}</ModalInfoTitle>
              <ModalInfoOverview>{data?.overview}</ModalInfoOverview>
              <ModalInfoList>
                <ModalInfoListItem>
                  Release Date : {data?.release_date}
                </ModalInfoListItem>
                <ModalInfoListItem>
                  Genres : {data?.genres.map((genre) => genre.name + ' ')}
                </ModalInfoListItem>
                <ModalInfoListItem>
                  Vote Average : {data?.vote_average}
                </ModalInfoListItem>
                <ModalInfoListItem>
                  Vote Count : {data?.vote_count}
                </ModalInfoListItem>
              </ModalInfoList>
            </ModalInfoSection>
          </ModalWrapper>
        </ModalOverlay>
      )}
    </>
  );
};

export default MovieModal;
