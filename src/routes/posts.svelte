<script context="module">
    import { wp } from '../wordpress'

    export async function preload() {
        // TODO: Add pagination support
        const posts = await wp.posts().then((posts) => {
            return posts.filter((_, id) => id !== '_paging')
        })

        return { posts }
    }
</script>

<script>
    export let posts
</script>

<style>
    ul {
        margin: 0 0 1em 0;
        line-height: 1.5;
    }
</style>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
    {#each posts as post}
        <li>
            <a rel="prefetch" href="post/{post.slug}">
                {post.title.rendered}
            </a>
        </li>
    {/each}
</ul>
