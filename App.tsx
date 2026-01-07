
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { 
  Menu, Search, Bell, Globe, ChevronDown, ChevronRight,
  Share2, Radio, Trophy, Search as SearchIcon, 
  Activity, Cpu, Clock, Plus, Layout as LayoutIcon, Home,
  Flame, Target, Megaphone, BellRing, Share
} from 'lucide-react';
import { AppView } from './types';
import { useApiKey } from './hooks/useApiKey';
import ApiKeyDialog from './components/ApiKeyDialog';

const SidebarItem = ({ icon, label, active, onClick, collapsed }: { 
  icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void, collapsed: boolean
}) => (
  <button
    onClick={onClick}
    title={collapsed ? label : ""}
    className={`w-full flex items-center transition-all duration-200 group relative
      ${collapsed ? 'justify-center px-0 py-3' : 'px-6 py-3 space-x-4'}
      ${active ? 'text-blue-500 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
  >
    <span className={`${active ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-600'}`}>{icon}</span>
    {!collapsed && <span className="text-[13px] font-semibold tracking-tight whitespace-nowrap">{label}</span>}
    {active && collapsed && (
      <div className="absolute right-0 w-1 h-6 bg-blue-500 rounded-l-full" />
    )}
  </button>
);

const FeatureCard = ({ title, text, color, icon: Icon, isPremium }: { 
  title: string, text: string, color: string, icon: any, isPremium?: boolean 
}) => (
  <div className="rounded-2xl overflow-hidden flex flex-col border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white group cursor-pointer h-full max-h-[280px]">
    <div className={`h-1/2 relative overflow-hidden flex items-center justify-center ${color} transition-transform duration-500 group-hover:scale-105`}>
      <Icon size={80} className="absolute -right-2 -bottom-2 opacity-10 rotate-12" />
      <div className="relative z-10 p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-lg transform transition-transform duration-300 group-hover:scale-110">
        <Icon size={32} className={isPremium ? "text-blue-600" : "text-gray-800"} strokeWidth={1.5} />
      </div>
      {isPremium && (
         <div className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-lg">
           Premium
         </div>
      )}
    </div>
    <div className="p-4 flex-1 flex flex-col bg-white overflow-hidden">
      <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors leading-tight truncate">{title}</h3>
      <p className="text-[11px] text-gray-500 mb-3 leading-tight line-clamp-2 font-medium">{text}</p>
      <div className="mt-auto flex items-center text-blue-600 font-bold text-[11px] group-hover:gap-2 transition-all">
        Launch <ChevronRight size={14} className="ml-0.5" />
      </div>
    </div>
  </div>
);

export default function App() {
  const [view, setView] = useState<AppView>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { showApiKeyDialog, handleApiKeyDialogContinue } = useApiKey();

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="h-screen w-screen bg-[#F8FAFC] text-gray-900 font-sans flex flex-col overflow-hidden relative">
      {showApiKeyDialog && <ApiKeyDialog onContinue={handleApiKeyDialogContinue} />}

      {/* STICKY BAR */}
      <div className="shrink-0 bg-gradient-to-r from-[#00416A] via-[#12b3eb] to-[#7ad2f6] z-[200] py-3 px-8 border-b border-white/20 shadow-2xl">
         <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-4">
               <span className="text-2xl animate-pulse">💡</span>
               <p className="text-white font-extrabold text-base md:text-lg tracking-tight drop-shadow-lg">
                  Connect channels to run your actual business and serve real clients!
               </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
               <button className="px-6 py-2.5 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white rounded-full font-black text-xs hover:bg-white/20 transition-all active:scale-95 shadow-lg uppercase tracking-wider">
                  Upgrade now
               </button>
               <button className="px-6 py-2.5 bg-[#5ce1bc] text-[#052b22] rounded-full font-black text-xs hover:bg-[#4dd0ab] transition-all flex items-center gap-2 shadow-[0_10px_30px_rgba(92,225,188,0.5)] active:scale-95 uppercase tracking-wider">
                  <Share size={14} strokeWidth={3} />
                  Connect channel
               </button>
            </div>
         </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={`bg-white flex flex-col h-full shrink-0 border-r border-slate-200 z-50 transition-all duration-300 ease-in-out
            ${sidebarCollapsed ? 'w-[70px]' : 'w-[260px]'}`}
        >
          {/* Logo Header */}
          <div className={`h-14 flex items-center border-b border-slate-100 overflow-hidden ${sidebarCollapsed ? 'justify-center px-0' : 'px-5'}`}>
            <button onClick={toggleSidebar} className="text-slate-400 hover:text-blue-500 transition-colors shrink-0">
              <Menu size={20} />
            </button>
            {!sidebarCollapsed && (
              <div className="flex items-center gap-2 ml-3 animate-fade-in whitespace-nowrap">
                <span className="text-blue-600 font-black tracking-widest text-lg">MEDIA</span>
                <div className="relative w-6 h-6 shrink-0">
                   <div className="absolute inset-0 border-[2px] border-blue-400 rounded-full"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-white rotate-45"></div>
                   </div>
                </div>
                <span className="text-blue-400 font-bold tracking-widest text-lg">LENS</span>
              </div>
            )}
          </div>

          <div className={`p-4 transition-all duration-300 ${sidebarCollapsed ? 'flex justify-center' : ''}`}>
             <div className={`flex items-center gap-3 ${sidebarCollapsed ? 'flex-col' : ''}`}>
                <div className="w-10 h-10 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 shadow-sm border border-blue-100">P</div>
                {!sidebarCollapsed && (
                  <div className="flex flex-col overflow-hidden animate-fade-in">
                     <button className="flex items-center gap-1 text-sm font-bold text-slate-900">
                        PL - HK <ChevronDown size={14} className="text-slate-400" />
                     </button>
                     <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">Andy Wong</span>
                  </div>
                )}
             </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-2 py-2">
            <SidebarItem collapsed={sidebarCollapsed} icon={<Home size={20} />} label="Home" active={view === 'dashboard'} onClick={() => setView('dashboard')} />
            <SidebarItem collapsed={sidebarCollapsed} icon={<Activity size={20} />} label="Brand Health Check" />
            <SidebarItem collapsed={sidebarCollapsed} icon={<Target size={20} />} label="Competitor Spy" />
            <SidebarItem collapsed={sidebarCollapsed} icon={<Flame size={20} />} label="Viral Content Search" />
            <SidebarItem collapsed={sidebarCollapsed} icon={<Trophy size={20} />} label="Influencer Rankings" />
            <SidebarItem collapsed={sidebarCollapsed} icon={<SearchIcon size={20} />} label="Keyword Monitor" />
            <SidebarItem collapsed={sidebarCollapsed} icon={<Megaphone size={20} />} label="Ad Strategy Library" />
            <SidebarItem collapsed={sidebarCollapsed} icon={<BellRing size={20} />} label="Smart Alert" />
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col bg-[#F8FAFC] overflow-hidden">
          <header className="h-14 shrink-0 flex items-center justify-end px-8 gap-6 bg-white border-b border-slate-200">
             <button className="text-slate-400 hover:text-blue-600 transition-colors"><Search size={18} /></button>
             <button className="text-slate-400 hover:text-blue-600 transition-colors"><Globe size={18} /></button>
             <button className="text-slate-400 hover:text-blue-600 transition-colors relative">
               <Bell size={18} />
               <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white shadow-sm"></span>
             </button>
             <div className="w-8 h-8 bg-slate-100 rounded-lg border border-slate-200 shadow-inner flex items-center justify-center text-slate-400">
                <LayoutIcon size={16} />
             </div>
          </header>

          <div className="flex-1 p-6 md:p-8 flex flex-col overflow-hidden">
             <div className="mb-6 shrink-0">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                   👋 Welcome back, MediaLens.
                </h1>
                <p className="text-slate-500 text-base font-medium">
                   Your visual social intelligence dashboard is live.
                </p>
             </div>

             {/* Grid - 3x2 Layout */}
             <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-hidden">
                <FeatureCard 
                  title="Brand Health Check" 
                  text="Real-time brand sentiment and ROI scores." 
                  color="bg-blue-50/70" icon={Activity}
                />
                <FeatureCard 
                  title="Competitor Spy" 
                  text="Deep dive into rival campaign performance." 
                  color="bg-indigo-50/70" icon={Target}
                />
                <FeatureCard 
                  title="Viral Content Search" 
                  text="High-growth trends and emerging formats." 
                  color="bg-orange-50/70" icon={Flame}
                />
                <FeatureCard 
                  title="Influencer Rankings" 
                  text="Verified database with engagement truth-scoring." 
                  color="bg-purple-50/70" icon={Trophy} isPremium
                />
                <FeatureCard 
                  title="Keyword Monitor" 
                  text="Scale listening for mentions and hashtags." 
                  color="bg-teal-50/70" icon={SearchIcon} isPremium
                />
                <FeatureCard 
                  title="Ad Strategy Library" 
                  text="Transparency into competitor paid visual placements." 
                  color="bg-amber-50/70" icon={Megaphone} isPremium
                />
             </div>

             {/* Alert Banner */}
             <div className="mt-6 shrink-0 bg-slate-900 rounded-2xl p-6 text-white flex items-center justify-between shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 blur-[60px] rounded-full"></div>
                <div className="relative z-10 flex items-center gap-6">
                   <div className="p-3 bg-blue-500/20 rounded-xl">
                      <BellRing size={20} className="text-blue-400" />
                   </div>
                   <div>
                      <h2 className="text-lg font-bold">Smart Alert Active</h2>
                      <p className="text-slate-400 text-sm font-medium">Predictive monitoring for your brand shift.</p>
                   </div>
                </div>
                <button className="relative z-10 px-6 py-2.5 bg-white text-slate-900 rounded-xl font-black text-xs hover:bg-blue-50 transition-all shadow-lg active:scale-95 uppercase">
                   Setup Alerts
                </button>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}
