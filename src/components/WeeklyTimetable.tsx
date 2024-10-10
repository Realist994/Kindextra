import React, { useState } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const sessions = [
  { name: 'Jogging', color: 'bg-green-200' },
  { name: 'Road Walk', color: 'bg-yellow-200' },
  { name: 'Running', color: 'bg-red-200' },
  { name: 'Yoga', color: 'bg-purple-200' },
  { name: 'Strength Training', color: 'bg-blue-200' },
  { name: 'Cardio', color: 'bg-orange-200' },
];

const WeeklyTimetable: React.FC = () => {
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const navigate = useNavigate();

  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const days = Array.from({ length: 6 }, (_, i) => addDays(startDate, i));

  const handleSessionClick = (session: string) => {
    setSelectedSession(session);
    // You can add logic here to check if the user is logged in
    // For now, we'll just set the selected session
  };

  return (
    <div className="space-y-8">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 bg-gray-100">Time</th>
              {days.map((day) => (
                <th key={day.toString()} className="border p-2 bg-gray-100">
                  {format(day, 'EEEE')}
                  <br />
                  {format(day, 'MMM d')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 12 }, (_, i) => i + 6).map((hour) => (
              <tr key={hour}>
                <td className="border p-2 font-semibold">
                  {hour % 12 || 12}:00 {hour >= 12 ? 'PM' : 'AM'}
                </td>
                {days.map((day) => {
                  const randomSession = sessions[Math.floor(Math.random() * sessions.length)];
                  return (
                    <td
                      key={day.toString()}
                      className={`border p-2 ${randomSession.color} cursor-pointer hover:opacity-80 transition-opacity`}
                      onClick={() => handleSessionClick(randomSession.name)}
                    >
                      {randomSession.name}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedSession && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-blue-100 rounded-md"
        >
          Selected session: {selectedSession}
        </motion.div>
      )}
      <div className="mt-8 text-center">
        <p className="mb-4 text-lg">To book a session, please log in or create an account:</p>
        <div className="space-x-4">
          <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Login
          </Link>
          <Link to="/register" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeeklyTimetable;