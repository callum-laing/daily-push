<script setup lang="ts">
import { ref, onMounted } from 'vue';

const supabase = useNuxtApp().$supabase;
const posts = ref([]);

onMounted(async () => {
	const { data, error } = await supabase
		.from('posts')
		.select('*')
		.order('created_at', { ascending: false });

	if (error) {
		console.error('Error fetching posts:', error);
	} else {
		console.log('Fetched posts:', data);
	}

	posts.value = data ?? [];
});
</script>

<template>
	<div class="max-w-xl mx-auto mt-10">
		<h1 class="text-2xl mb-4">Entries</h1>

		<div v-for="post in posts" :key="post.id" class="mb-6 border p-4 rounded shadow">
			<p><strong>Date:</strong> {{ post.date }}</p>
			<p><strong>Title:</strong> {{ post.title }}</p>
			<p><strong>Notes:</strong> {{ post.notes }}</p>
		</div>

		<p v-if="posts.length === 0" class="italic text-gray-600">No entries yet. Create one!</p>
	</div>
</template>
