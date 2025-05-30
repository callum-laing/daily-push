<script setup></script>

<template>
	<form>
		<fieldset class="grid">
			<input name="login" placeholder="Login" aria-label="Login" autocomplete="username" />
			<input
				type="password"
				name="password"
				placeholder="Password"
				aria-label="Password"
				autocomplete="current-password"
			/>
			<input type="submit" value="Log in" />
		</fieldset>
	</form>
</template>

<style scoped></style>
