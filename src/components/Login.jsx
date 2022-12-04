import { Button, Container, Heading, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    function PasswordInput() {
        const [show, setShow] = React.useState(false)
        const handleClick = () => setShow(!show)
      
        return (
          <InputGroup size={'md'}>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        )
      }
  return (
      <Container
          maxW={'container.xl'}
          h='100vh'
          p='16'
      >
          <form>
              <VStack
                  alignItems={'stretch'}
                  spacing='8'
                  w={['full','96']}
                  m='auto'
                  my='16'
              >
                  <Heading>Welcome Back</Heading>
                  <Input 
                      placeholder='Email'
                      type={'email'}
                      required
                      focusBorderColor='purple.500'
                  />
                                    {/* <Input 
                      placeholder='Password'
                      type={show ? 'text' : 'password'}
                      required
                      focusBorderColor='purple.500'
                  /> */}
                  <PasswordInput />
                  
                  <Button
                      variant={'link'}
                      alignSelf='flex-end'
                  >
                      <Link to={'/forgotpassword'}>Forgot Password?</Link>
                  </Button>
                  <Button
                      colorScheme={'purple'}
                      type='submit'
                  >Log In</Button>

                  <Text
                      textAlign={'right'}
                  >New User? {' '}
                      <Button
                      variant={'link'}
                      colorScheme='purple'
                  >
                      <Link to={'/signup'}>Signup</Link>
                      </Button>
                  </Text>
                  

              </VStack>
      </form>    
    </Container>
  )
}

export default Login
