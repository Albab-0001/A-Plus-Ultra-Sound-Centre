
import { useState } from 'react';
import { toast } from 'sonner';

const Booking = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Appointment booked successfully! You will receive SMS and email confirmation shortly.');
      (e.target as HTMLFormElement).reset();
      setUploadedFile(null);
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto mt-[30px] mb-[30px]">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Book Your Appointment
        </h2>
        
        <div className="bg-gray-200 p-8 md:p-12 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-black mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-black mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>
           
    
            

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="appointmentDate" className="block text-sm font-semibold text-black mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  min={minDate}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="appointmentTime" className="block text-sm font-semibold text-black mb-2">
                  Preferred Time *
                </label>
                <select
                  id="appointmentTime"
                  name="appointmentTime"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Select Time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="09:30">9:30 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="10:30">10:30 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="11:30">12:00 PM</option>
                  <option value="11:30">12:30 PM</option>
                  <option value="11:30"><p>1:00 - 2:00 PM Lunch Time</p></option>
                  <option value="14:00">2:00 PM</option>
                  <option value="14:30">2:30 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="15:30">3:30 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="16:30">4:30 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="scanType" className="block text-sm font-semibold text-black mb-2">
                Type of Scan *
              </label>
              <select
                id="scanType"
                name="scanType"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Select Scan Type</option>
                <option value="pregnancy"> Ultrasound</option>
                <option value="abdominal">4D Color Doppler</option>
                <option value="pelvic">TVS (Transvaginal Scan)</option>
                <option value="doppler">Mammography (Breast)</option>
                <option value="3d4d">Level II Ultrasound</option>
                <option value="breast">Liver Scan</option>
                <option value="musculoskeletal">Gall Bladder</option>
                <option value="anomaly">C.B.D. (Common Bile Duct)</option>
                <option value="anomaly">Thyroid Scan</option>
                <option value="anomaly">Upper Abdomen</option>
                <option value="anomaly">Lower Abdomen</option>
                <option value="anomaly">Whole Abdomen</option>
              </select>
            </div>
            {/*
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Prescription (Optional)
              </label>
              <div
                className={`file-upload-zone p-8 text-center rounded-lg cursor-pointer ${
                  uploadedFile ? 'bg-green-50 border-green-300' : ''
                }`}
                onClick={() => document.getElementById('prescription')?.click()}
              >
                {uploadedFile ? (
                  <>
                    <i className="fas fa-check-circle text-4xl text-green-500 mb-4"></i>
                    <p className="text-green-700">File uploaded: {uploadedFile}</p>
                  </>
                ) : (
                  <>
                    <i className="fas fa-cloud-upload-alt text-4xl text-blue-500 mb-4"></i>
                    <p className="text-gray-600">Click to upload prescription or drag and drop</p>
                  </>
                )}
                <input
                  type="file"
                  id="prescription"
                  name="prescription"
                  onChange={handleFileUpload}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                />
              </div>
            </div>
            */}

            <div>
              <label htmlFor="notes" className="block text-sm font-semibold text-black mb-2">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                placeholder="Any special requirements or medical history..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-green-500  w-full  text-white  py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="spinner w-5 h-5 border-2"></div>
                  Booking...
                </div>
              ) : (
                'Book Appointment'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
