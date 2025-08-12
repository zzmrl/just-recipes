<script lang="ts">
	import CloseIcon from './CloseIcon.svelte';
	import SearchIcon from './SearchIcon.svelte';

	interface Props {
		/**
		 * if true, automatically focus the input element
		 */
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
	<div class="join">
		<label
			class={[
				'join-item',
				'input',
				'shadow-md',
				'transition-shadow',
				'focus-within:shadow-lg',
				'focus-within:outline-none'
			]}
		>
			<SearchIcon class="h-[1.5em] opacity-50" />
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
					class={[
						'h-full',
						'cursor-pointer',
						'p-1',
						'text-base-content/70',
						'transition-colors',
						'hover:text-base-content'
					]}
					type="reset"
				>
					<CloseIcon class="h-[1em] font-bold opacity-50" />
				</button>
			{/if}
		</label>
		<button class="btn btn-primary join-item" type="submit">Search</button>
	</div>
	
</form>
