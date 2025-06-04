<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useEntriesStore } from '~/stores/entries';

const date = ref('');
const wins = ref('');
const struggles = ref('');
const notes = ref('');

const entriesStore = useEntriesStore();
const router = useRouter();

function handleSubmit() {
	entriesStore.addEntry({
		date: date.value,
		wins: wins.value,
		struggles: struggles.value,
		notes: notes.value
	});

	date.value = '';
	wins.value = '';
	struggles.value = '';
	notes.value = '';

	router.push('/');
}
</script>

<template>
	<h2>Create a Post.</h2>

	<form @submit.prevent="handleSubmit">
		<label for="date">Date:</label>
		<input id="date" type="date" v-model="date" required />

		<label for="wins">Wins:</label>
		<textarea
			id="wins"
			placeholder="Write about any wins you had today..."
			aria-label="paragraph about any wins"
			v-model="wins"
			required
		></textarea>

		<label for="struggles">Struggles:</label>
		<textarea
			id="struggles"
			placeholder="Write about any struggles you had today..."
			aria-label="paragraph about struggles"
			v-model="struggles"
			required
		></textarea>

		<label for="notes">Notes:</label>
		<textarea
			id="notes"
			placeholder="Write about anything else..."
			aria-label="additional info"
			v-model="notes"
			required
		></textarea>

		<input type="submit" value="Submit" />
	</form>
</template>

<style scoped></style>
