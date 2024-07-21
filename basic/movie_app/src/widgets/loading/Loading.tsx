import { LoadingWrapper } from './loading.styles';
import { Comment } from 'react-loader-spinner';

const Loading = () => {
  return (
    <LoadingWrapper>
      <Comment backgroundColor="red" width='100px' height='200px' />
    </LoadingWrapper>
  );
};

export default Loading;
