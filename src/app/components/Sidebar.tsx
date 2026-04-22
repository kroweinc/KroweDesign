import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
import { EmberGlyph } from './EmberGlyph';

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
      {/* Mobile toggle */}
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
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
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
      </AnimatePresence>

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
          transition: 'width var(--duration-normal) var(--ease-out-smooth)',
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
          <EmberGlyph animated size={16} />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.12 }}
                style={{
                  fontFamily: 'var(--type-display-m-family)',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: 'var(--foreground)',
                  whiteSpace: 'nowrap',
                }}
              >
                Krowe
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Main nav */}
        <nav style={{ flex: 1, padding: '1rem 0', overflowY: 'auto' }}>
          <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
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

          <div style={{ height: '1px', background: 'var(--border)', margin: '0 1rem 1.5rem' }} />

          <div style={{ position: 'relative' }}>
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
        <div style={{ padding: '1rem', borderTop: '1px solid var(--border)', position: 'relative' }}>
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
              transition: 'background var(--duration-fast) var(--ease-out-smooth)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--background)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-accent) 100%)',
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
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  style={{ display: 'flex', alignItems: 'center', flex: 1, gap: '0.5rem', overflow: 'hidden' }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: 'var(--type-body-size)',
                      color: 'var(--foreground)',
                      fontWeight: 500,
                      flex: 1,
                      textAlign: 'left',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
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
                      flexShrink: 0,
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          <AnimatePresence>
            {showUserMenu && !isCollapsed && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15 }}
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
                }}
              >
                <UserMenuItem label="Settings" />
                <UserMenuItem label="Sign out" />
                <UserMenuItem label="Help" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </aside>
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
        color: isActive ? 'var(--primary)' : 'var(--foreground)',
        cursor: 'pointer',
        transition: 'background var(--duration-fast) var(--ease-out-smooth), color var(--duration-fast) var(--ease-out-smooth)',
        position: 'relative',
      }}
    >
      {/* Sliding active indicator */}
      {isActive && (
        <motion.div
          layoutId="nav-indicator"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--primary)',
            borderRadius: '0 2px 2px 0',
          }}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}

      <span style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
        {item.icon}
      </span>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--type-body-s-size)',
              fontWeight: isActive ? 600 : 400,
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
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
        transition: 'background var(--duration-fast) var(--ease-out-smooth)',
      }}
    >
      {label}
    </button>
  );
}
