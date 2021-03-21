import Link from 'components/elements/Link';
import Logo from 'components/icons/Logo';
const Header = (): JSX.Element => {
  return (
    <header className="text-gray-700 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row md:justfy-between">
        <Link href="/">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <Logo className="w-64 sm:w-96"></Logo>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:py-1 md:pl-4 mb-4">
          <Link href="/" activeClassName="border-ekogreen-600">
            <a className="mr-5 text-base text-gray-600 hover:text-gray-800 border-b-4 transition duration-500 border-transparent hover:border-ekogreen-700">
              Strona główna
            </a>
          </Link>
          <Link href="/services" activeClassName="border-ekogreen-600">
            <a className="mr-5 text-base text-gray-600 hover:text-gray-800 border-b-4 transition duration-500 border-transparent hover:border-ekogreen-700">
              Nasze usługi
            </a>
          </Link>
          <Link href="/portfolio" activeClassName="border-ekogreen-600">
            <a className="mr-5 text-base text-gray-600 hover:text-gray-800 border-b-4 transition duration-500 border-transparent hover:border-ekogreen-700">
              Realizacje
            </a>
          </Link>
          <Link href="/contact" activeClassName="border-ekogreen-600">
            <a className="mr-5 text-base text-gray-600 hover:text-gray-800 border-b-4 transition duration-500 border-transparent hover:border-ekogreen-700">
              Kontakt
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
