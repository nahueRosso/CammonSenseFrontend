type TableData = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export function TableParent({
  parent = "",
  child = "",
  data = [],
}: {
  parent: string;
  child: string;
  data: TableData[];
}) {
  return (
    <>
      <div className="space-x-0.5 h-40 bg-zinc-200/50">
        <b>{parent}</b> Title
      </div>
      <div className="space-x-0.5 h-auto bg-zinc-200/50 p-4 rounded-md shadow">
        <b>{child}</b> Data
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border-b border-gray-200 bg-gray-50">
                  ID
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200 bg-gray-50">
                  Name
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200 bg-gray-50">
                  Email
                </th>
                <th className="px-4 py-2 text-left border-b border-gray-200 bg-gray-50">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b border-gray-200">{row.id}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{row.name}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{row.email}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
