<script context="module">
    import { wp } from '../wordpress'

    export async function preload() {
        // TODO: Add pagination support
        const pages = await wp.pages().then((pages) => {
            return pages.filter((_, id) => id !== '_paging')
        })

        return { pages }
    }
</script>

<script>
    export let pages
</script>

<style>
    ul {
        margin: 0 0 1em 0;
        line-height: 1.5;
    }
</style>

<svelte:head>
    <title>Pages</title>
</svelte:head>

<h1>Pages</h1>

<ul>
    {#each pages as page}
        <li>
            <a rel="prefetch" href="page/{page.slug}">
                {page.title.rendered}
            </a>
        </li>
    {/each}
</ul>
