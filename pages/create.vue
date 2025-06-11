<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const supabase = useNuxtApp().$supabase;
const router = useRouter();

const date = ref('');
const title = ref('');
const notes = ref('');

onMounted(async () => {
	const { data } = await supabase.auth.getSession();
	if (!data.session) {
		router.push('/admin-login');
	}
});

const handleSubmit = async () => {
	const { error } = await supabase
		.from('posts')
		.insert([{ date: date.value, title: title.value, notes: notes.value }]);

	if (error) {
		alert('Error submitting post: ' + error.message);
		console.error(error);
		return;
	}

	window.location.href = '/';
};
</script>

<template>
	<h2>Create a Post</h2>
	<form @submit.prevent="handleSubmit">
		<label for="date">Date:</label>
		<input id="date" type="date" v-model="date" required />

		<label for="title">Title:</label>
		<input id="title" type="text" v-model="title" placeholder="How'd today go?" required />

		<label for="notes">Notes:</label>
		<textarea id="notes" v-model="notes" placeholder="Details..." required></textarea>

		<input type="submit" value="Submit" />
	</form>
</template>
