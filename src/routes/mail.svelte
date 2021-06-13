<script>
    import {TextField, Button, Textarea, MaterialApp} from 'svelte-materialify';

    $: value = '';

    // Name, Email에 쓸 정규 표현식 만들자

    let email = '',
        name = '',
        content = '',
        error = null;

    const onSubmit = e => {
        console.log("submitted. " + e);
    };

    const onBtnClicked = e => {
        console.log("btn clicked. " + e);
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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .mail-form {
        position: relative;
        padding: 0 1rem;
        margin: auto;
    }

    .mail-form > * {
        max-width: 72rem;
        max-height: 1.5rem;
    }

    #Lee_mail {
        width: 100%;
        text-align: center;
        font-size: .9rem;
    }

    .mail-content-title {
        padding: 1rem 0 .5rem .5rem;
    }

    #mail-name {
        padding: 0 0 .5rem .5rem;
    }

    thead::after,
    tbody::after {
        content: '';
        display: block;
        position: relative;
        width: 100%;
        height: 2px;
        background-color: bisque;
        margin: 2rem 0;
    }

    tbody::after {
        background-color: cornflowerblue;
    }

    tfoot {
        display: flex;
        justify-content: center;
    }

</style>

<svelte:head>
	<title>Mail</title>
</svelte:head>
<div class="mail-wrapper">
    <div class="mail-content">
        <form class="mail-form" on:submit|preventDefault={onSubmit}>
            <table>
                <thead>
                    <tr><td id="mail-to" class="mail-content-title">To</td></tr>
                    <tr><td><input id="Lee_mail" value="spinburgjexer@gmail.com" disabled></td></tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="mail-name" class="mail-content-title">
                            Name
                        </td>
                    </tr>
                    <tr>
                        <td class="mail-textfield">
                            <MaterialApp>
                                <TextField
                                bind:value={name}
                                bind:error
                                outlined
                                placeholder="Your Name"
                                rules={[
                                    (v) => !!v || "Name is required block"
                                ]}
                                validateOnBlur />                                
                            </MaterialApp>
                        </td>
                    </tr>
                    <tr>
                        <td id="mail-mail_addr" class="mail-content-title">
                            Email
                        </td>
                    </tr>
                    <tr>
                        <td class="mail-textfield">
                            <MaterialApp>
                                <TextField
                                bind:value={email}
                                bind:error
                                outlined
                                placeholder="Your Content"
                                rules={[
                                    (v) => !!v || "Email Address is required block"
                                ]}
                                validateOnBlur />                                
                            </MaterialApp>
                        </td>
                    </tr>
                    <tr>
                        <td id="mail-mail_content" class="mail-content-title">
                            Content
                        </td>
                    </tr>
                    <tr>
                        <td class="mail-textarea">
                            <MaterialApp>
                                <Textarea
                                bind:value={content}
                                bind:error
                                solo
                                placeholder="Content"
                                rules={[
                                    (v) => !!v || "Content is required block"
                                ]}
                                validateOnBlur />                                
                            </MaterialApp>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <MaterialApp>
                                <Button class="primary-color" on:click={onBtnClicked}>
                                    Submit
                                </Button>                                   
                            </MaterialApp>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </form>        
    </div>
</div>

