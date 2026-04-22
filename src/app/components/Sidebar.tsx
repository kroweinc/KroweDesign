import { useState } from 'react';
import {
  HomeIcon,
  LightbulbIcon,
  FileTextIcon,
  BookOpenIcon,
  SettingsIcon,
  HelpCircleIcon,
  ChevronDownIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface SidebarProps {
  activeItem?: string;
  onNavigate?: (id: string) => void;
  userName?: string;
  userAvatar?: string;
}

export function Sidebar({
  activeItem = 'home',
  onNavigate,
  userName = 'Alex',
  userAvatar,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const mainItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: <HomeIcon size={18} /> },
    { id: 'ideas', label: 'Ideas', icon: <LightbulbIcon size={18} /> },
    { id: 'reports', label: 'Reports', icon: <FileTextIcon size={18} /> },
    { id: 'resources', label: 'Resources', icon: <BookOpenIcon size={18} /> },
  ];

  const bottomItems: NavItem[] = [
    { id: 'settings', label: 'Settings', icon: <SettingsIcon size={18} /> },
    { id: 'help', label: 'Help', icon: <HelpCircleIcon size={18} /> },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        style={{
          position: 'fixed',
          top: '1rem',
          left: '1rem',
          zIndex: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-2)',
        }}
        className="md:hidden"
      >
        {isMobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
      </button>

      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'color-mix(in srgb, black 40%, transparent)',
            zIndex: 40,
          }}
          className="md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        style={{
          position: 'fixed',
          left: isMobileOpen ? 0 : '-100%',
          top: 0,
          height: '100vh',
          width: isCollapsed ? '64px' : '260px',
          background: 'var(--surface-subtle)',
          borderRight: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all var(--duration-normal) var(--ease-out-smooth)',
          zIndex: 50,
          overflowX: 'hidden',
        }}
        className="md:left-0"
      >
        {/* Header */}
        <div
          style={{
            padding: '1.5rem',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <EmberGlyph />
          {!isCollapsed && (
            <span
              style={{
                fontFamily: 'var(--type-display-m-family)',
                fontSize: '1.25rem',
                fontWeight: 400,
                color: 'var(--foreground)',
                whiteSpace: 'nowrap',
              }}
            >
              Krowe
            </span>
          )}
        </div>

        {/* Main nav */}
        <nav style={{ flex: 1, padding: '1rem 0', overflowY: 'auto' }}>
          <div style={{ marginBottom: '1.5rem' }}>
            {mainItems.map((item) => (
              <NavItemButton
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                isCollapsed={isCollapsed}
                onClick={() => {
                  onNavigate?.(item.id);
                  setIsMobileOpen(false);
                }}
              />
            ))}
          </div>

          <div
            style={{
              height: '1px',
              background: 'var(--border)',
              margin: '0 1rem 1.5rem',
            }}
          />

          <div>
            {bottomItems.map((item) => (
              <NavItemButton
                key={item.id}
                item={item}
                isActive={activeItem === item.id}
                isCollapsed={isCollapsed}
                onClick={() => {
                  onNavigate?.(item.id);
                  setIsMobileOpen(false);
                }}
              />
            ))}
          </div>
        </nav>

        {/* User pod */}
        <div
          style={{
            padding: '1rem',
            borderTop: '1px solid var(--border)',
            position: 'relative',
          }}
        >
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.5rem',
              background: 'transparent',
              border: 'none',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              transition: 'all var(--duration-fast) var(--ease-out-smooth)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--background)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--type-body-s-size)',
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {userAvatar || userName.charAt(0).toUpperCase()}
            </div>
            {!isCollapsed && (
              <>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--type-body-size)',
                    color: 'var(--foreground)',
                    fontWeight: 500,
                    flex: 1,
                    textAlign: 'left',
                  }}
                >
                  {userName}
                </span>
                <ChevronDownIcon
                  size={16}
                  style={{
                    color: 'var(--muted-foreground)',
                    transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform var(--duration-fast) var(--ease-out-smooth)',
                  }}
                />
              </>
            )}
          </button>

          {showUserMenu && !isCollapsed && (
            <div
              style={{
                position: 'absolute',
                bottom: '100%',
                left: '1rem',
                right: '1rem',
                marginBottom: '0.5rem',
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-3)',
                padding: '0.5rem',
                animation: 'slide-up var(--duration-fast) var(--ease-out-smooth)',
              }}
            >
              <UserMenuItem label="Settings" />
              <UserMenuItem label="Sign out" />
              <UserMenuItem label="Help" />
            </div>
          )}
        </div>
      </aside>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

function NavItemButton({
  item,
  isActive,
  isCollapsed,
  onClick,
}: {
  item: NavItem;
  isActive: boolean;
  isCollapsed: boolean;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: isCollapsed ? '0' : '0 1rem',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
        background: isActive
          ? 'color-mix(in oklch, var(--primary) 8%, transparent)'
          : isHovered
          ? 'color-mix(in oklch, var(--foreground) 4%, transparent)'
          : 'transparent',
        border: 'none',
        borderLeft: isActive ? '2px solid var(--primary)' : '2px solid transparent',
        color: isActive ? 'var(--primary)' : 'var(--foreground)',
        cursor: 'pointer',
        transition: 'all var(--duration-fast) var(--ease-out-smooth)',
        position: 'relative',
      }}
    >
      <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        {item.icon}
      </span>
      {!isCollapsed && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--type-body-s-size)',
            fontWeight: isActive ? 600 : 400,
            whiteSpace: 'nowrap',
          }}
        >
          {item.label}
        </span>
      )}
    </button>
  );
}

function UserMenuItem({ label }: { label: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '100%',
        padding: '0.5rem 0.75rem',
        background: isHovered ? 'var(--surface-subtle)' : 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--type-body-s-size)',
        color: 'var(--foreground)',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all var(--duration-fast) var(--ease-out-smooth)',
      }}
    >
      {label}
    </button>
  );
}

function EmberGlyph() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <circle cx="8" cy="8" r="6" fill="var(--primary)" opacity="0.2" />
      <circle cx="8" cy="8" r="4" fill="var(--primary)" opacity="0.4" />
      <circle cx="8" cy="8" r="2.5" fill="var(--primary)" />
      <circle cx="9" cy="7" r="1" fill="var(--primary-accent)" />
    </svg>
  );
}
