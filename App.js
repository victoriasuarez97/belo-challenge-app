import { QueryClient, QueryClientProvider } from 'react-query'
import { QUERY_CLIENT_DEFAULT_OPTIONS } from './src/constants/currency'
import { BalanceContextProvider } from './src/context/BalanceContext'
import { Home } from './src/screens'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function App () {
  const queryClient = new QueryClient(QUERY_CLIENT_DEFAULT_OPTIONS)
  
  return (
    <QueryClientProvider client={queryClient}>
      <BalanceContextProvider>
        <Home />
      </BalanceContextProvider>
    </QueryClientProvider>
  )
}