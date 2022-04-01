import Image from "next/image"

import logoHeader from '../../public/logo_header.png';

const Title = ({text, description} : {text? : string, description? : string}) => {

	return (
		<>
			<div className='flex items-center justify-center mb-6' >
				<Image src={logoHeader} alt="aliolam logo" width={200} height={56} /></div>
			{text ?
			<h3 className='text-2xl leading-6 text-title-color mb-4 font-title-font font-bold leading-6' >
			{text}</h3>:
			undefined
			}
			{description ? 
			<p className='text-base leading-6 text-title-color text-center mb-6' >{description}</p>:
			undefined}
		</>
	)
}
export default Title;