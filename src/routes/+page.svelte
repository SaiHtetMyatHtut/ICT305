<script>
    import * as rive from "@rive-app/canvas";    
	import { onMount } from "svelte";
    let riveAnimatedElement;
    onMount(() => {
        const r = new rive.Rive({
        src: "/rive/pencil_dude_hello.riv",
        canvas: riveAnimatedElement,
        autoplay: true,
        stateMachines: "main",
        onLoad: () => {
          r.resizeDrawingSurfaceToCanvas();
        },
      });
    });
</script>

<div class="bg-white h-screen w-screen">
	<div class="relative isolate pt-14 h-full w-full">
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
		<div
			class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 w-full h-full"
		>
			<div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
				<div class="flex">
					<div
						class="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
					>
						<span class="font-semibold text-indigo-600">FAQ</span>
						<span class="h-4 w-px bg-gray-900/10" aria-hidden="true"></span>
						<a href="/faq" class="flex items-center gap-x-1">
							<span class="absolute inset-0" aria-hidden="true"></span>
							Click Here To Read Frequently Asked Questions
							<svg
								class="-mr-2 h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clip-rule="evenodd"
								/>
							</svg>
						</a>
					</div>
				</div>
				<h1 class="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center sm:text-left">
					A better way to ship your projects
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat. Nisi
					irure aliquip nisi adipisicing veniam voluptate id. In veniam incididunt ex veniam
					adipisicing sit.
				</p>
				<div class="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
					<a
						href="/chat"
						class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>Chat With KoPencil</a
					>
					<a href="/" class="text-sm font-semibold leading-6 text-gray-900"
						>Upload Docs <span aria-hidden="true">→</span></a
					>
				</div>
			</div>
            <!-- Some Image to Show Case -->
            <canvas bind:this={riveAnimatedElement} class="w-[40vw] h-[100vh] mb-[10%]"/>
		</div>
	</div>
</div>
