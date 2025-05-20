import React, { useEffect, useState } from 'react';

export default function Uploadednotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get notes from localStorage
    const storedNotes = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(storedNotes);
    setLoading(false);
  }, []);

  if (loading) return <div className="p-8 text-center">Loading your uploaded notes...</div>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Uploaded Notes</h2>
      {notes.length === 0 ? (
        <div className="text-gray-500">You haven't uploaded any notes yet.</div>
      ) : (
        <ul className="space-y-4">
          {notes.map((note, idx) => (
            <li key={idx} className="border rounded p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold">{note.fileName}</div>
                <div className="text-sm text-gray-600">
                  {note.subject?.name || "-"} | {note.semester}
                </div>
                <div className="text-xs text-gray-400">
                  Uploaded: {new Date(note.uploadedAt).toLocaleDateString()}
                </div>
              </div>
              {/* No fileUrl since files are not stored, just show file name */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}