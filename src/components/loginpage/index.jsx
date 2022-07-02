import React from 'react'
import { Container,Wrapper,Input,Button } from './style'

const SignIn = () => {
  return (
    <Container>
        <Wrapper>
          <h1 className='title'>Sign In</h1>
          <Input type="placeholder" placeholder='email'></Input>
          <Input type="placeholder" placeholder='password'></Input>
          <Button>Login</Button>
        </Wrapper>
    </Container>
  )
}

export default SignIn