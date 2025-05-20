export default function SearchBar() {
  return (
    <section className="p-6 text-center">
      <input
        type="text"
        placeholder="Search notes by subject or keyword..."
        className="w-1/2 p-2 border rounded"
      />
    </section>
  );
}
