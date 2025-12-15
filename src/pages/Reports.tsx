
import { useState } from 'react';
import { toast } from 'sonner';

const Reports = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const patientId = formData.get('patientId');
    const phone = formData.get('phoneLogin');
    const dob = formData.get('dob');

    if (patientId && phone && dob) {
      setIsLoggedIn(true);
      toast.success('Login successful! Welcome to your patient portal.');
    } else {
      toast.error('Invalid credentials. Please check your details and try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.info('You have been logged out successfully.');
  };

  const downloadReport = (filename: string) => {
    toast.success(`Downloading ${filename}...`);
  };

  const reports = [
    {
      title: 'Pregnancy Ultrasound Report',
      date: 'March 15, 2024',
      status: 'Ready',
      filename: 'pregnancy-report.pdf'
    },
    {
      title: 'Abdominal Scan Report',
      date: 'February 28, 2024',
      status: 'Ready',
      filename: 'abdominal-report.pdf'
    },
    {
      title: '3D Ultrasound Images',
      date: 'January 20, 2024',
      status: 'Ready',
      filename: '3d-images.pdf'
    }
  ];

  return (
    <section 
        id="booking" 
        className="px-4 bg-white"
        style={{
          paddingTop: 'var(--booking-padding-top, 6rem)',
          paddingBottom: 'var(--booking-padding-bottom, 3rem)'
        }}
      >
      <div className="max-w-6xl mx-auto mt-[30px] mb-[30px]">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-7 text-black">
          Patient Report Portal
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 bg-gradient-to-r from-yellow-300 via-yellow-300 to-yellow-300 bg-clip-text text-transparent">
  You can Download your report from here!......
</h3>

        <h6 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-8 md:mb-12 text-black">
          Just Enter Your Patient ID and Phone Number
        </h6>



        

        {!isLoggedIn ? (
          <div className="max-w-md mx-auto">
            <div className="bg-gray-200 p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 text-black">
                Secure Login
              </h3>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="patientId" className="block text-sm font-semibold text-black mb-2">
                    Patient ID *
                  </label>
                  <input
                    type="text"
                    id="patientId"
                    name="patientId"
                    required
                    placeholder="Enter your Patient ID"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="phoneLogin" className="block text-sm font-semibold text-black mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phoneLogin"
                    name="phoneLogin"
                    required
                    placeholder="Enter registered phone number"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                {/* <div>
                  <label htmlFor="dob" className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div> */}
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 md:py-3 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Access Reports
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 text-gray-800">
              Your Reports
            </h3>
            <div className="space-y-4 mb-8">
              {reports.map((report, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center card-hover"
                >
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-gray-800">
                      {report.title}
                    </h4>
                    <p className="text-gray-600">
                      Date: {report.date} | Status: {report.status}
                    </p>
                  </div>
                  <button
                    onClick={() => downloadReport(report.filename)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center gap-2"
                  >
                    <i className="fas fa-download"></i>
                    Download
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center">
              <button
                onClick={handleLogout}
                className="gradient-gold text-gray-800 px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg font-bold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reports;
