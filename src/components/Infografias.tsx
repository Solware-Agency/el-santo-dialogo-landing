import { Card, CardContent } from '@/components/ui/card'
import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { FadeIn } from './FadeIn'
import { content } from '@/content'
import { getIcon } from '@/lib/icons'
import { BREAKPOINT_CLASSES, ANIMATION_DELAYS } from '@/constants'

export const Infografias = () => {
	// Only render if infografias exist
	if (!content.infografias || content.infografias.length === 0) {
		return null
	}

	const ImageIcon = getIcon('Image')

	return (
		<Section id="infografias">
			<FadeIn>
				<SectionHeader
					title="Infografías"
					subtitle="Recursos visuales para comprender mejor la vida y legado del santo"
				/>
			</FadeIn>

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{content.infografias.map((infografia, index) => (
					<FadeIn key={infografia.title} delay={index * ANIMATION_DELAYS.ITEM_STAGGER}>
						<Card className={`h-full ${BREAKPOINT_CLASSES.CARD_ROUNDED} hover:shadow-elegant transition-smooth`}>
							<CardContent className="p-6">
								{/* Placeholder for image - would be actual image in production */}
								<div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-xl mb-4 flex items-center justify-center">
									<ImageIcon className="w-12 h-12 text-muted-foreground/50" />
								</div>

								<h3 className="text-lg font-display text-primary mb-2 leading-tight">{infografia.title}</h3>

								<p className={`text-sm text-muted-foreground ${BREAKPOINT_CLASSES.PROSE_JUSTIFIED}`}>
									{infografia.caption}
								</p>

								{/* Link to open in new tab - would link to actual file in production */}
								<div className="mt-4">
									<span className="text-xs text-muted-foreground/70 italic">Disponible el 09 de octubre del 2025</span>
								</div>
							</CardContent>
						</Card>
					</FadeIn>
				))}
			</div>
		</Section>
	)
}
