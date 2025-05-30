<script setup></script>

<template>
	<h2>Create a Post.</h2>

	<form action="">
		<label for="">Date:</label>
		<input type="date" />

		<label for="">Wins:</label>
		<textarea
			name="bio"
			placeholder="Write about any wins you had today..."
			aria-label="paragraph about any wins"
		></textarea>

		<label for="">Struggles:</label>
		<textarea
			name="bio"
			placeholder="Write about any struggles you had today..."
			aria-label="paragraph about struggles"
		></textarea>

		<label for="">Notes:</label>
		<textarea
			name="bio"
			placeholder="Write about anything else..."
			aria-label="additional info"
		></textarea>
	</form>
</template>

<style scoped></style>
