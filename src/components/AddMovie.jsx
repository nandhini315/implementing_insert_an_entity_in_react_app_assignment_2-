import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [form, setForm] = useState({ title: "", director: "", genre: "", releaseYear: "", synopsis: "", posterUrl: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie added:", form);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-black">Add a New Movie</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="border border-black p-4 rounded w-full text-lg placeholder-gray-600" required />
          <input type="text" name="director" placeholder="Director" value={form.director} onChange={handleChange} className="border border-black p-4 rounded w-full text-lg placeholder-gray-600" required />
          <select name="genre" value={form.genre} onChange={handleChange} className="border border-black p-4 rounded w-full text-lg placeholder-gray-600 text-black" required>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
          </select>
          <input type="number" name="releaseYear" placeholder="Release Year" value={form.releaseYear} onChange={handleChange} className="border border-black p-4 rounded w-full text-lg placeholder-gray-600" required />
          <textarea name="synopsis" placeholder="Synopsis" value={form.synopsis} onChange={handleChange} className="border border-black p-4 rounded w-full text-lg h-32 placeholder-gray-600" required />
          <input type="url" name="posterUrl" placeholder="Poster Image URL" value={form.posterUrl} onChange={handleChange} className="border border-black p-4 rounded w-full text-lg placeholder-gray-600" required />
          <div className="flex justify-between gap-4">
            <button type="submit" className="bg-green-500 text-white px-6 py-4 rounded text-lg w-1/2">Submit</button>
            <button type="button" onClick={() => navigate("/dashboard")} className="bg-gray-500 text-white px-6 py-4 rounded text-lg w-1/2">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
