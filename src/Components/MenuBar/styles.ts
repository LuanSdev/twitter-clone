import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  FavoriteBorder,
  Email,
  ExitToApp,
  Person,
  Rocketseat,
} from '../../styles/icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Rocketseat)`
  width: 41px;
  height: 41px;

  margin-bottom: 20px;

  > path {
    fill: var(--twitter);
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: var(--white);

  > span {
    display: none;
  }

  padding: 8.25px 15px;
  outline: 0;

  cursor: pointer;
  border-radius: 25px;

  &:hover {
    background: var(--twitter-dark-hover);
  }

  &:hover,
  &.active {
    span,
    svg {
      color: var(--twitter);
      fill: var(--twitter);
    }
  }

  & + button {
    margin-top: 16px;
  }

  & + button:last-child {
    margin-top: 36px;
    width: 40px;
    height: 40px;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: unset;

      > span {
        display: inline;
      }
    }
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }
  }
`;

export const BotSide = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      font-weight: normal;
      color: var(--gray);
    }
  }
`;

const iconsCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconsCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconsCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconsCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconsCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconsCSS}
`;

export const ExitIcon = styled(ExitToApp)`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;

    width: 25px;
    height: 25px;
    color: var(--white);
    margin-left: 30px;

    cursor: pointer;

    &:hover {
      > path {
        color: var(--like);
      }
    }
  }
`;
