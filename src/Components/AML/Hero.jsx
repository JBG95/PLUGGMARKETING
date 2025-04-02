const Hero = () => {
  return (
    <div className="md:py-32 py-16 items-center flex w-full px-4 md:px-8 justify-center">
      <div className="flex px-4 md:px-8 w-full flex-col items-center justify-center">
        <span className="text-xl md:text-3xl font-bold">AML/CTF</span>
        <p className="pt-4 text-gray-800 text-center">
          PLUGG MARKETING offers it&#39;s products and services in partnership with
          licensed transmitters in their respective jurisdictions. <br />
          All trademarks and brand names belong to their respective owners. Use
          of these trademarks and brand names do not represent endorsement by or
          association with PLUGG MARKETING.
        </p>
        <h1 className="md:text-2xl flex items-center justify-center text-xl font-bold py-4 w-full">
          Important Information about Procedures for opening a new Account:
        </h1>
        <p className="pt-4 text-gray-800 text-center">
          To help the government fight the funding of terrorism and money
          laundering activities.
          The Republican law requires all financial institutions to obtain,
          verify and record information that identifies each person who opens an
          Account. <br />{" "}
          <span className="font-bold">What this means for you:</span> When you
          open an Account, we will ask for your name, address, date of birth,
          any other information that will allow us to identify you. We also ask
          to see a copy of your National Identification Card/ Passport.
        </p>
      </div>
    </div>
  );
};

export default Hero;
