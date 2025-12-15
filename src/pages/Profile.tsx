import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { logout } from '../lib/auth';
import { useNavigate } from 'react-router-dom';
import ProfileIcon from '../components/ProfileIcon';

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: '',
    phone: '',
    dob: '',
  });

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const mockAppointments = [
    {
      id: 'APT-123456',
      service: 'Ultrasound',
      date: '2024-03-20',
      time: '10:00 AM',
      status: 'Confirmed',
      doctor: 'Dr. MAHREEN KHAN'
    },
    {
      id: 'APT-123457',
      service: '4D Color Doppler',
      date: '2024-03-25',
      time: '2:00 PM',
      status: 'Pending',
      doctor: 'Dr. Amanat Ali'
    },
    {
      id: 'APT-123458',
      service: 'Mammography',
      date: '2024-03-18',
      time: '11:30 AM',
      status: 'Completed',
      doctor: 'Dr. Mohd. Khalid'
    }
  ];

  const mockReports = [
    {
      id: 'RPT-001',
      title: 'Ultrasound Report',
      date: '2024-03-18',
      status: 'Ready',
      type: 'PDF'
    },
    {
      id: 'RPT-002',
      title: '4D Color Doppler Report',
      date: '2024-03-15',
      status: 'Ready',
      type: 'PDF'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 pt-20 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 mb-6 md:mb-8 profile-fade-in">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            {/* Profile Avatar */}
            <div className="relative">
              <ProfileIcon
                email={user?.email}
                size="lg"
              />
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-colors">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-snug">
                Welcome back!
                <span className="block">{user?.email?.split('@')[0] || 'User'}</span>
              </h1>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  Patient ID: {user?.uid?.substring(0, 8) || 'N/A'}
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Active Member
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto md:w-auto">
              <button
                onClick={() => navigate('/booking')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Book New Appointment
              </button>
              <button
                onClick={() => navigate('/reports')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                View Reports
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 md:mb-8 profile-slide-in">
          <div>
            <nav className="flex flex-nowrap justify-between gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-6">
              {[
                { id: 'profile', label: 'Profile', icon: 'fas fa-user' },
                { id: 'appointments', label: 'Appointments', icon: 'fas fa-calendar' },
                { id: 'reports', label: 'Reports', icon: 'fas fa-file-medical' },
                { id: 'settings', label: 'Settings', icon: 'fas fa-cog' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-1 min-w-0 items-center justify-center gap-1 sm:gap-1.5 py-2.5 sm:py-3 px-2 sm:px-3 md:px-4 text-[11px] sm:text-xs md:text-sm font-medium whitespace-nowrap transition-colors border-b ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <i className={tab.icon}></i>
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-6 md:p-8">
            {activeTab === 'profile' && (
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, fullName: e.target.value }))}
                      disabled={!isEditing}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue={user?.email || ''}
                      disabled
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, phone: e.target.value }))}
                      disabled={!isEditing}
                      placeholder="Enter your contact number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                    <input
                      type="date"
                      value={profileData.dob}
                      onChange={(e) => setProfileData((prev) => ({ ...prev, dob: e.target.value }))}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {isEditing ? (
                    <>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                      >
                        Save Changes
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Appointment History</h3>
                <div className="space-y-4">
                  {mockAppointments.map((appointment) => (
                    <div key={appointment.id} className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                            <h4 className="text-base md:text-lg font-semibold text-gray-900">{appointment.service}</h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${getStatusColor(appointment.status)}`}>
                              {appointment.status}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base text-gray-600 mb-1">Appointment ID: {appointment.id}</p>
                          <p className="text-sm sm:text-base text-gray-600 mb-1">Doctor: {appointment.doctor}</p>
                          <p className="text-sm sm:text-base text-gray-600">Date: {appointment.date} at {appointment.time}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Reschedule
                          </button>
                          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Medical Reports</h3>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  {mockReports.map((report) => (
                    <div key={report.id} className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0 mb-4">
                        <div className="flex-1">
                          <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{report.title}</h4>
                          <p className="text-sm sm:text-base text-gray-600 mb-1">Report ID: {report.id}</p>
                          <p className="text-sm sm:text-base text-gray-600">Date: {report.date}</p>
                        </div>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium w-fit">
                          {report.status}
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-1">
                          Download {report.type}
                        </button>
                        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Share
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Account Settings</h3>
                
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Security</h4>
                  <div className="space-y-4">
                    <button className="w-full text-left bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Change Password</p>
                          <p className="text-sm text-gray-600">Update your account password</p>
                        </div>
                        <i className="fas fa-chevron-right text-gray-400"></i>
                      </div>
                    </button>
                    <button className="w-full text-left bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                          <p className="text-sm text-gray-600">Add an extra layer of security</p>
                        </div>
                        <i className="fas fa-chevron-right text-gray-400"></i>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Notifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Email Notifications</p>
                        <p className="text-sm text-gray-600">Receive updates via email</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">SMS Notifications</p>
                        <p className="text-sm text-gray-600">Receive updates via SMS</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-4 sm:p-6 border border-red-200">
                  <h4 className="text-base md:text-lg font-semibold text-red-900 mb-4">Danger Zone</h4>
                  <p className="text-sm sm:text-base text-red-700 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors w-full sm:w-auto">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Logout Section */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 profile-scale-in">
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Ready to leave?</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">Click the button below to log out of your account.</p>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 