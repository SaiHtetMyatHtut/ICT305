<script>
	export let message, time, isAI;
</script>

<div class="flex items-start gap-2.5 {isAI ? 'flex-row' : 'flex-row-reverse'}">
	<div class="block p-2 bg-gray-100 rounded-lg dark:bg-gray-700">
		<img class="w-8 h-8 rounded-full" src="{isAI ? "/gemini.jpg" : '/asker.jpg'}" alt="AI Profile" />
	</div>
	<div
		class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-700"
	>
		<div class="flex items-center space-x-2 rtl:space-x-reverse">
			<span class="text-sm font-semibold text-gray-900 dark:text-white">{isAI ? "Potato AI" : 'You'}</span>
			<span class="text-sm font-normal text-gray-500 dark:text-gray-400">{time}</span>
		</div>
		<p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
			{message}
		</p>
	</div>
</div>
