import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Example data
const SEMESTERS = [
  { id: "sem1", name: "Semester 1" },
  { id: "sem2", name: "Semester 2" },
];

const DEPARTMENTS = {
  sem1: [
    { id: "cse", name: "Computer Science" },
    { id: "ece", name: "Electronics" },
  ],
  sem2: [
    { id: "mech", name: "Mechanical" },
    { id: "civil", name: "Civil" },
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

const UploadNotes = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [file, setFile] = useState(null);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSelectedDepartment("");
    setSelectedSubject(null);
    setSubjects([]);
    if (selectedSemester) {
      setDepartments(DEPARTMENTS[selectedSemester] || []);
    } else {
      setDepartments([]);
    }
  }, [selectedSemester]);

  useEffect(() => {
    setSelectedSubject(null);
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubjectChange = (e) => {
    const subjectId = e.target.value;
    const subjectObj = subjects.find((s) => s.id === subjectId);
    setSelectedSubject(subjectObj || null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    if (
      !selectedSemester ||
      !selectedDepartment ||
      !selectedSubject ||
      !file
    ) {
      setError("Please fill all fields and select a file.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Save note info to localStorage
      const note = {
        semester: selectedSemester,
        department: selectedDepartment,
        subject: selectedSubject,
        fileName: file.name,
        uploadedAt: new Date().toISOString(),
      };
      const existingNotes = JSON.parse(localStorage.getItem("notes") || "[]");
      localStorage.setItem("notes", JSON.stringify([...existingNotes, note]));

      setSuccess("Note uploaded successfully! (mock)");
      setError("");
      setFile(null);
      setSelectedSemester("");
      setSelectedDepartment("");
      setSelectedSubject(null);
      setLoading(false);

      toast.success("Note uploaded successfully!");
      navigate("/mainpage"); // Redirect to home page
    }, 1000);
  };

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Upload Notes</h1>
      <form
        className="bg-white rounded-lg shadow-md p-6"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {/* Semester */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Semester</label>
          <select
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Semester</option>
            {SEMESTERS.map((semester) => (
              <option key={semester.id} value={semester.id}>
                {semester.name}
              </option>
            ))}
          </select>
        </div>

        {/* Department */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Department</label>
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="w-full p-2 border rounded-md"
            disabled={!selectedSemester}
            required
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Subject</label>
          <select
            value={selectedSubject ? selectedSubject.id : ""}
            onChange={handleSubjectChange}
            className="w-full p-2 border rounded-md"
            disabled={!selectedDepartment}
            required
          >
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject.id} value={subject.id}>
                {subject.name}
              </option>
            ))}
          </select>
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Upload Document/PDF</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            onChange={handleFileChange}
            className="w-full"
            required
          />
        </div>

        {/* Status messages */}
        {success && <div className="text-green-600 mb-2">{success}</div>}
        {error && <div className="text-red-600 mb-2">{error}</div>}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload Note"}
        </button>
      </form>
    </div>
  );
};

export default UploadNotes;