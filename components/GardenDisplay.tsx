
import React from 'react';
import { GardenPlan } from '../types';

interface GardenDisplayProps {
  plan: GardenPlan | null;
  image: string | null;
  isLoading: boolean;
  error: string | null;
}

const LoadingState: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white rounded-xl shadow-lg">
        <svg className="animate-spin h-12 w-12 text-emerald-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <h3 className="text-xl font-semibold text-slate-700">Cultivating Your Vision...</h3>
        <p className="text-slate-500 mt-2">Our digital gardeners are sketching your dream layout. This may take a moment.</p>
    </div>
);

const WelcomeState: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white rounded-xl shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-emerald-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477zM11.428 3.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L.05 5.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477z" />
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-5.747-5.747h11.494" />
        </svg>
        <h3 className="text-2xl font-bold text-slate-800">Your Garden Awaits</h3>
        <p className="text-slate-500 mt-2 max-w-md">Fill in your preferences on the left, and let our AI bring your perfect garden to life with a stunning visual and a detailed plan.</p>
    </div>
);

const ErrorState: React.FC<{ error: string }> = ({ error }) => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-red-50 border-2 border-red-200 rounded-xl shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-semibold text-red-800">Something Went Wrong</h3>
        <p className="text-red-600 mt-2">{error}</p>
    </div>
);

const GardenDisplay: React.FC<GardenDisplayProps> = ({ plan, image, isLoading, error }) => {
  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!plan || !image) return <WelcomeState />;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={image} alt="AI-generated garden" className="w-full h-auto object-cover" />
        <div className="p-6">
            <h2 className="text-2xl font-bold text-slate-800">{plan.ambience}</h2>
            <p className="text-slate-600 mt-2">{plan.description}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-slate-700 border-b pb-3 mb-4">Planting Plan</h3>
        <ul className="space-y-4">
            {plan.plantList.map((plant, index) => (
                <li key={index} className="p-4 bg-emerald-50/50 rounded-lg">
                    <h4 className="font-semibold text-emerald-800">{plant.name}</h4>
                    <p className="text-sm text-slate-500 font-medium mt-1">
                        <span className="font-bold">Location:</span> {plant.location}
                    </p>
                    <p className="text-slate-600 mt-2">{plant.description}</p>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default GardenDisplay;
