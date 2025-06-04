<!-- <script setup></script>

<template>
	<h2>Blogging my journey through Web Development.</h2>

	<div class="content">
		<article class="day">
			<h4>03.06.25</h4>
			<p>Wins: I survived another day.</p>
			<p>Struggles: Maintaining a consistent routine of coding everyday is extremely challenging. Though I'm still studying over the weekends, I'm not physically coding as I'm rarely at home over the weekends.</p>
			<p>Notes: I really need to try and do at least 30 minutes of coding a day, even if it's just adding a function, or even some styling to my apps.</p>
		</article>
		<article class="day">
			<h4>Date: 31.05.25</h4>
			<p>
				Wins: I've managed to get the bare bones setup so far, create post/admin login will be
				linked together with Auth eventually.
			</p>
			<p>Struggles: Finding the time to sit and code for an hour has been challenging.</p>
			<p>Notes: N/A</p>
		</article>
		<article class="day">
			<h4>Date: 29/05/25</h4>
			<p>Wins: Started my first Nuxt project!</p>
			<p>Struggles: Struggled starting my first Nux project!</p>
			<p>
				Notes: Got off to a good start at least.. the files are setup, my README is done and I am
				feeling confident.
			</p>
		</article>
	</div>
</template>

<style scoped></style> -->

<script setup lang="ts">
import { useEntriesStore } from '~/stores/entries';

const entriesStore = useEntriesStore();
</script>

<template>
	<div class="max-w-xl mx-auto mt-10">
		<h1 class="text-2xl mb-4">Entries</h1>
		<div
			v-for="(entry, index) in entriesStore.entries"
			:key="entry.date + index"
			class="mb-6 border p-4 rounded shadow"
		>
			<p><strong>Date:</strong> {{ entry.date }}</p>
			<p><strong>Wins:</strong> {{ entry.wins }}</p>
			<p><strong>Struggles:</strong> {{ entry.struggles }}</p>
			<p><strong>Notes:</strong> {{ entry.notes }}</p>
		</div>
		<p v-if="entriesStore.entries.length === 0" class="italic text-gray-600">
			No entries yet. Create one!
		</p>
	</div>
</template>
