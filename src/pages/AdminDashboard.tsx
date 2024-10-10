import React, { useState } from 'react';
import { Calendar, Clock, User, Edit, Trash2 } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [bookings, setBookings] = useState([
    { id: 1, user: 'Alice Johnson', session: 'Yoga', date: '2024-03-15', time: '10:00 AM', status: 'Pending' },
    { id: 2, user: 'Bob Smith', session: 'Strength Training', date: '2024-03-17', time: '2:00 PM', status: 'Approved' },
    { id: 3, user: 'Charlie Brown', session: 'Cardio', date: '2024-03-20', time: '9:00 AM', status: 'Pending' },
  ]);

  const handleApprove = (id: number) => {
    setBookings(bookings.map(booking =>
      booking.id === id ? { ...booking, status: 'Approved' } : booking
    ));
  };

  const handleReject = (id: number) => {
    setBookings(bookings.map(booking =>
      booking.id === id ? { ...booking, status: 'Rejected' } : booking
    ));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Bookings</h2>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 text-white p-2 rounded-full">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{booking.user}</h3>
                  <p className="text-sm text-gray-600">{booking.session}</p>
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
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  booking.status === 'Approved' ? 'bg-green-200 text-green-800' :
                  booking.status === 'Rejected' ? 'bg-red-200 text-red-800' :
                  'bg-yellow-200 text-yellow-800'
                }`}>
                  {booking.status}
                </span>
                {booking.status === 'Pending' && (
                  <>
                    <button
                      onClick={() => handleApprove(booking.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(booking.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                    >
                      Reject
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Manage Timetable</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Time</th>
              <th className="border p-2">Monday</th>
              <th className="border p-2">Tuesday</th>
              <th className="border p-2">Wednesday</th>
              <th className="border p-2">Thursday</th>
              <th className="border p-2">Friday</th>
              <th className="border p-2">Saturday</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }, (_, i) => i + 6).map((hour) => (
              <tr key={hour}>
                <td className="border p-2 font-semibold">
                  {hour % 12 || 12}:00 {hour >= 12 ? 'PM' : 'AM'}
                </td>
                {Array.from({ length: 6 }).map((_, dayIndex) => (
                  <td key={dayIndex} className="border p-2">
                    <div className="flex justify-between items-center">
                      <span>Yoga</span>
                      <div className="space-x-1">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;