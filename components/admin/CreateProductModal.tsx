"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export default function CreateProductModal() {
  const [isOpen, setIsOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    stock: "",
    isActive: "true",
    files: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, files: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null) {
        formData.append(key, value);
      }
    });

    try {
      const res = await fetch("https://authentication-microservice-6cyp.onrender.com/api/products/create",{
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!res.ok) throw new Error("Failed");

      alert("Product created successfully!");
      toast.success("Product created!");
      setIsOpen(false);
      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        stock: "",
        isActive: "true",
        files: null,
      });
    } catch (err) {
      toast.error("Failed to create product");
    }
  };
  return (
    <div>
      <Button onClick={() => setIsOpen(true)} className="bg-pink-600 text-white">
        Create Product
      </Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-xl rounded-lg bg-white dark:bg-gray-900 p-6 shadow-lg">
            <Dialog.Title className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Create Product
            </Dialog.Title>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
              <Textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
              <Input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
              <Input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
              <Input name="brand" placeholder="Brand" value={form.brand} onChange={handleChange} required />
              <Input name="stock" type="number" placeholder="Stock" value={form.stock} onChange={handleChange} required />

              <select
                name="isActive"
                value={form.isActive}
                onChange={handleChange}
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:text-white"
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>

              <Input type="file" accept="image/*" onChange={handleFileChange} required />

              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-green-600 text-white hover:bg-green-700">
                  Submit
                </Button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
