<script>
    import {TextField, Button} from 'svelte-materialify';

    $: value = '';

    let email = '',
        name = '',
        error = null;

    const onSubmit = e => {

    };

    const onBtnClicked = e => {

    };

</script>

<style>

    .mail-wrapper {
        position: relative;
        top: 3rem;
        width: 100vw;
        height: calc(100vh - 3rem);
    }

    .mail-content {
        position: relative;
        margin: auto;
    }

    .mail-form {
        position: relative;
        padding: 0 1rem;
        margin: auto;
    }

    .mail-input-small {
        width: 64rem;
        height: 1.5rem;
    }

</style>

<svelte:head>
	<title>Mail</title>
</svelte:head>

<div class="mail-wrapper">
    <div class="mail-content">
        <form class="mail-form" on:submit|preventDefault={onSubmit}>
            <p class="mail-to">To</p>
            <input class="mail-input-small" value="spinburgjexer@gmail.com" disabled>
            <p class="mail_name">Name</p>
            <input class="mail-input-small" bind:value={name} placeholder="Name">
            <p class="mail_email">Email</p>
            <input class="mail-input-small" bind:value={email} placeholder="Email">
            <p class="mail_content">Content</p>
            <TextField
                class="mail_textfield"
                bind:value
                bind:error
                rules={[
                    (v) => !!v || "required"
                ]}
                validateOnBlur />
            <Button disabled={!value || error} on:click={onBtnClicked}>
                Submit
            </Button>
        </form>        
    </div>
</div>

