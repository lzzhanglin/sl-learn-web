const DEV_URL = 'http://localhost:8081'
const PROD_URL = 'http://106.53.150.77:8081'
export const SERVER_URL = process.env.NODE_ENV === 'production' ? PROD_URL : DEV_URL
