import { Metadata } from "next";

// Static metadata for SEO
export const metadata: Metadata = {
  title: "Home dynamic",
  description: "Generated Home dynamic Page",
};


const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
};

const Page = async () => {
  const users = await getUsers();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users List</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>{user.name}</strong> <br />
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
