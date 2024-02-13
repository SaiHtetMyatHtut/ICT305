<script>
	import { GoogleGenerativeAI } from '@google/generative-ai';
	const genAI = new GoogleGenerativeAI('AIzaSyAv31hw2jnZ180UE803Htb5UlogheWQjJ0');

	const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
	let messages = [];
	let myQuestion = '';
	var isLoading = false;
	async function sendMessage(question) {
		isLoading = true;
        messages = [...messages, { message: question, isAI: false, time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) }];
		const result = await model.generateContent(question);
		const response = await result.response;
		const text = response.text();
		messages = [...messages, { message: text, isAI: true , time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) }];
		isLoading = false;
	}
</script>

<div class="bg-blue-500 w-screen h-screen p-5">
	<div class="flex flex-col w-full h-full space-y-2">
		<div class="bg-white w-full h-full rounded-lg p-5 space-y-2 overflow-y-scroll no-scrollbar">
			{#each messages as message}
				{#if message.isAI}
					<div class="flex items-start gap-2.5">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img
							class="w-12 h-12 rounded-full bg-cover"
							src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
						<div
							class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-700"
						>
							<div class="flex items-center space-x-2 rtl:space-x-reverse">
								<span class="text-sm font-semibold text-gray-900 dark:text-white">Gemini AI</span>
								<span class="text-sm font-normal text-gray-500 dark:text-gray-400">{message.time}</span>
							</div>
							<p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
								{message.message}
							</p>
						</div>
					</div>
				{:else}
					<div class="flex items-start justify-end gap-2.5">
						<div
							class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-700"
						>
							<div class="flex items-center space-x-2 rtl:space-x-reverse">
								<span class="text-sm font-semibold text-gray-900 dark:text-white">Potato</span>
								<span class="text-sm font-normal text-gray-500 dark:text-gray-400">{message.time}</span>
							</div>
							<p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
								{message.message}
							</p>
						</div>
						<!-- svelte-ignore a11y-missing-attribute -->
						<img
							class="w-12 h-12 rounded-full bg-cover"
							src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</div>
				{/if}
			{/each}
		</div>

		<form>
			<div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
				<input
					bind:value={myQuestion}
					id="chat"
					rows="1"
					class="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Your message..."
				/>
				{#if isLoading}
					<div role="status">
						<svg
							aria-hidden="true"
							class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="currentColor"
							/><path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentFill"
							/></svg
						>
						<span class="sr-only">Loading...</span>
					</div>
				{:else}
					<button
						on:click={(e) => {
							e.preventDefault();
							sendMessage(myQuestion);
						}}
						type="submit"
						class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
					>
						<svg
							class="w-5 h-5 rotate-90 rtl:-rotate-90"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 18 20"
						>
							<path
								d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"
							/>
						</svg>
						<span class="sr-only">Send message</span>
					</button>
				{/if}
			</div>
		</form>
	</div>
</div>
