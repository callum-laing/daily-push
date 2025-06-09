<script setup lang="ts">
import { ref, onMounted } from 'vue';

const supabase = useNuxtApp().$supabase;
const posts = ref([]);

const formatDate = (dateStr: string) => {
	if (!dateStr) return '';
	const date = new Date(dateStr);
	return date.toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
};

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
	<div>
		<hr />
		<div class="entry-card" v-for="post in posts" :key="post.id">
			<p class="entry-date">{{ formatDate(post.date) }}</p>
			<p class="entry-title">{{ post.title }}</p>
			<p class="entry-notes">{{ post.notes }}</p>
		</div>

		<p v-if="posts.length === 0">No entries yet. Create one!</p>
	</div>
</template>

<style scoped>
.entry-card {
	border-radius: 5px;
	max-width: 600px;
	padding: 0.5em;
}

.entry-date,
.entry-title {
	font-weight: bold;
}

.entry-date {
	font-style: italic;
}
</style>
