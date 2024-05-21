import Profile from "@/app/Components/Dashboard/profile";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Profile
        data={{
          firstName: "alireza",
          lastName: "mohammadi",
          email: "alireza@gmail.com",
          phoneNumber: "000000",
        }}
      />
    </div>
  );
};

export default Page;
