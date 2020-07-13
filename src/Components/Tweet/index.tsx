import React from 'react';

import {
  Container,
  Retweeted,
  Avatar,
  Header,
  Description,
  Body,
  Content,
  Dot,
  ImageContent,
  Icons,
  Status,
  RocketseatIcon,
  CommentIcon,
  LikeIcon,
  RetweetIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>27 de maio</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>

            <Status>
              <RetweetIcon />
              99
            </Status>

            <Status>
              <LikeIcon />
              45
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
