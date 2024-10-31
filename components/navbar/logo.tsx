import Image from 'next/image';

export const AcmeLogo = () => (
   <Image
      src="/NWAPinballHorizontalSmallerBack.png" // Adjust path as needed
      alt="Acme Logo"
      width={150}
      height={25}
      quality={100}
      className=""
   />
);
