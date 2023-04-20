<template>
    <div class="container">
        <ContentList path="/projects">
            <template v-slot="{ list }">
                <div v-for="project in list" :key="project._path" class="container__item">
                    <NuxtLink :to="project._path">
                        <nuxt-img
                            v-if="project.image"
                            :src="project.image"
                            sizes="sm:100vw md:50vw lg:300px" />
                        <div
                            v-else
                            class="fallback-placeholder"
                        />
                        <div class="container__item__overlay_fade"></div>
                        <div class="container__item__overlay">
                            {{ project.title }}
                        </div>
                    </NuxtLink>
                </div>
            </template>
            <template #not-found>
                <p>No projects found.</p>
            </template>
        </ContentList>
    </div>
</template>

<script setup>

</script>

<style>
.home-links a {
    margin-right: 1rem;
}

.container {
    display: inline-flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-start;
}

.container .container__item {
    position: relative;
    /* aspect-ratio: 0.6; */
    /* width: 550px;
    height: 860px; */
    flex: 0 1 auto;
    overflow: hidden;
    cursor: pointer;
}

.container__item__overlay {
    position: absolute;

    font-size: 36px;
    color: rgb(0, 0, 0);

    bottom: -10px;
    transition: all 0.25s ease-in-out;
    max-width: 100%;
    padding: 0 16px;
    font-weight: 700;

    line-height: 42px;
    opacity: 0;
}

.container__item__overlay_fade {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    transition: all 0.25s ease-in-out;
    background-color: rgb(246, 244, 244);
    opacity: 0;
}

.container__item:hover .container__item__overlay {
    bottom: 50px;
    opacity: 1;
}

.container__item:hover .container__item__overlay_fade {
    opacity: 1;
}

.fallback-placeholder {
    width: 300px;
    height: 500px;
    background: grey;
}

@media (max-width: 768px) {
    .container {
        width: 100%;

        align-items: center;
        justify-content: center;
    }

    .container__item {
        width: 100%;
    }

    .fallback-placeholder {
        width: 100%;
    }
}
</style>