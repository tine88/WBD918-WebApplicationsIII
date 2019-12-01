<template>
<div>
    <article class="article-row">
        <div class="article-row-content">
            <h1 class="article-row-content-header">I'm an entry title</h1>

            <p class="article-row-content-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quia sit ullam, assumenda et. est at. Minima cum enim, vero eligendi perspiciatis similique modi voluptatem officia fugiat.</p>

            <p class="article-row-content-author">By author xy</p>
            <time class="article-row-content-time" datetime="2019-11-30 14:00">30.11.2019</time>
        </div>
    </article>
</div>
</template>

<script>
    export default {
        name: "Entry"
}
</script>

<style lang="scss" scoped>
    article {
        margin: auto;
        margin-top: 2rem;
        max-width: 80%;
    }
    
    .article-row {
        display: flex;
        flex-direction: column;
        border-top: 1px solid grey;
        padding: 1.5rem 0;
    }

    .article-row-content {
        padding: 1.5rem 0 0;
    }

    .article-row-content-header {
    font-size: 1.5rem;
    }

    .article-row-content-description {
    font-size: 1.25rem;
    }

    .article-row-content-author,
    .article-row-content-time {
    font-size: 0.8rem;
    margin-bottom: 0;
    color: grey;
    }

    .article-row-content {
        order: 2;
        padding: 0 1.5rem 0 0;
    }

</style>
