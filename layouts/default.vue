<script setup></script>

<template>
	<div class="layout-root">
		<AppNavBar />
		<main class="page-content">
			<slot />
		</main>
	</div>
</template>

<style>
:global(body) {
	margin: 0;
	font-family: 'Inter', sans-serif;
	background-color: #121212;
	color: #e0e0e0;
}

.layout-root {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.page-content {
	flex: 1;
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	padding: 2em 1.5em;
}
</style>
