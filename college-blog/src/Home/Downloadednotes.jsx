import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function DownloadedNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your actual API endpoint and authentication logic
    axios.get('/api/user/downloaded-notes')
      .then(res => {
        setNotes(res.data.notes || []);
        setLoading(false);
      })
      .catch(err => {
        setNotes([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-8 text-center">Loading your downloaded notes...</div>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Your Downloaded Notes</h2>
      {notes.length === 0 ? (
        <div className="text-gray-500">You haven't downloaded any notes yet.</div>
      ) : (
        <ul className="space-y-4">
          {notes.map(note => (
            <li key={note._id} className="border rounded p-4 shadow flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-semibold">{note.title}</div>
                <div className="text-sm text-gray-600">{note.subject} | {note.semester}</div>
                <div className="text-xs text-gray-400">Downloaded: {new Date(note.downloadedAt).toLocaleDateString()}</div>
              </div>
              <a
                href={note.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 md:mt-0 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                View/Download Again
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
