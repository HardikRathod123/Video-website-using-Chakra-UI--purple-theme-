import React from 'react'
import { Avatar, Button, Container, Heading, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Signup = () => {
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
                  <Heading>Video Hub</Heading>
                  <Avatar
                      alignSelf={'center'}
                      boxSize='32'
                  ></Avatar>
                  <Input 
                      placeholder='Enter your name'
                      type={'name'}
                      required
                      focusBorderColor='purple.500'
                  />
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
                      colorScheme={'purple'}
                      type='submit'
                  >Sign Up</Button>

                  <Text
                      textAlign={'right'}
                  >ALready Signed Up? {' '}
                      <Button
                      variant={'link'}
                      colorScheme='purple'
                  >
                      <Link to={'/login'}>Login</Link>
                      </Button>
                  </Text>
                  

              </VStack>
      </form>    
    </Container>
  )
}

export default Signup
