<script>
	import ChatBubble from '../../lib/components/ChatBubble.svelte';

	let promptMessage = '';
	let isLoading = false;
	let messagesHistory = [
		{
			message: 'Hello, I am Potato AI. How can I help you today?',
			isAI: true,
			time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
		}
	];

	const scrollToBottom = (node) => {
		const scroll = () =>
			node.scroll({
				top: node.scrollHeight,
				behavior: 'smooth'
			});
		scroll();

		return { update: scroll };
	};

	async function sendMessage(question) {
		isLoading = true;
		messagesHistory = [
			...messagesHistory,
			{
				message: question,
				isAI: false,
				time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
			}
		];

		promptMessage = '';
		const response = await fetch('/chat', {
			method: 'POST',
			body: JSON.stringify({ message: question }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		messagesHistory = [
			...messagesHistory,
			{
				message: data.message,
				isAI: true,
				time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
			}
		];
		isLoading = false;
	}
</script>

<div class="flex flex-col bg-indigo-600 w-screen h-screen">
	<div class="relative isolate h-full w-full">
		<svg
			class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
					width="200"
					height="200"
					x="50%"
					y="-1"
					patternUnits="userSpaceOnUse"
				>
					<path d="M100 200V.5M.5 .5H200" fill="none" />
				</pattern>
			</defs>
			<svg x="50%" y="-1" class="overflow-visible fill-gray-50">
				<path
					d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
					stroke-width="0"
				/>
			</svg>
			<rect
				width="100%"
				height="100%"
				stroke-width="0"
				fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
			/>
		</svg>
		<div class="flex flex-col w-full h-full p-5 space-y-2">
			<div
				class="bg-white w-full h-full rounded-lg p-5 space-y-2 overflow-y-scroll no-scrollbar"
				use:scrollToBottom={messagesHistory}
			>
				{#each messagesHistory as message}
					<ChatBubble message={message.message} time={message.time} isAI={message.isAI} />
				{/each}
			</div>
			<form>
				<div class="flex items-center px-3 py-3 rounded-lg bg-gray-50 dark:bg-gray-700">
					<input
						bind:value={promptMessage}
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
							>
								<path
									d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
									fill="currentColor"
								/>
								<path
									d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
									fill="currentFill"
								/>
							</svg>
							<span class="sr-only">Loading...</span>
						</div>
					{:else}
						<button
							on:click={(e) => {
								e.preventDefault();
								sendMessage(promptMessage);
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
</div>
