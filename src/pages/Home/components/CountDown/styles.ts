import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem; // 160px
  line-height: 8rem; // 128px
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem; // 16px

  span {
    background: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;

    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${({ theme }) => theme['gray-500']};

  width: 4rem; // 64px
  overflow: hidden;
  display: flex;
  justify-content: center;
`
