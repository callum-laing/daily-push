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
	<div class="flex-container">
		<p class="intro">
			<i>This is where I log my bursts of productivity, powered by guilt and caffeine..</i>
		</p>
		<hr />
		<div class="entry-card" v-for="post in posts" :key="post.id">
			<h4 class="entry-title">{{ post.title }}</h4>
			<p class="entry-date">{{ formatDate(post.date) }}</p>
			<p class="entry-notes">{{ post.notes }}</p>
			<hr />
		</div>

		<p v-if="posts.length === 0">No entries yet. Create one!</p>
	</div>
</template>

<style scoped>
.flex-container {
	display: grid;
	align-items: center;
	justify-items: center;
}
.entry-card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 5px;
	max-width: 800px;
	padding: 0.5em;
	margin: 2em 0;
}

.entry-date,
.entry-title {
	font-weight: bold;
}

.entry-date {
	font-style: italic;
}
</style>
