import ButtonContainer from "./Components/Common/Main/ButtonContainer";
import TextField from "./Components/Common/Main/TextField";
import * as Icons from "react-icons/md";
import Profile from "./Components/Dashboard/profile";
import Post from "./Components/post";

const comments = [
  { text: "Great post!", author: "John Doe" },
  { text: "I enjoyed reading this.", author: "Jane Smith" },
];

const post = {
  id: 1,
  title: "10 Tips for Better Productivity",
  content:
    "In this article, we'll explore 10 practical tips to boost your productivity and get more done.",
  comments,
};
const Page = () => {
  return (
    <div className="flex flex-col  items-start space-y-5 p-3">
      <ButtonContainer color="red">app</ButtonContainer>
      <ButtonContainer color="blue">app</ButtonContainer>
      <ButtonContainer color="red" fontSize="small">
        app
      </ButtonContainer>
      <ButtonContainer color="red" fontSize="large">
        app
      </ButtonContainer>
      <ButtonContainer color="blue" fontSize="small">
        app
      </ButtonContainer>
      <ButtonContainer color="blue" fontSize="large">
        app
      </ButtonContainer>
      <div className="w-60 mt-2">
        <TextField value={"222"} icon={<Icons.MdLogin />} type="password" />
        <TextField value={"1"} icon={<Icons.MdTextFields />} type="text" />
        <TextField value={"1"} icon={<Icons.MdEmail />} type="email" />
        <TextField
          value={"1"}
          hasError={true}
          errorMessage="format email not support"
          type="email"
        />
      </div>
      <div>
        <Profile
          data={{
            firstName: "alireza",
            lastName: "mohammadi",
            email: "alireza@gmail.com",
            phoneNumber: "000000",
          }}
        />
      </div>
      <div>
        <Post post={post} />
      </div>
    </div>
  );
};

export default Page;
