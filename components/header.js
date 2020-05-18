import Link from 'next/link';

const Header = () => (
  <div className="header-wrapper">
    <div className="logo">
    <div>
      <img width={200} height={100} src={`/static/images/LogoSedano_Piccolo.jpg`} />
    </div>    
      <Link href="/">
        <a>Menu - Al Sedano Allegro</a>
      </Link>
    </div>

    <style jsx>{`
      .header-wrapper {
        padding: 20px;
        background: #fafafa;
      }
      .logo {
        padding: 10px 0;
      }
      .logo a {
        font-weight: 900;
        color: #111;
      }
      .logo a:hover {
        font-weight: 900;
        border-bottom: 2px solid #111;
      }
      .tutorial {
        font-size: 16px;
      }
    `}</style>
  </div>
);

export default Header;
