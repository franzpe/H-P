import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl max-w-xl leading-tight">
        Discover <span className="text-primary-3-shade">designers</span>,{' '}
        <span className="text-primary-3-shade">developers</span>, &{' '}
        <span className="text-primary-3-shade">data scientists</span>
      </h1>
      <p className="font-light text-primary-2-tint text-2xl my-8">
        We help companies build entrepreneurially focused teams.
      </p>
      <Link href="#">
        <button className="text-center py-3 px-10 font-medium text-white rounded-full bg-accent-orange mb-4 font-bold hover:bg-accent-shade">
          Discover talent
        </button>
      </Link>
    </div>
  );
};

export default Home;
