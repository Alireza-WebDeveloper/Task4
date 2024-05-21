import React from "react";

interface ProfileData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

interface ProfileProps {
  data: ProfileData;
}

const Profile: React.FC<ProfileProps> = ({ data }) => {
  const { firstName, lastName, phoneNumber, email } = data;
  return (
    <div className="">
      <div className="bg-purple-500 rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
        <div className="mb-4">
          <p className="text-lg">
            <span className="font-bold">First Name:</span> {firstName}
          </p>
          <p className="text-lg">
            <span className="font-bold">Last Name:</span> {lastName}
          </p>
          <p className="text-lg">
            <span className="font-bold">Phone Number:</span> {phoneNumber}
          </p>
          <p className="text-lg">
            <span className="font-bold">Email:</span> {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
