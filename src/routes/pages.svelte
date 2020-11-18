<script context="module">
  export function preload() {
    return this.fetch(`pages.json`)
      .then((r) => r.json())
      .then((pages) => {
        return { pages };
      });
  }
</script>

<script>
  export let pages;
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
    <li><a rel="prefetch" href="page/{page.slug}">{page.title.rendered}</a></li>
  {/each}
</ul>
