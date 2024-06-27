<template>
	<main>
		<p>Index page</p>
		<NuxtLink href="/about">Go About</NuxtLink>
	</main>
</template>

<script setup lang="ts">
	const { status } = await useLazyFetch('/api', {
		responseType: 'text'
	})

	watchEffect(() => {
		console.log(status.value)
	})
</script>
