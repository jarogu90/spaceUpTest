import Service from './services/Service';

const SPACE_API_URL = 'http://localhost:4122'
const client = new Service('spacetest', SPACE_API_URL);

export default client;