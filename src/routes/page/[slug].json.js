import WPAPI from 'wpapi'

// TODO: Create a store to access this endpoint
var wp = new WPAPI({
    endpoint: 'http://localhost:8080/index.php?rest_route=',
})

export async function get(req, res, next) {
    // the `slug` parameter is available because
    // this file is called [slug].json.js
    const { slug } = req.params

    const page = await wp
        .pages()
        .slug(slug)
        .then((data) => (data.length > 0 ? data[0] : null))

    if (page) {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        })

        res.end(JSON.stringify(page))
    } else {
        res.writeHead(404, {
            'Content-Type': 'application/json',
        })

        res.end(
            JSON.stringify({
                message: `Not found`,
            })
        )
    }
}
