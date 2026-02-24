// ============================================
// FaceFind Frontend - Navbar Component
// ============================================
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiSearch, FiLogOut, FiGrid, FiUser } from 'react-icons/fi';

export default function Navbar() {
  const { admin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="glass sticky top-0 z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <FiSearch className="text-white text-lg" />
            </div>
            <span className="text-xl font-bold gradient-text">FaceFind</span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              Search Photos
            </Link>

            {admin ? (
              <>
                <Link
                  to="/admin/dashboard"
                  className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors text-sm font-medium"
                >
                  <FiGrid size={16} />
                  Dashboard
                </Link>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <FiUser size={14} />
                  {admin.name}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors text-sm"
                >
                  <FiLogOut size={14} />
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/admin/login"
                className="btn-primary !py-2 !px-4 text-sm"
              >
                Admin Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
