import Image from 'next/image';

export default function Page() {
  return (
    <section className="relative flex flex-col items-center">
      {/* Banner Wrapper */}
      <div className="relative w-screen h-[100vh]">
      <Image
      src="/banner.png"
      alt="Banner Image"
      layout="fill"
      objectFit="contain"
      objectPosition="center" // Ensures image is centered
      priority
/>

      </div>

      {/* Centered Content */}
      <div className="max-w-2xl mx-auto px-6 mt-10 text-center">
        <h1 className="text-2xl font-semibold tracking-tighter">
          Hey, I'm Mahek!
        </h1>
        <p className="mt-4">
          {`I'm a second-year data science student at San Jose State University. 
          I have work and internship experience in data science, machine learning,
          software development, and consulting.`}
        </p>
      </div>
    </section>
  );
}
