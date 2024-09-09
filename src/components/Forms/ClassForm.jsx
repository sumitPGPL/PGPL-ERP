import React, { useState } from 'react';

const ClassForm = () => {
  const [sections, setSections] = useState(['A']);
  const [selectedClass, setSelectedClass] = useState('');
  const [attendance, setAttendance] = useState(false);
  const [subjects, setSubjects] = useState([]);

  const handleAddSection = () => {
    setSections([...sections, String.fromCharCode(sections.length + 65)]);
  };

  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4'];
  const availableSubjects = ['Math', 'Science', 'History', 'English'];
  const houses = ['Red', 'Blue', 'Green', 'Yellow'];

  return (
    <form className="space-y-4 p-6 bg-white shadow-md rounded-md">
      {/* Class Dropdown */}
      <div>
        <label htmlFor="class" className="block text-sm font-medium text-gray-700">Class</label>
        <select
          id="class"
          className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">Select Class</option>
          {classes.map((cls) => (
            <option key={cls} value={cls}>{cls}</option>
          ))}
        </select>
      </div>

      {/* Class Strength */}
      <div>
        <label htmlFor="strength" className="block text-sm font-medium text-gray-700">Class Strength</label>
        <input
          id="strength"
          type="number"
          className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Teacher Information */}
      <div>
        <label htmlFor="teacher" className="block text-sm font-medium text-gray-700">Teacher Information</label>
        <input
          id="teacher"
          type="text"
          placeholder="Teacher Name, Subject, Time"
          className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
        />
      </div>

      {/* Sections */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Sections</label>
        <div className="flex space-x-2">
          {sections.map((section, index) => (
            <input
              key={index}
              type="text"
              value={section}
              readOnly
              className="mt-1 p-2 border-gray-300 rounded-md shadow-sm"
            />
          ))}
          <button
            type="button"
            className="mt-1 p-2 bg-blue-500 text-white rounded-md"
            onClick={handleAddSection}
          >
            Add Section
          </button>
        </div>
      </div>

      {/* Attendance */}
      <div className="flex items-center">
        <input
          id="attendance"
          type="checkbox"
          checked={attendance}
          onChange={() => setAttendance(!attendance)}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor="attendance" className="ml-2 block text-sm text-gray-900">
          Attendance Marked
        </label>
      </div>

      {/* Subjects Offered */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Subjects Offered</label>
        <select
          multiple
          value={subjects}
          onChange={(e) => setSubjects([...e.target.selectedOptions].map(opt => opt.value))}
          className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
        >
          {availableSubjects.map((subject) => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      {/* Houses */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Houses</label>
        <select className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm">
          <option value="">Select House</option>
          {houses.map((house) => (
            <option key={house} value={house}>{house}</option>
          ))}
        </select>
      </div>

      {/* Assignments */}
      <div>
        <label htmlFor="assignments" className="block text-sm font-medium text-gray-700">Assignments</label>
        <textarea
          id="assignments"
          rows="3"
          className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-4 w-full p-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default ClassForm;
