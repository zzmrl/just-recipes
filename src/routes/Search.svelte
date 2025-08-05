<script lang="ts">
	import CloseIcon from './CloseIcon.svelte';

	interface Props {
		autofocus?: boolean;
	}

	const { autofocus }: Props = $props();
	let value = $state('');
	let inputElement: HTMLInputElement;

	/**
	 * Clear all text
	 */
	export function clear() {
		value = '';
	}
</script>

<form action="/search" method="get" role="search" onreset={() => inputElement.focus()}>
	<label
		class={[
			'input',
			'shadow-md',
			'transition-shadow',
			'focus-within:shadow-lg',
			'focus-within:outline-none'
		]}
	>
		<svg
			class="h-[1.5em] w-[1.5em] opacity-50"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			<g
				stroke-linejoin="round"
				stroke-linecap="round"
				stroke-width="2.5"
				fill="none"
				stroke="currentColor"
			>
				<circle cx="11" cy="11" r="8"></circle>
				<path d="m21 21-4.3-4.3"></path>
			</g>
		</svg>
		<span class="sr-only">search term</span>
		<!-- svelte-ignore a11y_autofocus -->
		<input
			{autofocus}
			autocomplete="off"
			autocapitalize="none"
			autocorrect="off"
			type="text"
			class="grow"
			placeholder="blueberry muffins"
			name="q"
			minlength="1"
			bind:value
			bind:this={inputElement}
		/>
		{#if value.length > 0}
			<button
				class="h-full cursor-pointer p-1 transition-colors hover:text-base-content/70"
				type="reset"
			>
				<CloseIcon class="h-[1em] w-[1em] opacity-50" />
			</button>
		{/if}
	</label>
	<button class="btn mt-6 w-40 btn-primary" type="submit">Search</button>
</form>
