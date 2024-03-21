import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../constants/index";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-800 py-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-start">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((resourcesLink, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={resourcesLink.href}
                >
                  {resourcesLink.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold mb-4">Comunity</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
