import styled, { css } from 'styled-components';
import get from 'lodash/get';

const ButtonGhost = css`
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.contrastText`);
  }};
  background-color: ${(props) => {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  border-radius: 8px;
  ${function(props) {
    console.log('<Button />', props.variant, props.theme, get(props.theme, `colors.${props.variant}.color`));
    if(props.ghost) {
      return ButtonGhost;
    }
    return ButtonDefault;
  }}
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${(props) => props.theme.borderRadius};
  &:hover,
  &:focus {
      opacity: .5;
  }
`;