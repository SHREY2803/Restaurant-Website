import { FaLocationArrow } from 'react-icons/fa';

const LocationComponent = () => {
  return (
    <div className="flex items-center gap-2">
      <a 
        href="https://www.google.com/maps?q=Vadodara,+Gujarat" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaLocationArrow className="hover:scale-125 duration-200 cursor-pointer"/>
      </a>
      <p>Vadodara, Gujarat</p>
    </div>
  );
};

export default LocationComponent;
