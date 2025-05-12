import React from 'react'
import Title from '../components/Title';
import Border from '../components/Border';

interface Props {
	landing: string;
}

export default function Finalists({ landing }: Props) {
	return (
		<div>
			<Title landing={landing} title="Finalistas" />
			<div className='grid grid-cols-[3px_1fr] gap-3 lg:gap-10 mt-10'>
				<Border landing={landing} />
				<div>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
						<div className='h-[280px] bg-red-300 rounded-md'>
							<p>Canvas</p>
						</div>
						<div className='h-[280px] bg-green-300 rounded-md -mt-5'>
							<p>Alumbra</p>
						</div>
						<div className='h-[280px] bg-blue-300 rounded-md'>
							<p>Gecko Agent</p>
						</div>
					</div>
					<div className='flex flex-wrap justify-center mt-5 gap-5'>
						<div className='flex w-full gap-4 justify-center'>
							<div className='h-[80px] w-1/2 bg-[#d3a2fb] border-[#fbe4a2] border-2 rounded-md'>
								<p>Edunova</p>
							</div>
							<div className='h-[80px] w-1/2 bg-[#d3a2fb] border-[#fbe4a2] border-2 rounded-md'>
								FlowSync
							</div>
						</div>
						<div className='flex w-full gap-4 justify-center'>
							<div className='h-[80px] w-1/2 bg-[#d3a2fb] border-[#fbe4a2] border-2 rounded-md'>
								<p>Liendra AI</p>
							</div>
							<div className='h-[80px] w-1/2 bg-[#d3a2fb] border-[#fbe4a2] border-2 rounded-md'>
								<p>Circula</p>
							</div>
						</div>
						<div className='flex w-full gap-4 justify-center'>
							<div className='h-[80px] w-1/2 bg-[#d3a2fb] border-[#fbe4a2] border-2 rounded-md'>
								<p>PIA-SS</p>
							</div>
							<div className='h-[80px] w-1/2 bg-[#d3a2fb] border-[#fbe4a2] border-2 rounded-md'>
								<p>Hands 2 Voice</p>
							</div>
						</div>

						<div className='h-[80px] w-1/2 bg-[#d3a2fb] border-[#fbe4a2] border-2 rounded-md'>
							<p>El viaje del chigüiero</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
