import React, { useState } from 'react';

// Interface pour accepter la fonction de navigation
interface PaymentPageProps {
  onNavigate: (page: string) => void;
}

export const PaymentPage: React.FC<PaymentPageProps> = ({ onNavigate }) => {
  const [paymentMethod, setPaymentMethod] = useState<'carte' | 'paypal' | 'crypto'>('carte');

  return (
    <div className="min-h-screen bg-[#0a1628] text-white flex flex-col font-sans pb-20">
      
      {/* Header */}
      <header className="flex items-center justify-center relative px-6 py-6">
        {/* Bouton retour qui appelle la fonction onNavigate */}
        <button 
          onClick={() => onNavigate('home')}
          className="absolute left-6 text-xl hover:text-gray-300 transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-lg font-bold tracking-widest uppercase">Paiement</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 overflow-y-auto">
        
        {/* Progress Tracker */}
        <div className="flex items-center justify-center my-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider">Livraison</span>
          </div>
          
          <div className="w-12 h-[2px] bg-blue-500/50 mb-4 mx-2"></div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1a2942] border-2 border-blue-500 flex items-center justify-center">
              <span className="text-sm font-bold text-white">2</span>
            </div>
            <span className="text-[10px] text-white font-bold uppercase tracking-wider">Paiement</span>
          </div>
          
          <div className="w-12 h-[2px] bg-gray-700 mb-4 mx-2"></div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#1a2942] border-2 border-gray-700 flex items-center justify-center text-gray-500">
              <span className="text-sm font-bold">3</span>
            </div>
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Confirmation</span>
          </div>
        </div>

        {/* Payment Methods */}
        <section className="mb-8">
          <h2 className="text-xs text-gray-400 font-bold tracking-wider mb-4 uppercase">Méthode de paiement</h2>
          <div className="flex gap-3">
            <button 
              onClick={() => setPaymentMethod('carte')}
              className={`flex-1 py-4 rounded-xl flex flex-col items-center gap-2 transition border ${
                paymentMethod === 'carte' 
                  ? 'bg-[#1a2942] border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                  : 'bg-[#132032] border-transparent text-gray-400'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              <span className="text-xs font-bold uppercase">Carte</span>
            </button>
            <button 
              onClick={() => setPaymentMethod('paypal')}
              className={`flex-1 py-4 rounded-xl flex flex-col items-center gap-2 transition border ${
                paymentMethod === 'paypal' 
                  ? 'bg-[#1a2942] border-blue-500' 
                  : 'bg-[#132032] border-transparent text-gray-400'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v2.5a.5.5 0 00.8.4l2.7-2.9H15a2 2 0 002-2V9z" /></svg>
              <span className="text-xs font-bold uppercase">PayPal</span>
            </button>
            <button 
              onClick={() => setPaymentMethod('crypto')}
              className={`flex-1 py-4 rounded-xl flex flex-col items-center gap-2 transition border ${
                paymentMethod === 'crypto' 
                  ? 'bg-[#1a2942] border-blue-500' 
                  : 'bg-[#132032] border-transparent text-gray-400'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v8l9-11h-7z" /></svg>
              <span className="text-xs font-bold uppercase">Crypto</span>
            </button>
          </div>
        </section>

        {/* Card Form */}
        {paymentMethod === 'carte' && (
          <form className="space-y-4 mb-8">
            <div>
              <label className="block text-[10px] text-gray-400 font-bold mb-2 uppercase tracking-wider">Nom sur la carte</label>
              <input 
                type="text" 
                placeholder="JEAN DUPONT" 
                className="w-full bg-[#132032] border border-[#1a2942] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder-gray-600"
              />
            </div>
            
            <div>
              <label className="block text-[10px] text-gray-400 font-bold mb-2 uppercase tracking-wider">Numéro de carte</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="0000 0000 0000 0000" 
                  className="w-full bg-[#132032] border border-[#1a2942] rounded-xl pl-10 pr-4 py-3 text-sm font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder-gray-600"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-[10px] text-gray-400 font-bold mb-2 uppercase tracking-wider">Expiration</label>
                <input 
                  type="text" 
                  placeholder="MM/AA" 
                  className="w-full bg-[#132032] border border-[#1a2942] rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder-gray-600"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[10px] text-gray-400 font-bold mb-2 uppercase tracking-wider">CVV</label>
                <input 
                  type="password" 
                  placeholder="***" 
                  className="w-full bg-[#132032] border border-[#1a2942] rounded-xl px-4 py-3 text-sm font-mono focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition placeholder-gray-600"
                />
              </div>
            </div>
          </form>
        )}

        {/* Order Summary */}
        <section className="bg-[#132032] rounded-2xl p-5 mb-8 border border-[#1a2942]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider">Résumé de la commande</h3>
            <span className="bg-blue-900/40 text-blue-400 text-[10px] font-bold px-2 py-1 rounded">2 ARTICLES</span>
          </div>
          
          <div className="space-y-3 text-sm mb-6">
            <div className="flex justify-between text-gray-400">
              <span>Sous-total</span>
              <span>84.98 €</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Livraison Express</span>
              <span className="text-emerald-400">OFFERT</span>
            </div>
          </div>
          
          <div className="h-[1px] bg-[#1a2942] mb-4"></div>
          
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-sm">TOTAL À PAYER</span>
            <span className="text-xl font-bold">84.98 €</span>
          </div>

          <div className="flex justify-center items-center gap-2 text-[9px] text-gray-500 tracking-wide uppercase">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span>Paiement 100% sécurisé par protocole SSL</span>
          </div>
        </section>

        {/* Action Button */}
        <button className="w-full bg-[#3b82f6] hover:bg-blue-600 shadow-[0_4px_20px_rgba(59,130,246,0.3)] text-white font-bold py-4 rounded-xl tracking-wider mb-6 transition active:scale-[0.98]">
          CONFIRMER LE PAIEMENT
        </button>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0d1b2e] border-t border-gray-800 px-2 py-3 z-50">
        <div className="flex justify-around items-center max-w-md mx-auto">
          {/* Le bouton Accueil de la navigation appelle onNavigate pour retourner au tableau de bord */}
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            <span className="text-[10px] font-semibold uppercase">Accueil</span>
          </button>
          <button onClick={() => onNavigate('stats')} className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            <span className="text-[10px] uppercase">Stats</span>
          </button>
          <button onClick={() => onNavigate('tournaments')} className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            <span className="text-[10px] uppercase">Tournois</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-blue-500 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6V4a4 4 0 00-8 0v2H5v14h14V6h-3zM10 4a2 2 0 014 0v2h-4V4zm-3 4h10v10H7V8z" /></svg>
            <span className="text-[10px] font-semibold uppercase">Shop</span>
          </button>
          <button onClick={() => onNavigate('profile')} className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            <span className="text-[10px] uppercase">Profil</span>
          </button>
        </div>
      </nav>
    </div>
  );
};