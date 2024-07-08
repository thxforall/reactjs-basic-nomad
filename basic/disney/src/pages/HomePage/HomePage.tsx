import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { fetchCharacters } from '../../shared/api';

const Container = styled.div``;

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

const CharacterList = styled.ul`
  display: grid;
  gap: ${(props) => props.theme.space[8]};
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: auto;
`;

const Character = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[4]};
  gap: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &:hover {
    background: rgba(255, 255, 255, 0.096);
  }
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: ${(props) => props.theme.space[6]};
`;

const ImgName = styled.span`
  font-size: 1.2rem;
`;

interface ICharacter {
  id: string;
  name: string;
  imageUrl: string;
}

interface RouterState {
  state: {
    name: string;
  };
}

const HomePage = () => {
  const { isLoading, data } = useQuery<ICharacter[]>({
    queryKey: ['allCharacters'],
    queryFn: fetchCharacters,
    select: (data) => data.slice(0, 20),
  });
  const { state } = useLocation() as RouterState;

  return (
    <Container>
      <Header>
        <Title>Disney Character</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading ...</Loader>
      ) : (
        <CharacterList>
          {data?.map((character) => (
            <Link
              to={`/characters/${character.id}`}
              state={{ id: character.id }}
            >
              <Character key={character.id}>
                <Img src={`${character.imageUrl}`} alt={`${character.name}`} />
                <ImgName>{character.name}</ImgName>
              </Character>
            </Link>
          ))}
        </CharacterList>
      )}
    </Container>
  );
};

export default HomePage;
