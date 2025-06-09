<script setup></script>

<template>
	<div>
		<AppNavBar />
		<main class="container">
			<slot />
		</main>
	</div>
</template>

<style>
body {
	min-height: 100vh;
}
</style>
