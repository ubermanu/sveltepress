import WPAPI from 'wpapi'

// TODO: Create a store to access this endpoint
var wp = new WPAPI({
    endpoint: 'http://localhost:8080/index.php?rest_route=',
})

export async function get(req, res) {
    // TODO: Add pagination support
    const pages = await wp.pages().then((pages) => {
        return pages.filter((_, id) => id !== '_paging')
    })

    const contents = JSON.stringify(pages)

    res.writeHead(200, {
        'Content-Type': 'application/json',
    })

    res.end(contents)
}
