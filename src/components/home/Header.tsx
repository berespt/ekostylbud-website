import Link from 'next/link';
import Logo from 'components/icons/Logo';
const Header = (): JSX.Element => {
  return (
    <header className="text-gray-700 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row md:justfy-between">
        <Link href="/">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <Logo width="200"></Logo>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:py-1 md:pl-4">
          <Link href="/">
            <a className="mr-5 text-base text-gray-600 hover:text-gray-800">
              Strona główna
            </a>
          </Link>
          <Link href="/services">
            <a className="mr-5 text-base text-gray-600 hover:text-gray-800">
              Nasze usługi
            </a>
          </Link>
          <Link href="/portfolio">
            <a className="mr-5 text-base text-gray-600 hover:text-gray-800">
              Realizacje
            </a>
          </Link>
          <Link href="/contact">
            <a className="mr-5 text-base text-gray-600 hover:text-gray-800">
              Kontakt
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
