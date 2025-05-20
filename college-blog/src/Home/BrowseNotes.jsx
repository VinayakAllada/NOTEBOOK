import React, { useState, useEffect } from "react";
import axios from "axios";

// You can fetch these from backend if you want
const MOCK_SEMESTERS = [
  { id: "sem1", name: "Semester 1" },
  { id: "sem2", name: "Semester 2" },
  { id: "sem3", name: "Semester 3" },
  { id: "sem4", name: "Semester 4" },
  { id: "sem5", name: "Semester 5" },
  { id: "sem6", name: "Semester 6" },
  { id: "sem7", name: "Semester 7" },
  { id: "sem8", name: "Semester 8" },
];

const MOCK_DEPARTMENTS = {
  sem1: [
    { id: "cse", name: "Computer Science and engineering" },
    { id: "ece", name: "Electronics" },
    { id: "eee", name: "Electrical" },
    { id: "cme", name: "Chemical" },
    { id: "mec", name: "Mechanical" },
    { id: "min", name: "Mining" },
    { id: "mme", name: "Metallurgy" },
    { id: "civ", name: "civil" },
  ],
  sem2: [
    { id: "cse", name: "Computer Science and engineering" },
    { id: "ece", name: "Electronics" },
    { id: "eee", name: "Electrical" },
    { id: "cme", name: "Chemical" },
    { id: "mec", name: "Mechanical" },
    { id: "min", name: "Mining" },
    { id: "mme", name: "Metallurgy" },
    { id: "civ", name: "civil" },
  ],
  sem3: [
    { id: "cse", name: "Computer Science and engineering" },
    { id: "ece", name: "Electronics" },
    { id: "eee", name: "Electrical" },
    { id: "cme", name: "Chemical" },
    { id: "mec", name: "Mechanical" },
    { id: "min", name: "Mining" },
    { id: "mme", name: "Metallurgy" },
    { id: "civ", name: "civil" },
  ],
  sem4: [
    { id: "cse", name: "Computer Science and engineering" },
    { id: "ece", name: "Electronics" },
    { id: "eee", name: "Electrical" },
    { id: "cme", name: "Chemical" },
    { id: "mec", name: "Mechanical" },
    { id: "min", name: "Mining" },
    { id: "mme", name: "Metallurgy" },
    { id: "civ", name: "civil" },
  ],
  sem5: [
    { id: "cse", name: "Computer Science and engineering" },
    { id: "ece", name: "Electronics" },
    { id: "eee", name: "Electrical" },
    { id: "cme", name: "Chemical" },
    { id: "mec", name: "Mechanical" },
    { id: "min", name: "Mining" },
    { id: "mme", name: "Metallurgy" },
    { id: "civ", name: "civil" },
  ],
  sem6: [
    { id: "cse", name: "Computer Science and engineering" },
    { id: "ece", name: "Electronics" },
    { id: "eee", name: "Electrical" },
    { id: "cme", name: "Chemical" },
    { id: "mec", name: "Mechanical" },
    { id: "min", name: "Mining" },
    { id: "mme", name: "Metallurgy" },
    { id: "civ", name: "civil" },
  ],
  sem7: [
    { id: "cse", name: "Computer Science and engineering" },
    { id: "ece", name: "Electronics" },
    { id: "eee", name: "Electrical" },
    { id: "cme", name: "Chemical" },
    { id: "mec", name: "Mechanical" },
    { id: "min", name: "Mining" },
    { id: "mme", name: "Metallurgy" },
    { id: "civ", name: "civil" },
  ],
  sem8: [
    { id: "cse", name: "Computer Science and engineering" },
    { id: "ece", name: "Electronics" },
    { id: "eee", name: "Electrical" },
    { id: "cme", name: "Chemical" },
    { id: "mec", name: "Mechanical" },
    { id: "min", name: "Mining" },
    { id: "mme", name: "Metallurgy" },
    { id: "civ", name: "civil" },
  ],
};

const SUBJECTS = {
  sem1: {
    cse: [
      { id: "maths", name: "Mathematics" },
      { id: "dsa", name: "Data Structures" },
    ],
    ece: [
      { id: "physics", name: "Physics" },
      { id: "circuit", name: "Circuit Theory" },
    ],
  },
  sem2: {
    mech: [
      { id: "thermo", name: "Thermodynamics" },
      { id: "drawing", name: "Engineering Drawing" },
    ],
    civil: [
      { id: "survey", name: "Surveying" },
      { id: "geo", name: "Geology" },
    ],
  },
};

const BrowseNotes = () => {
  const [departments, setDepartments] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Update departments when semester changes
  useEffect(() => {
    setSelectedDepartment("");
    setSelectedSubject("");
    setSubjects([]);
    setNotes([]);
    if (selectedSemester) {
      setDepartments(MOCK_DEPARTMENTS[selectedSemester] || []);
    } else {
      setDepartments([]);
    }
  }, [selectedSemester]);

  // Update subjects when department changes
  useEffect(() => {
    setSelectedSubject("");
    setNotes([]);
    if (selectedSemester && selectedDepartment) {
      setSubjects(
        (SUBJECTS[selectedSemester] &&
          SUBJECTS[selectedSemester][selectedDepartment]) ||
          []
      );
    } else {
      setSubjects([]);
    }
  }, [selectedDepartment, selectedSemester]);

  // Fetch notes from backend when subject changes
  useEffect(() => {
    if (selectedSemester && selectedDepartment && selectedSubject) {
      setLoading(true);
      setError("");
      setNotes([]);
      axios
        .get(
          `/api/notes?semester=${selectedSemester}&department=${selectedDepartment}&subject=${selectedSubject}`
        )
        .then((res) => {
          // Defensive: ensure notes is always an array
          if (Array.isArray(res.data)) {
            setNotes(res.data);
          } else if (res.data && Array.isArray(res.data.notes)) {
            setNotes(res.data.notes);
          } else {
            setNotes([]);
          }
          setLoading(false);
        })
        .catch(() => {
          setError("Failed to load notes");
          setLoading(false);
        });
    }
  }, [selectedSemester, selectedDepartment, selectedSubject]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Browse Notes</h1>

      {/* Selection Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Semester Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Semester
            </label>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">Select Semester</option>
              {MOCK_SEMESTERS.map((semester) => (
                <option key={semester.id} value={semester.id}>
                  {semester.name}
                </option>
              ))}
            </select>
          </div>

          {/* Department Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Department
            </label>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full p-2 border rounded-md"
              disabled={!selectedSemester}
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full p-2 border rounded-md"
              disabled={!selectedDepartment}
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Notes Display Section */}
      {selectedSemester && selectedDepartment && selectedSubject && (
        <div>
          {loading ? (
            <div className="text-center text-gray-500 mt-8">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500 mt-8">{error}</div>
          ) : Array.isArray(notes) && notes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{note.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {note.fileType}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{note.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Uploaded by: {note.uploadedBy}</span>
                    <span>
                      {note.uploadDate
                        ? new Date(note.uploadDate).toLocaleDateString()
                        : ""}
                    </span>
                  </div>
                  <a
                    href={note.fileUrl}
                    className="mt-4 w-full inline-block text-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                    download
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 mt-8">
              No notes are uploaded for this subject.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrowseNotes;

