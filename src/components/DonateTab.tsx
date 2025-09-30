'use client'

import { ARIA_LABELS, Z_INDEX, CONTACT_CONFIG } from '@/constants'

interface DonateTabProps {
	phone?: string
	text?: string
	side?: 'right' | 'left'
	labelDesktop?: string
	labelMobile?: string
	useIconMobile?: boolean
}

export const DonateTab = ({
	phone = CONTACT_CONFIG.PHONE,
	text = CONTACT_CONFIG.DEFAULT_MESSAGE,
	side = 'right',
	labelDesktop = 'DONACIÓN',
}: DonateTabProps) => {
	// Don't render if no phone number
	if (!phone) return null

	const encodedMessage = encodeURIComponent(text)
	const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`

	const sideClasses = side === 'right' ? 'right-3 sm:right-2' : 'left-3 sm:left-2'

	return (
		<div className={`fixed top-1/2 -translate-y-1/2 ${sideClasses}`} style={{ zIndex: Z_INDEX.DONATION_TAB }}>
			<a
				href={whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={ARIA_LABELS.DONATE_WHATSAPP}
				className="flex items-center justify-center hover:brightness-110 text-primary rounded-2xl shadow-lg w-12 sm:w-14 transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background py-3 px-2 sm:py-4 sm:px-3 overflow-visible min-h-[44px] max-h-[35vh] sm:max-h-[30vh] opacity-100"
				style={{ backgroundColor: '#fcd400' }}
			>
				{/* Screen reader only horizontal text */}
				<span className="sr-only">{labelDesktop}</span>

				{/* Visual vertical text - rotated 180 degrees for right side top-to-bottom reading */}
				<span
					className="font-display font-semibold text-xs sm:text-sm tracking-normal text-center whitespace-nowrap overflow-visible leading-tight"
					style={{
						writingMode: 'vertical-rl',
						textOrientation: 'mixed',
						transform: side === 'right' ? 'rotate(180deg)' : 'none',
					}}
					aria-hidden="true"
				>
					{labelDesktop}
				</span>
			</a>
		</div>
	)
}
