import styled from 'styled-components'
import tokens from './tokens'

export default styled.p`
  font-size: ${tokens.font.size.regular};
  color: ${tokens.colors.text};
  font-weight: 400;
  margin-bottom: ${tokens.spacing.medium}px;
`;