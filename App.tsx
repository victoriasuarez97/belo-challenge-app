import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { QUERY_CLIENT_DEFAULT_OPTIONS } from './src/constants/api'
import { BalanceContextProvider } from './src/context/Balance'
import { Confirmation, Home, Result, Swap } from './src/screens'
import { RootStackParamList } from './src/types'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App () {
  const queryClient = new QueryClient(QUERY_CLIENT_DEFAULT_OPTIONS)

  const Stack = createNativeStackNavigator<RootStackParamList>()
  
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <QueryClientProvider client={queryClient}>
            <BalanceContextProvider>
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                  <Stack.Screen name="Swap" component={Swap} options={{ headerShown: false }} />
                  <Stack.Screen name="Confirmation" component={Confirmation} options={{ headerShown: false }} />
                  <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
                </Stack.Navigator>
              </NavigationContainer>
            </BalanceContextProvider>
        </QueryClientProvider>
      </ApplicationProvider>
    </>
  )
}