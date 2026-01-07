
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { KeyRound, ShieldAlert } from 'lucide-react';

interface ApiKeyDialogProps {
  onContinue: () => void;
}

const ApiKeyDialog: React.FC<ApiKeyDialogProps> = ({ onContinue }) => {
  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-[200] p-4 animate-fade-in">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl max-w-lg w-full p-8 text-center flex flex-col items-center">
        <div className="bg-brand-50 p-4 rounded-full mb-6">
          <KeyRound className="w-12 h-12 text-brand-600" />
        </div>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Enterprise Authentication</h2>
        <p className="text-gray-600 mb-6">
          MediaLens uses advanced AI models for competitive intelligence.
          <br/>
          Please link a <strong>Paid Google Cloud API Key</strong> to activate the analysis modules.
        </p>
        
        <div className="w-full bg-amber-50 border border-amber-100 rounded-lg p-4 mb-8 flex items-start text-left gap-3">
           <ShieldAlert className="text-amber-600 shrink-0 mt-0.5" size={18} />
           <p className="text-xs text-amber-800 leading-relaxed">
             Free-tier keys lack the capacity for high-frequency social data processing. See 
             <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline font-bold ml-1">billing docs</a>.
           </p>
        </div>

        <button
          onClick={onContinue}
          className="w-full px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all text-lg shadow-lg shadow-brand-500/20"
        >
          Configure API Key
        </button>
      </div>
    </div>
  );
};

export default ApiKeyDialog;
