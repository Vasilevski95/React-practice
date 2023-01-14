import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID ceaa39e9280fe36990043c3e56e624296fb0f87ad0305b00d4ae61f5a154f03a'
    }
});