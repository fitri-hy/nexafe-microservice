import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useUsers } from "../../data/users/userUse";
import { useProducts } from "../../data/products/productUse";
import Card from "../../ui/components/Card";
import Button from "../../ui/components/Button";
import Modal from "../../ui/components/Modal";

export default function App1() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"users" | "products">("users");
  const { data: users, isLoading: loadingUsers, isError: errorUsers } = useUsers();
  const { data: products, isLoading: loadingProducts, isError: errorProducts } = useProducts();

  return (
    <div className="px-4 md:p-9">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-white">
        Sample Data List
      </h1>
      <p className="text-center max-w-sm mx-auto mt-2 text-gray-700 dark:text-gray-300">
        Displaying sample users and products fetched from application microservices APIs.
      </p>
      <code className="block text-xs font-mono text-center mb-2 text-indigo-500">
        /src/infra/app1/App.tsx
      </code>
      <Link
        to="/"
        className="block text-center text-blue-500 mx-auto font-semibold hover:underline"
      >
        Back Home
      </Link>
	  
	  <div className="flex justify-center items-center mt-4">
        <Button label="Show Modal" variant="success" onClick={() => setIsOpen(true)} />
        <Modal title="Demo Modal" isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>This modal can now be shown and hidden by the parent state.</p>
		</Modal>
      </div>

      <div className="flex items-center justify-center gap-2 my-4">
        <Button
          label="Users"
          variant={activeTab === "users" ? "primary" : "secondary"}
          onClick={() => setActiveTab("users")}
        />
        <Button
          label="Products"
          variant={activeTab === "products" ? "primary" : "secondary"}
          onClick={() => setActiveTab("products")}
        />
      </div>

      {activeTab === "users" && (
        <>
          {loadingUsers && <p>Loading users...</p>}
          {errorUsers && <p className="text-red-500 text-center p-4">Error loading users!</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {users?.map((user) => (
              <Card key={user.id} title={`${user.firstName} ${user.lastName}`}>
                <p>Email: {user.email}</p>
                <p>Age: {user.age}</p>
              </Card>
            ))}
          </div>
        </>
      )}

      {activeTab === "products" && (
        <>
          {loadingProducts && <p>Loading products...</p>}
          {errorProducts && <p className="text-red-500 text-center p-4">Error loading products!</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products?.map((product) => (
              <Card key={product.id} title={product.title}>
                <p>
                  Price: <span className="text-emerald-500">${product.price}</span>
                </p>
                <p>Brand: {product.brand}</p>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
