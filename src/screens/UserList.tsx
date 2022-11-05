import React from 'react'
import { View } from 'react-native'
import { HStack, Spinner, Heading,  } from 'native-base'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

function Loading() {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading users" color="primary.500" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  )
}

function Error() {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Error on loading users" color="red.700" />
      <Heading color="red.700" fontSize="md">
          ERROR
      </Heading>
    </HStack>
  )
}


function Success() {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Users loaded" color="green.700" />
      <Heading color="green.700" fontSize="md">
          Success
      </Heading>
    </HStack>
  )
}

export function UserList() {
  const screenState = useSelector((state: RootState) => state.userList)
  return (
    <View>
      {screenState.loading && <Loading />}
      {screenState.error && <Error />}
      {!screenState.loading && !screenState.error && <Success />}
    </View>
  )
}