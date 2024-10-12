import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type RateCardInput = {
  stationName: string;
  timeSlot: string;
  rate: number;
};

const BroadcasterPortal: React.FC = () => {
  const [rateCards, setRateCards] = useState<RateCardInput[]>([]);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<RateCardInput>();

  const onSubmit: SubmitHandler<RateCardInput> = (data) => {
    setRateCards([...rateCards, data]);
    reset();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Broadcaster Portal</h1>
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Update Rate Card</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="stationName" className="block text-sm font-medium text-gray-700">Station Name</label>
            <input
              {...register("stationName", { required: "Station name is required" })}
              type="text"
              id="stationName"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.stationName && <p className="mt-1 text-sm text-red-600">{errors.stationName.message}</p>}
          </div>

          <div>
            <label htmlFor="timeSlot" className="block text-sm font-medium text-gray-700">Time Slot</label>
            <input
              {...register("timeSlot", { required: "Time slot is required" })}
              type="text"
              id="timeSlot"
              placeholder="e.g., 18:00-19:00"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.timeSlot && <p className="mt-1 text-sm text-red-600">{errors.timeSlot.message}</p>}
          </div>

          <div>
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700">Rate</label>
            <input
              {...register("rate", { required: "Rate is required", min: { value: 0, message: "Rate must be positive" } })}
              type="number"
              id="rate"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            {errors.rate && <p className="mt-1 text-sm text-red-600">{errors.rate.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Rate Card Entry
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Current Rate Cards</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Station</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Slot</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rateCards.map((card, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{card.stationName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{card.timeSlot}</td>
                <td className="px-6 py-4 whitespace-nowrap">${card.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BroadcasterPortal;