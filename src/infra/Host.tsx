import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import Page from "../ui/components/Page";
import Button from "../ui/components/Button";
import Card from "../ui/components/Card";

interface AppItem {
  name: string;
  path: string;
  description?: string;
}

const apps: AppItem[] = [
  { name: "List Data", path: "/app1", description: "View and manage all your data efficiently." },
  { name: "Todo List", path: "/app2", description: "Organize tasks with a lightweight todo system." },
];

function AppCard({ app }: { app: AppItem }) {
  const navigate = useNavigate();

  return (
    <Card title={app.name} ariaLabel={`Launch ${app.name}`} className={clsx("flex flex-col justify-between h-full w-64")}>
      <p className="text-gray-700 dark:text-gray-300">{app.description}</p>
      <div className="flex justify-center mt-4">
        <Button label="Launch" onClick={() => navigate(app.path)} />
      </div>
    </Card>
  );
}

export default function Host() {
  return (
  <Page title="Nexa FE">
    <div className="px-4 md:p-9">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-white">
        Infrastructure
      </h1>
      <p className="text-center max-w-lg mx-auto mt-2 text-gray-600 dark:text-gray-400">
        Each microservice runs independently with its own API, ensuring modularity, scalability, and easy maintenance.
      </p>
      <code className="block text-xs font-mono text-center mb-6 text-indigo-500">
        /src/infra/Host.tsx
      </code>
	
      <div className={clsx("flex flex-col md:flex-row gap-4 justify-center mt-6")}>
        {apps.map((app) => (
          <AppCard key={app.name} app={app} />
        ))}
      </div>
    </div>
  </Page>
  );
}
