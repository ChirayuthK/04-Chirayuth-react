import { useState, useEffect } from "react";
import axios from "axios";

const PostUser = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setUsers(res.data);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to fetch users. Please try again later.");
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const createUser = async () => {
      if (!submitted || !name || !lastname || !position) return;

      setError("");
      setResponse(null);

      try {
        const res = await axios.post(
          "https://jsd5-mock-backend.onrender.com/members",
          { name, lastname, position }
        );
        setResponse(res.data);

        setUsers((prevUsers) => prevUsers.concat(res.data));
      } catch (err) {
        console.error(err);
        setError("❌ Failed to create user. Please try again.");
      } finally {
        setSubmitted(false);
      }
    };

    createUser();
  }, [submitted, name, lastname, position]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Create User Here</h2>

      <form onSubmit={handleSubmit} className="flex justify-center space-x-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="rounded-sm bg-white px-2 py-1 block w-full"
        />
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          placeholder="Last Name"
          className="rounded-sm bg-white px-2 py-1 block w-full"
        />
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Position"
          className="rounded-sm bg-white px-2 py-1 block w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>

      {response && (
        <p className="mt-2 text-green-600">
          ✅ Created: {response.name} {response.lastname} - {response.position}
        </p>
      )}

      {error && (
        <div className="mt-2 text-red-600 bg-red-100 p-2 rounded">
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}

      <table className= "border-gray-400 w-full mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Last Name</th>
            <th className="border px-4 py-2">Position</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="bg-white">
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.lastname}</td>
              <td className="border px-4 py-2">{user.position}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-600 font-bold cursor-pointer"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostUser;
