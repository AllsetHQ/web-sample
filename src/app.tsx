import styled from 'styled-components'

export const App = styled(({ className }) => {
  return (
    <div className={className}>
      Heyo!
    </div>
  )
})`
  display: flex;
`
