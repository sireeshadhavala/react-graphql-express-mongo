const fetch = require('graphql-fetch')('http://localhost:4002/api');
export default function api(query, args) {
    return fetch(query, args);
};
