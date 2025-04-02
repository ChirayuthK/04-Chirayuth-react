import { useEffect, useState } from "react";
import axios from "axios";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setError("");
      setLoading(true);

      try {
        const res = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setUsers(res.data);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to fetch users. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4">
      {loading && <p className="text-blue-600">Loading users...</p>}

      {error && (
        <div className="mt-2 text-red-600 bg-red-100 p-2 rounded">
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}

      {!loading && !error && (
        <div className="flex justify-center">
          <table className="border border-grey-100">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-2 py-2">Name</th>
                <th className="border border-gray-400 px-2 py-2">Last Name</th>
                <th className="border border-gray-400 px-2 py-2">Position</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="bg-white">
                  <td className="border border-gray-400 px-2 py-2">{user.name}</td>
                  <td className="border border-gray-400 px-2 py-2">{user.lastname}</td>
                  <td className="border border-gray-400 px-2 py-2">{user.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GetUsers;