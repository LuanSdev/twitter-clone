import styled from 'styled-components';

interface IProps {
  outlined?: boolean;
}

export default styled.button<IProps>`
  background: ${(props) =>
    props.outlined === true ? 'transparent' : 'var(--twitter)'};

  color: ${(props) =>
    props.outlined === true ? 'var(--twitter)' : 'var(--white)'};

  border: ${(props) => props.outlined === true && '1px solid var(--twitter)'};

  padding: 26px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${(props) =>
      props.outlined === true ? 'var(--twitter-dark-hover)' : 'var(--light)'};
  }
`;
