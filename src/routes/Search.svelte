<script lang="ts">
  import CloseIcon from "./CloseIcon.svelte";
  import SearchIcon from "./SearchIcon.svelte";

  interface Props {
    /**
     * if true, automatically focus the input element
     */
    autofocus?: boolean;
    /**
     * the value of the input element
     */
    value?: string;
  }

  let { autofocus, value = $bindable("") }: Props = $props();
  let inputElement: HTMLInputElement;

  /**
   * Clear all text
   */
  export function clear() {
    value = "";
  }
</script>

<form action="/search" method="get" role="search" onreset={() => inputElement.focus()}>
  <div class="join shadow-md transition-shadow focus-within:shadow-lg">
    <label class="input join-item">
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
        name="q"
        minlength="1"
        bind:value
        bind:this={inputElement}
      />
      <button
        class={["btn", "btn-ghost", "btn-sm", "btn-square"]}
        class:invisible={value.length === 0}
        type="reset"
      >
        <span class="sr-only">clear search</span>
        <CloseIcon class="h-[1.2em] opacity-50" />
      </button>
    </label>
    <button class="btn join-item btn-primary" type="submit">Search</button>
  </div>
</form>
