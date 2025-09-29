import { useState } from "react";

export function useSignupForm(initialData: Record<string, any> = {}) {
  const [formData, setFormData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selections = [
      formData.centre,
      formData.zone,
      formData.district,
    ].filter(Boolean);

    console.log("FormData:", formData);
    console.log("Selections Array:", selections);
  };


  const updateSelections = (
    centre?: string,
    zone?: string,
    district?: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      centre: centre ?? prev.centre,
      zone: zone ?? prev.zone,
      district: district ?? prev.district,
    }));
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    updateSelections, 
    loading,
    error,
  };
}
