<script>
    let currentMessage = "";
    let newMessage;
    function sendMessage() {
        currentMessage = newMessage;
    }
</script>

<div class="bg-blue-500 w-screen h-screen p-5">
    <div class="flex flex-col w-full h-full space-y-2">
        <div class="bg-white w-full h-full rounded-lg p-5">
            {currentMessage}
        </div>
        <div class="bg-white w-full h-[100px] rounded-lg flex flex-row p-2 space-x-2">
            <input bind:value={newMessage} type="text" class="w-full p-3" placeholder="Ask Something">
            <button on:click={sendMessage} class="bg-red-500 text-white aspect-square rounded-lg">Send</button>
        </div>
    </div>
</div>