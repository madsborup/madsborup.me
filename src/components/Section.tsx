import React from 'react'
import styled from 'styled-components'
import tokens from './designSystem/tokens'

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  max-width: ${tokens.CONTENT_WIDTH}px;
  width: 100%;
`;

const Section: React.FC = ({children}) => {
  return (
    <StyledSection>
      {children}
    </StyledSection>
  )
}

export default Section
