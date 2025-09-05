import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useUsers } from "../../data/users/userUse";
import { useProducts } from "../../data/products/productUse";
import Card from "../../ui/components/Card";

export default function App1() {
  const [activeTab, setActiveTab] = useState<"users" | "products">("users");
  const { data: users, isLoading: loadingUsers, isError: errorUsers } = useUsers();
  const { data: products, isLoading: loadingProducts, isError: errorProducts } = useProducts();

  return (
    <div className="px-4 md:p-9">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-white">
	    Sample Data List
	  </h1>
	  <p className="text-center max-w-sm mx-auto mt-2">
		Displaying sample users and products fetched from aplication microservices APIs.
	  </p>
      <code className="block text-xs font-mono text-center mb-2 text-indigo-500">
        /src/infra/app1/App.tsx
      </code>
	  <Link to="/" className="block text-center text-blue-500 mx-auto font-semibold hover:underline">
		Back Home
	  </Link>
      <div className="flex items-center justify-center items-center gap-2 my-4">
        <button className={`px-4 py-2 rounded ${activeTab === "users" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("users")}>
          Users
        </button>
        <button className={`px-4 py-2 rounded ${activeTab === "products" ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => setActiveTab("products")}>
          Products
        </button>
      </div>
	 
	  {activeTab === "users" && (
	    <>
	  	  {loadingUsers && <p>Loading users...</p>}
		  {errorUsers && <p className="text-red-500 text-center p-4">Error loading users!</p>}
		  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
		    {users?.map(user => (
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
		    {products?.map(product => (
			  <Card key={product.id} title={product.title}>
			    <p>Price: <span className="text-emerald-500">${product.price}</span></p>
			    <p>Brand: {product.brand}</p>
			  </Card>
		    ))}
		  </div>
	    </>
	  )}

    </div>
  );
}
