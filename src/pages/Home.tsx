import React from 'react';
import WeeklyTimetable from '../components/WeeklyTimetable';

const Home: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center text-blue-600">Welcome to Kindextra</h1>
      <p className="text-xl text-center text-gray-600">Book your favorite fitness sessions and start your journey to a healthier you!</p>
      <WeeklyTimetable />
    </div>
  );
};

export default Home;