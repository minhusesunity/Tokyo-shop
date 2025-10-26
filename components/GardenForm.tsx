
import React from 'react';
import { GardenPreferences } from '../types';
import { GARDEN_STYLES, SUNLIGHT_OPTIONS, COLOR_PALETTES } from '../constants';

interface GardenFormProps {
  preferences: GardenPreferences;
  onUpdatePreferences: (newPrefs: Partial<GardenPreferences>) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const GardenForm: React.FC<GardenFormProps> = ({ preferences, onUpdatePreferences, onSubmit, isLoading }) => {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-xl font-bold text-slate-700 border-b pb-3">Garden Specifications</h2>
      
      {/* Dimensions */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="width" className="block text-sm font-medium text-slate-600 mb-1">Width (ft)</label>
          <input
            type="number"
            id="width"
            value={preferences.width}
            onChange={(e) => onUpdatePreferences({ width: parseInt(e.target.value, 10) })}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
            min="5"
            max="100"
          />
        </div>
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-slate-600 mb-1">Length (ft)</label>
          <input
            type="number"
            id="height"
            value={preferences.height}
            onChange={(e) => onUpdatePreferences({ height: parseInt(e.target.value, 10) })}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
            min="5"
            max="100"
          />
        </div>
      </div>

      {/* Sunlight */}
      <div>
        <label htmlFor="sunlight" className="block text-sm font-medium text-slate-600 mb-1">Sunlight Exposure</label>
        <select
          id="sunlight"
          value={preferences.sunlight}
          onChange={(e) => onUpdatePreferences({ sunlight: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-white"
        >
          {SUNLIGHT_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>

      {/* Style */}
      <div>
        <label htmlFor="style" className="block text-sm font-medium text-slate-600 mb-1">Garden Style</label>
        <select
          id="style"
          value={preferences.style}
          onChange={(e) => onUpdatePreferences({ style: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-white"
        >
          {GARDEN_STYLES.map(style => <option key={style} value={style}>{style}</option>)}
        </select>
      </div>

      {/* Color Palette */}
      <div>
        <label htmlFor="colors" className="block text-sm font-medium text-slate-600 mb-1">Color Palette</label>
        <select
          id="colors"
          value={preferences.colors}
          onChange={(e) => onUpdatePreferences({ colors: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-white"
        >
          {COLOR_PALETTES.map(palette => <option key={palette} value={palette}>{palette}</option>)}
        </select>
      </div>

      {/* Desired Features */}
      <div>
        <label htmlFor="features" className="block text-sm font-medium text-slate-600 mb-1">Desired Plants or Features</label>
        <textarea
          id="features"
          rows={3}
          value={preferences.features}
          onChange={(e) => onUpdatePreferences({ features: e.target.value })}
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
          placeholder="e.g., lavender bushes, a stone bench, a small pond"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center items-center gap-2 px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Designing...
          </>
        ) : 'Design My Garden'}
      </button>
    </form>
  );
};

export default GardenForm;
