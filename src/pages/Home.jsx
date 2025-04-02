import GetUsers from "../components/methods/01_Get";

const UserSector = () => {
  return (
    <div className="p-6">
      <h1 className="text-center text-4xl font-bold mb-4">
        Generation Thailand
      </h1>
      <h1 className="text-center text-4xl font-bold mb-4">
        Home - User Sector
      </h1>
      <section className="w-full p-5 bg-grey-100 flex">
        <GetUsers />
      </section>
    </div>
  );
};

export default UserSector;
