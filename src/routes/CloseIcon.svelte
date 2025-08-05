<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	type Props = Pick<SVGAttributes<HTMLElement>, 'class'>;

	let props: Props = $props();
</script>

<svg class={props.class} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
	<path
		d={'M13.254 3.754a.713.713 0 00-1.008-1.008L8 6.992 3.754 2.746a.713.713 0 00-1.008 ' +
			'1.008L6.992 8l-4.246 4.246a.713.713 0 001.008 1.008L8 9.008l4.246 4.246a.713.713 ' +
			'0 001.008-1.008L9.008 8l4.246-4.246z'}
		fill="currentColor"
	/>
</svg>
