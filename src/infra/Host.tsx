import { useNavigate } from "react-router-dom";
import Button from "../ui/components/Button";
import Card from "../ui/components/Card";

export default function Host() {
  const navigate = useNavigate();

  const apps = [
    { name: "List Data", path: "/app1" },
    { name: "Todo List", path: "/app2" },
  ];

  return (
    <div className="px-4 md:p-9">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-white">
	    Infrastructure
	  </h1>
	  <p className="text-center max-w-sm mx-auto mt-2">
		Each microservice runs independently with its own API, ensuring modularity, scalability, and easy maintenance.
	  </p>
      <code className="block text-xs font-mono text-center mb-2 text-indigo-500">
        /src/infra/Host.tsx
      </code>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
        {apps.map((app) => (
          <Card key={app.name} title={app.name}>
            <div className="w-64">
              <p>Launch Application</p>
			  <div className="flex justify-end mt-2">
				<Button label="Launch" onClick={() => navigate(app.path)} />
			  </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
