const BASE_URL = 'https://api.coingecko.com/api/v3/'
const TIMEOUT = 1000
const QUERY_CLIENT_DEFAULT_OPTIONS = {
    queries: {
        retry: false,
        refetchOnWindowFocus: false
    }
}

export const COINS = {
    bitcoin: 'bitcoin',
    dai: 'dai',
    ethereum: 'ethereum',
    tether: 'tether'
}

export {
    BASE_URL,
    TIMEOUT,
    QUERY_CLIENT_DEFAULT_OPTIONS
}

