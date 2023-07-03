'use client';
import links from '../utils/links';
import Link from 'next/link';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        const { text, path, id, icon } = link;

        return (
          <Link
            href={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
            end>
            <span className='icon'>{icon}</span>
            {text}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
