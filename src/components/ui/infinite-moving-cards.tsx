import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'

export const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className,
}: {
	items: {
		logo: string
		name: string
		link?: string
	}[]
	direction?: 'left' | 'right'
	speed?: 'fast' | 'normal' | 'slow'
	pauseOnHover?: boolean
	className?: string
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null)
	const scrollerRef = React.useRef<HTMLUListElement>(null)

	useEffect(() => {
		addAnimation()
	}, [])
	const [start, setStart] = useState(false)
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children)

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true)
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem)
				}
			})

			getDirection()
			getSpeed()
			setStart(true)
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty('--animation-direction', 'forwards')
			} else {
				containerRef.current.style.setProperty('--animation-direction', 'reverse')
			}
		}
	}
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty('--animation-duration', '20s')
			} else if (speed === 'normal') {
				containerRef.current.style.setProperty('--animation-duration', '40s')
			} else {
				containerRef.current.style.setProperty('--animation-duration', '80s')
			}
		}
	}
	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative max-w-7xl overflow-hidden ',
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					'flex w-max min-w-full shrink-0 flex-nowrap',
					start && 'animate-scroll',
					pauseOnHover && 'hover:[animation-play-state:paused]',
				)}
			>
				{items.map((item, idx) => (
					<li
						className="relative w-[750px] max-w-full shrink-0 rounded-2xl border-zinc-200 px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)] flex flex-col items-center justify-center"
						key={item.name}
					>
						<div className="flex items-center justify-center h-32">
							<img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
						</div>
						{item.link && (
							<a
								className="text-center uppercase text-sm font-bold bg-wine px-3 py-2 rounded-md text-white flex items-center gap-2 mt-3"
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								{item.name} <ExternalLink className="w-4 h-4" />
							</a>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}
