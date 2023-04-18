import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='bg- rounded-lg shadow dark:bg-gray-900 m-4 border-b-2 border-blue-2'>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 mb'
				aria-label='Global'
			>
				<div className='flex items-center'>
					<a href='/' className='-m-1.5 p-1.5 mr-0'>
						<img
							className='h-8 w-auto'
							src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAViRjVdVHqHCxGRWvWIRl28OgsdJ6BrQT2IANlgn6Q&s'
							alt='ultracar logo'
						/>
					</a>
					<p className='text-lg font-soft-bold'>Ultracar QRMechanicr</p>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				<Popover.Group className='hidden lg:flex lg:gap-x-12'>
					<a
						href='/register-client'
						className='text-sm font-semibold leading-6 text-blue-1'
					>
						Registrar cliente
					</a>
					<a href='/qr-scanner' className='text-sm font-semibold leading-6 text-blue-1'>
						Scanner
					</a>
					<a href='/services' className='text-sm font-semibold leading-6 text-blue-1'>
						Serviços
					</a>
					<a href='/rules' className='text-sm font-semibold leading-6 text-blue-1'>
						Regras
					</a>
				</Popover.Group>
			</nav>
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className='fixed inset-0 z-10' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<a href='/' className='-m-1.5 p-1.5'>
							<img
								className='h-8 w-auto'
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuAViRjVdVHqHCxGRWvWIRl28OgsdJ6BrQT2IANlgn6Q&s'
								alt='ultracar logo'
							/>
						</a>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6' aria-hidden='true' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								<a
									href='/register-client'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-1 hover:bg-gray-50'
								>
									Registrar Cliente
								</a>
								<a
									href='/qr-scanner'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-1 hover:bg-gray-50'
								>
									Scanner
								</a>
								<a
									href='/services'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-1 hover:bg-gray-50'
								>
									Serviços
								</a>
								<a
									href='/rules'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-1 hover:bg-gray-50'
								>
									Regras
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
