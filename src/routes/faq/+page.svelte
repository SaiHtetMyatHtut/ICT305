<script>
	import * as rive from '@rive-app/canvas';
	import { onMount } from 'svelte';
	let riveAnimatedElement;
	onMount(() => {
		const r = new rive.Rive({
			src: '/rive/pencil_dude_hello.riv',
			canvas: riveAnimatedElement,
			autoplay: true,
			stateMachines: 'main',
			onLoad: () => {
				r.resizeDrawingSurfaceToCanvas();
			}
		});
	});
</script>

<div class="bg-white">
	<div class="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 pb-24 sm:pb-32 lg:px-8 lg:pb-40">
		<div class="flex flex-col items-center justify-center">
			<canvas bind:this={riveAnimatedElement} class="w-[40vw] h-[40vh]" />
			<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
				Frequently asked questions on Mr.Pencil
			</h2>
		</div>
		<dl class="mt-10 space-y-8 divide-y divide-gray-900/10">
			<div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
				<dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
					What&#039;s the best thing about Switzerland?
				</dt>
				<dd class="mt-4 lg:col-span-7 lg:mt-0">
					<p class="text-base leading-7 text-gray-600">
						I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quas cupiditate laboriosam fugiat.
					</p>
				</dd>
			</div>
			<div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
				<dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
					What&#039;s the best thing about Switzerland?
				</dt>
				<dd class="mt-4 lg:col-span-7 lg:mt-0">
					<p class="text-base leading-7 text-gray-600">
						I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quas cupiditate laboriosam fugiat.
					</p>
				</dd>
			</div>
			<div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
				<dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
					What&#039;s the best thing about Switzerland?
				</dt>
				<dd class="mt-4 lg:col-span-7 lg:mt-0">
					<p class="text-base leading-7 text-gray-600">
						I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quas cupiditate laboriosam fugiat.
					</p>
				</dd>
			</div>
			<div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
				<dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
					What&#039;s the best thing about Switzerland?
				</dt>
				<dd class="mt-4 lg:col-span-7 lg:mt-0">
					<p class="text-base leading-7 text-gray-600">
						I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quas cupiditate laboriosam fugiat.
					</p>
				</dd>
			</div>
			<div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
				<dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
					What&#039;s the best thing about Switzerland?
				</dt>
				<dd class="mt-4 lg:col-span-7 lg:mt-0">
					<p class="text-base leading-7 text-gray-600">
						I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quas cupiditate laboriosam fugiat.
					</p>
				</dd>
			</div>
			<div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
				<dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
					What&#039;s the best thing about Switzerland?
				</dt>
				<dd class="mt-4 lg:col-span-7 lg:mt-0">
					<p class="text-base leading-7 text-gray-600">
						I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quas cupiditate laboriosam fugiat.
					</p>
				</dd>
			</div>
			<!-- More questions... -->
		</dl>
	</div>
</div>
