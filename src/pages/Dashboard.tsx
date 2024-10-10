import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for user bookings
  const bookings = [
    { id: 1, session: 'Yoga', date: '2024-03-15', time: '10:00 AM' },
    { id: 2, session: 'Strength Training', date: '2024-03-17', time: '2:00 PM' },
    { id: 3, session: 'Cardio', date: '2024-03-20', time: '9:00 AM' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Bookings</h2>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 text-white p-2 rounded-full">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{booking.session}</h3>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {booking.date}
                  </div>
                  <div className="text-sm text-gray-600 flex items-center">
                    <Clock size={16} className="mr-1" />
                    {booking.time}
                  </div>
                </div>
              </div>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors">
                Cancel
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" defaultValue="John Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" defaultValue="john@example.com" />
          </div>
          <div>
            <label htmlFor="location" className="block mb-1 font-medium">Location</label>
            <input type="text" id="location" className="w-full px-3 py-2 border rounded-md" defaultValue="New York, NY" />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">Phone Number</label>
            <input type="tel" id="phone" className="w-full px-3 py-2 border rounded-md" defaultValue="(123) 456-7890" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;