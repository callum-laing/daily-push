<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Post {
	id: number | string;
	title: string;
	date: string;
	notes: string;
}

const supabase = useNuxtApp().$supabase;
const posts = ref<Post[]>([]);

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
	background-color: #121212;
	color: #e0e0e0;
	padding: 2em;
	max-width: 900px;
	margin: 0 auto;
}

.intro {
	color: #8be9fd;
	font-size: 1.1em;
	margin-bottom: 1em;
}

.entry-card {
	background-color: #1e1e2f;
	border-radius: 10px;
	padding: 1em 1.5em;
	margin: 2em 0;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.entry-title {
	color: #ff79c6;
	font-size: 1.3em;
	margin-bottom: 0.2em;
}

.entry-date {
	font-style: italic;
	color: #aaa;
	font-size: 0.9em;
}

.entry-notes {
	margin-top: 0.5em;
	line-height: 1.6;
}
</style>
