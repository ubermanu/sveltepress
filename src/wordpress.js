import WPAPI from 'wpapi'

export const wp = new WPAPI({
    endpoint: 'http://localhost:8080/index.php?rest_route=',
})
