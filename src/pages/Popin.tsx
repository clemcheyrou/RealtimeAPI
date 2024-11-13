import { useEffect, useRef, useState } from 'react';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
	status: boolean;
}

export const Popin: React.FC<Props> = ({status}) => {
	const [popinOpen, setPopinOpen] = useState(status);
	const cardRef = useRef<HTMLDivElement>(null);
	const togglePopin = () => {
		setPopinOpen(!popinOpen);
	};
	const navigate = useNavigate();


	useEffect(() => {
	const handleClickOutside = (event: MouseEvent) => {
		if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
			setPopinOpen(false);
			navigate('/');
		}
	};

	document.addEventListener("mousedown", handleClickOutside);

	return () => {
		document.removeEventListener("mousedown", handleClickOutside);
	};
	}, []);

	return (
	<div className="flex items-center justify-center">
		{popinOpen && (
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
				<div ref={cardRef} className="bg-[#f1f1f1] rounded-lg p-8 w-1/2 h-1/2 relative">
					<span className="absolute text-lilac top-6 right-6 cursor-pointer" onClick={togglePopin}>
					&#10005;
					</span>
					<div className='flex flex-col items-center text-xs w-full'>
						<h3 className='font-audiowide text-4xl font-bold'>Récapitulatif</h3>
						<p className='mt-10 text-[16px]'>Vous trouverez ci-dessous toutes les données récoltées :</p>
					</div>
				</div>
			</div>
		)}
		</div>
	);
};
