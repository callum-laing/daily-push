<script setup lang="ts">
const supabase = useNuxtApp().$supabase;
const session = ref(null);

onMounted(async () => {
	const { data } = await supabase.auth.getSession();
	session.value = data.session;
});
</script>

<template>
	<nav class="container">
		<ul>
			<NuxtLink to="/">
				<li><strong>daily-push</strong></li>
			</NuxtLink>
		</ul>
		<ul>
			<li v-if="session"><NuxtLink to="/create">Create Post</NuxtLink></li>
			<li v-else><NuxtLink to="/admin-login">Admin Login</NuxtLink></li>
		</ul>
	</nav>
</template>

<style scoped>
nav.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1em 2em;
	background-color: #1e1e2f;
	border-bottom: 1px solid #444;
	color: #e0e0e0;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
}

ul {
	display: flex;
	gap: 1.5em;
	list-style: none;
	padding: 0;
	margin: 0;
}

a {
	color: #8be9fd;
	text-decoration: none;
	font-weight: bold;
	transition: color 0.2s ease-in-out;
}

a:hover {
	color: #ff79c6;
}
</style>
