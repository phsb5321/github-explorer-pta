// useState ✔ 
// useRef ✔ 
// useEffect ✔

import { Button, Center, Grid, Input, Spinner } from "@chakra-ui/react"
import { useEffect, useRef, useState } from 'react';

import { UserCard } from './components/UserCard';
import { api } from './services/api';

function App() {

  const numOfSearchs = useRef(1)

  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState({});
  const [hasUser, setHasUser] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    const fetchFirstUser = async function () {
      const inputBtn = document.getElementById("BUTTON")
      setInputValue("phsb5321")
      await inputBtn.click()
    }

    fetchFirstUser()
  }, [])

  const handleNumOfSearchs = () => {
    numOfSearchs.current++;
  };

  const handleSubmit = async function (event) {
    event.preventDefault()

    handleNumOfSearchs()
    setIsLoading(true);
    if (inputValue === "")
      return

    try {
      const res = await api.get(`/${inputValue}`)
      const { data } = res
      setUserData(data)
      setIsLoading(false)
      setHasUser(true)
    } catch (error) {
      console.log(error)
    }
    setInputValue("")
  }

  return (
    <Grid templateRows="80vh 10vh" gap={6}>

      {hasUser && <UserCard userData={userData} />}
      {!hasUser && isLoading &&
        <Center marginTop="15rem">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      }



      {/* INPUT FORM || TODO -> CREATE COMPONENT */}
      <form onSubmit={e => handleSubmit(e)} width="100%">
        <Center
          marginBottom="5rem">
          <Input
            in="INPUT"
            placeholder="Search for a github user"
            width="70%"
            margin="1"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <Button
            id="BUTTON"
            onClick={e => handleSubmit(e)}
            colorScheme="green"> Submit n° {numOfSearchs.current}
          </Button>
        </Center>
      </form>


    </Grid>

  );
}

export default App;
