import * as eva from '@eva-design/eva'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { QueryClient, QueryClientProvider } from 'react-query'
import { VIEWS } from './src/constants/common'
import { QUERY_CLIENT_DEFAULT_OPTIONS } from './src/constants/currency'
import { BalanceContextProvider } from './src/context/Balance'
import { Confirmation, Home, Result, Swap } from './src/screens'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App () {
  const queryClient = new QueryClient(QUERY_CLIENT_DEFAULT_OPTIONS)

  const Stack = createNativeStackNavigator()
  
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <QueryClientProvider client={queryClient}>
            <BalanceContextProvider>
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name={VIEWS.HOME} component={Home} options={{ headerShown: false }} />
                  <Stack.Screen name={VIEWS.SWAP} component={Swap} options={{ headerShown: false }} />
                  <Stack.Screen name={VIEWS.CONFIRMATION} component={Confirmation} options={{ headerShown: false }} />
                  <Stack.Screen name={VIEWS.RESULT} component={Result} options={{ headerShown: false }} />
                </Stack.Navigator>
              </NavigationContainer>
            </BalanceContextProvider>
        </QueryClientProvider>
      </ApplicationProvider>
    </>
  )
}