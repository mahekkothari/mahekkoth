import Link from 'next/link'

const navItems = {
  '/': { name: 'home' },
  '/personal': { name: 'more on me' },
  '/blog': { name: 'blog' },
}

export function Navbar() {
  return (
    <aside className="navbar-container">
      <div className="navbar">
        <nav id="nav">
          <div className="nav-links">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link key={path} href={path} className="nav-item">
                {name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}
