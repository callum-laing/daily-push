import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin(() => {
	const supabaseUrl = 'https://wnrbqnkwtxzvcupqxazp.supabase.co';
	const supabaseKey =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InducmJxbmt3dHh6dmN1cHF4YXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk0OTkyMzUsImV4cCI6MjA2NTA3NTIzNX0.MXXLiqPrhW-TR1yihwMBbvcCfPiI7R0JHmkE5DCxuoM';
	const supabase = createClient(supabaseUrl, supabaseKey);

	return {
		provide: {
			supabase
		}
	};
});
