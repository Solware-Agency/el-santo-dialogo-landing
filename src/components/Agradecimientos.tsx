import { Section } from '@/components/ui/section'
import { SectionHeader } from '@/components/ui/section-header'
import { FadeIn } from './FadeIn'
import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

// Importar las imágenes
import logo4 from '@/assets/4.png'
import escudoSantuario from '@/assets/escudo-santuario.png'
import logoChate from '@/assets/logo-chate-negro.png'
import logoVicePostulacion from '@/assets/logo-vice-postulacion.png'
import maryLogo from '@/assets/mary-logo.png'
import mpmLogo from '@/assets/mpm.png'
import plazaLogo from '@/assets/plaza.png'
import sowiLogo from '@/assets/sowi.png'
import venLogo from '@/assets/ven.png'
import wtfLogo from '@/assets/wtf.png'

const logosAgradecimientos = [
	{
		logo: logo4,
		name: 'humaniz',
		link: 'https://www.humanizgroup.com/',
	},
	{
		logo: escudoSantuario,
		name: 'Santuario de la Candelaria',
		link: 'https://www.instagram.com/iglesia.candelaria.caracas',
	},
	{
		logo: logoChate,
		name: 'Chate',
		link: 'https://www.instagram.com/chate_ccs/',
	},
	{
		logo: logoVicePostulacion,
		name: 'Vice Postulación',
	},
	{
		logo: maryLogo,
		name: 'Mary',
		link: 'https://www.alimentosmary.com/',
	},
	{
		logo: mpmLogo,
		name: 'MPM',
		link: 'https://www.instagram.com/proyectosmpm',
	},
	{
		logo: plazaLogo,
		name: 'Banco Plaza',
		link: 'https://www.bancoplaza.com/',
	},
	{
		logo: sowiLogo,
		name: 'Sowi',
		link: 'https://sowiquesos.com/',
	},
	{
		logo: venLogo,
		name: 'Venemergencia',
		link: 'https://venemergencia.com/',
	},
	{
		logo: wtfLogo,
		name: 'WTF',
		link: 'https://dimasiwines.com/f/wine-tasting-friends',
	},
]
export const Agradecimientos = () => {
	return (
		<Section id="agradecimientos" background="muted">
			<div className="max-w-6xl mx-auto">
				<FadeIn>
					<SectionHeader
						title="Aliados de un legado"
						subtitle="Nuestro reconocimiento a quienes han brindado apoyo humano, técnico y espiritual para hacer posible esta muestra."
					/>
				</FadeIn>

				<div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
					<InfiniteMovingCards items={logosAgradecimientos} direction="right" speed="slow" pauseOnHover={true} />
				</div>
			</div>
		</Section>
	)
}
