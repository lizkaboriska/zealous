import styled from 'styled-components'
import { Panel, Input, InputType } from '@zealous/ui'

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #f4f4f4;
`

export function LoginPage() {
  return (
    <Layout>
      <Panel>
        <Input placeholder='email' type={InputType.EMAIL} />
      </Panel>
    </Layout>
  )
}