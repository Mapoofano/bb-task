type THeader = {
  title: string;
};

const Header = ({ title }: THeader) => {
  return (
    <header className="h-14 text-lg font-semibold py-[14px] px-5 shadow-lg">
      {title}
    </header>
  );
};

export default Header;
