<script setup></script>

<template>
	<nav class="container">
		<ul>
			<NuxtLink to="/">
				<li><strong>daily-push</strong></li>
			</NuxtLink>
		</ul>
		<ul>
			<li>
				<NuxtLink :to="{ name: 'create' }">Create Post</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped></style>
