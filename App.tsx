import React from 'react'
import { Box, NativeBaseProvider } from 'native-base'
import { Provider as ReduxProvider } from 'react-redux'
import { UserList } from './src/screens/UserList'
import store from './src/store'

export default function App() {
  return (
    <NativeBaseProvider>
      <ReduxProvider store={store}>
        <Box flex={1} alignItems='center' justifyContent='center'>
          <UserList />
        </Box>
      </ReduxProvider>
    </NativeBaseProvider>
  )
}
