<script setup lang="ts">
const email = ref('');
const password = ref('');
const supabase = useNuxtApp().$supabase;
const router = useRouter();

const login = async () => {
	const { error } = await supabase.auth.signInWithPassword({
		email: email.value,
		password: password.value
	});

	if (error) {
		alert('Login failed');
	} else {
		router.push('/create');
	}
};
</script>

<template>
	<form @submit.prevent="login">
		<input type="email" v-model="email" placeholder="Email" required />
		<input type="password" v-model="password" placeholder="Password" required />
		<input type="submit" value="Log in" />
	</form>
</template>
