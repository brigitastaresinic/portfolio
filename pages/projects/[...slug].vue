<template>
    <NuxtLayout>
        <ProjectsList v-if="isIndex" />
        <ContentDoc v-else />
    </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const isIndex = route.path === '/projects'
</script>
