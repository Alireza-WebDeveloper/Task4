import LinkContainer from "./LinkContainer";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 fadeComponent inset-x-0  backdrop-filter  dark:backdrop-brightness-50 backdrop-blur-[8px]">
      <div className="p-3 items-center flex lg:justify-around justify-between flex-wrap  bg-white dark:bg-gray-900">
        <Logo />
        <div className="flex items-center gap-10">
          <LinkContainer href="/">home</LinkContainer>
          <LinkContainer href="/dashboard">dashboard</LinkContainer>
          <LinkContainer href="/login">login</LinkContainer>
          <LinkContainer href="/post">post</LinkContainer>
        </div>
      </div>
    </header>
  );
};
export default Header;
