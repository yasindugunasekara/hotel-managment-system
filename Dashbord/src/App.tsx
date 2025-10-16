import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Bookings from './components/Bookings';
import Messages from './components/Messages';
import Rooms from './components/Rooms';
import UsersPage from './components/UsersPage';
import SettingsPage from './components/SettingsPage';

function HotelDashboard() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard': return <Dashboard />;
      case 'bookings': return <Bookings />;
      case 'messages': return <Messages />;
      case 'rooms': return <Rooms />;
      case 'users': return <UsersPage />;
      case 'settings': return <SettingsPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 p-6">
          {renderPage()}
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default HotelDashboard;
