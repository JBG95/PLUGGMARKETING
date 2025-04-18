import { payFeature } from "../../Constants/PayFeat";

const Clients = () => {
  return (
    <div className="flex text-black px-4 md:px-8 w-full py-16 h-auto flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center flex-col">
        <p className="w-full text-2xl text-center py-4">OUR CLIENTS</p>
        <h1 className="w-full text-center text-xl font-bold md:text-3xl">
          Customers Who Love Us
        </h1>
      </div>
      <div className="flex w-full h-auto justify-evenly items-center py-8">
        <div className="flex h-auto md:flex-row flex-col w-full justify-evenly items-center overflow-hidden md:grid-cols-3 gap-4 grid-cols-1">
          {Array.isArray(payFeature) && payFeature.length > 0 ? (
            payFeature.map((item) => (
              <div
                key={item.id} // Assuming 'id' is a unique identifier in your data
                style={{ backgroundColor: item.bg }}
                className="flex flex-col rounded-md overflow-hidden gap-2 p-2 items-center justify-center"
              >
                <img
                  src={item.image}
                  alt={`${item.name} logo`} // Descriptive alt text
                  loading="lazy"
                  className={`object-center ${
                    item.index === 2 ? "object-cover h-20" : "object-fill"
                  } w-72`}
                />
              </div>
            ))
          ) : (
            <p>No client data available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clients;
