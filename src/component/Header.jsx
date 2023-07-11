const Header = ({ title }) => {
  return (
    <header className="bg-blue-500 py-4 text-center">
      <h1 className="text-white text-4xl font-bold mx-auto max-w-2xl px-4">
        {title}
      </h1>
    </header>
  );
};
export default Header;
