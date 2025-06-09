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
