import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [selectedScanType, setSelectedScanType] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Get form values
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;

    // Generate unique appointment ID
    const appointmentId = 'APT-' + Math.floor(100000 + Math.random() * 900000);

    // Simulate booking process
    setTimeout(() => {
      setIsLoading(false);

      // ✅ Show success toast with ID
      toast.success(
        `✅ Appointment booked successfully! Your appointment ID is ${appointmentId}. You will receive SMS and email confirmation shortly.`
      );

      form.reset();
      setUploadedFile(null);
      // Reset scan type - if URL has parameter, useEffect will set it again
      setSelectedScanType('');

      // ✅ After 8 seconds redirect to WhatsApp
      setTimeout(() => {
        const phoneNumber = "917895317700"; // ✅ Your WhatsApp number
        const bigMessage = `Dear Sir, \n My appointment has been successfully booked.\n\n Name: ${firstName} ${lastName}\n Appointment ID: ${appointmentId}\n\nPlease confirm my appointment. Thank you!`;
        window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(bigMessage)}`;
      }, 8000);
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

  // Get scan type from URL parameter and set it as default
  useEffect(() => {
    const scanTypeFromUrl = searchParams.get('scanType');
    if (scanTypeFromUrl) {
      setSelectedScanType(scanTypeFromUrl);
    }
  }, [searchParams]);

  return (
    <section 
        id="booking" 
        className="px-4 bg-white"
        style={{
          paddingTop: 'var(--booking-padding-top, 6rem)',
          paddingBottom: 'var(--booking-padding-bottom, 3rem)'
        }}
      >
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
                  <option value="12:00">12:00 PM</option>
                  <option value="12:30">12:30 PM</option>
                  <option disabled>1:00 - 2:00 PM Lunch Time</option>
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
                value={selectedScanType}
                onChange={(e) => setSelectedScanType(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="">Select Scan Type</option>
                <option value="ultrasound">Ultrasound</option>
                <option value="doppler">4D Color Doppler</option>
                <option value="tvs">TVS (Transvaginal Scan)</option>
                <option value="mammography">Mammography (Breast)</option>
                <option value="level2">Level II Ultrasound</option>
                <option value="liver">Liver Scan</option>
                <option value="gallbladder">Gall Bladder</option>
                <option value="cbd">C.B.D. (Common Bile Duct)</option>
                <option value="thyroid">Thyroid Scan</option>
                <option value="upperabdomen">Upper Abdomen</option>
                <option value="lowerabdomen">Lower Abdomen</option>
                <option value="wholeabdomen">Whole Abdomen</option>
              </select>
            </div>

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
              className="bg-green-500 w-full text-white py-4 rounded-lg text-lg font-bold transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="spinner w-5 h-5 border-2 border-t-2 border-white rounded-full animate-spin"></div>
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
