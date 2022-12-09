import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem; // 56px

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem; // 36px
    color: ${({ theme }) => theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem; // 32px

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${({ theme }) => theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme['gray-100']};
      font-size: 0.875rem; // 14px
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:first-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${({ theme }) => theme['gray-700']};
      border-top: 4px solid ${({ theme }) => theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem; // 14px
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:first-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  green: 'yellow-500',
  red: 'yellow-500',
  yellow: 'yellow-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}
export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem; // 8px
    height: 0.5rem; // 8px
    border-radius: 999px;
    background-color: ${({ theme, statusColor }) =>
      theme[STATUS_COLORS[statusColor]]};
  }
`
