import GetUsers from "../components/Get";
import Button from "../components/Button";

const UserSector = () => {
  return (
    <div className="p-6">
      <h1 className="text-center text-4xl font-bold mb-4">
        Generation Thailand
      </h1>
      <h1 className="text-center text-4xl font-bold mb-4">
        Home - User Sector
      </h1>
      <div className="flex mt-12 gap-20 justify-center">
        <Button text="User Home Sector" navigateTo="/UserSector" />
        <Button text="Admin Home Sector" navigateTo="/AdminSector" />
      </div>
      <section className="w-full p-5 bg-grey-100 flex">
        <GetUsers />
      </section>
    </div>
  );
};

export default UserSector;
