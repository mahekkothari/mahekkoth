import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative w-screen h-[60vh] overflow-hidden">

      <Image
        src="/banner.png"
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
}
