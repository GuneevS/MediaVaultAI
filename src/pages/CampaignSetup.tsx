import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type CampaignInputs = {
  campaignName: string;
  startDate: string;
  endDate: string;
  budget: number;
  countries: string[];
};

const CampaignSetup: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CampaignInputs>();

  const onSubmit: SubmitHandler<CampaignInputs> = (data) => {
    console.log(data);
    // Here you would typically send this data to your backend API
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Campaign Setup</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label htmlFor="campaignName" className="block text-sm font-medium text-gray-700">Campaign Name</label>
          <input
            {...register("campaignName", { required: "Campaign name is required" })}
            type="text"
            id="campaignName"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.campaignName && <p className="mt-1 text-sm text-red-600">{errors.campaignName.message}</p>}
        </div>

        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Start Date</label>
          <input
            {...register("startDate", { required: "Start date is required" })}
            type="date"
            id="startDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.startDate && <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>}
        </div>

        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            {...register("endDate", { required: "End date is required" })}
            type="date"
            id="endDate"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.endDate && <p className="mt-1 text-sm text-red-600">{errors.endDate.message}</p>}
        </div>

        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">Budget</label>
          <input
            {...register("budget", { required: "Budget is required", min: { value: 1, message: "Budget must be positive" } })}
            type="number"
            id="budget"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.budget && <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Target Countries</label>
          <div className="mt-2 space-y-2">
            {['Nigeria', 'Kenya', 'South Africa', 'Ghana'].map((country) => (
              <div key={country} className="flex items-center">
                <input
                  {...register("countries", { required: "Select at least one country" })}
                  type="checkbox"
                  id={country}
                  value={country}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor={country} className="ml-2 block text-sm text-gray-900">
                  {country}
                </label>
              </div>
            ))}
          </div>
          {errors.countries && <p className="mt-1 text-sm text-red-600">{errors.countries.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default CampaignSetup;