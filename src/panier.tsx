import React, { useState } from 'react';
import maillot from './assets/images/Maillot de foot.jpg';
import casquette from './assets/images/casquette.jpg';
import fond from './assets/images/fond couleur.jpg';
import deleteIcon from './assets/icon/poubelle.png';
import backIcon from './assets/icon/back.png'
const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Maillot Team EA Sport '24",
            desc: "Taille: L • Edition Limitée",
            price: 65.00,
            image: maillot,
            quantity: 1
        },
        {
            id: 2,
            name: "Casquette Valorant Pro",
            desc: "Couleur: Bleu Néon",
            price: 29.99,
            image: casquette,
            quantity: 1
        }
    ]);

    const updateQuantity = (id: number, delta: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="min-h-screen bg-[#0a1628] text-white flex flex-col font-sans">
            <header className="flex items-center justify-between px-4 py-6">
                <button className="w-10 h-10 flex items-center justify-center bg-[#1a2942] rounded-lg hover:bg-red-900/20 transition-all border border-gray-800" onClick={() => setCartItems([])}>
                    <img src={backIcon} alt="Retour" className="w-6 h-6 object-contain opacity-70 hover:opacity-100" />
                </button>
                <h1 className="text-lg font-bold tracking-widest">MON PANIER</h1>
                <button className="w-10 h-10 flex items-center justify-center bg-[#1a2942] rounded-lg hover:bg-red-900/20 transition-all border border-gray-800" onClick={() => setCartItems([])}>
                    <img src={deleteIcon} alt="Vider" className="w-6 h-6 object-contain opacity-70 hover:opacity-100" />
                </button>
            </header>

            <main className="flex-1 px-4 pb-32 overflow-y-auto">
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="bg-[#111e31] border border-gray-800 rounded-2xl p-4 flex items-center gap-4">
                            <div className="w-20 h-20 bg-black rounded-xl overflow-hidden flex items-center justify-center border border-gray-700">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-sm leading-tight">{item.name}</h3>
                                <p className="text-[10px] text-gray-500 mt-1 uppercase">{item.desc}</p>
                                <p className="text-blue-500 font-bold mt-2">{item.price.toFixed(2)} €</p>
                            </div>

                            <div className="flex items-center bg-black rounded-full p-1 gap-3 border border-gray-800">
                                <button onClick={() => updateQuantity(item.id, -1)} className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                                    -
                                </button>
                                <span className="text-xs font-bold w-3 text-center">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)} className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-transform active:scale-90">
                                    +
                                </button>
                            </div>
                        </div>
                    ))}

                    {cartItems.length === 0 && (
                        <p className="text-center text-gray-500 mt-10">Votre panier est vide</p>
                    )}
                </div>

                <div className="mt-8 bg-[#111e31] border border-gray-800 rounded-3xl p-6 relative overflow-hidden">
                    <h2 className="text-xs font-bold text-gray-500 tracking-wider mb-6 uppercase">Résumé de la commande</h2>

                    <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Sous-total</span>
                            <span className="font-bold">{subtotal.toFixed(2)} €</span>
                        </div>
                        <div className="flex justify-between text-sm border-b border-gray-800 pb-4">
                            <span className="text-gray-400">Frais de port</span>
                            <span className="text-green-500 font-bold uppercase tracking-tighter">Gratuit</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <div>
                            <p className="text-xl font-black italic">TOTAL</p>
                            <p className="text-[10px] text-gray-500">TVA incluse</p>
                        </div>
                        <p className="text-3xl font-black text-blue-500">{subtotal.toFixed(2)} €</p>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl mt-8 flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
                        PASSER AU PAIEMENT
                        <span className="text-xl">→</span>
                    </button>
                </div>

                <div className="mt-4 flex gap-3">
                    <input type="text" placeholder="CODE PROMO" className="flex-1 bg-[#111e31] border border-gray-800 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-500" />
                    <button className="bg-[#1a2942] px-6 rounded-xl text-[10px] font-bold text-gray-400 hover:text-white uppercase transition-colors">
                        Appliquer
                    </button>
                </div>
            </main>

            <nav className="fixed bottom-0 left-0 right-0 bg-[#0d1b2e] border-t border-gray-800 px-2 py-3">
                <div className="flex justify-around items-center max-w-md mx-auto">
                    <button className="flex flex-col items-center gap-1 text-blue-500">
                        <span className="text-xl">🏠</span>
                        <span className="text-xs font-semibold">Accueil</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
                        <span className="text-xl">📊</span>
                        <span className="text-xs">Stats</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
                        <span className="text-xl">👥</span>
                        <span className="text-xs">Équipes</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
                        <span className="text-xl">🎲</span>
                        <span className="text-xs">Shop</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-white">
                        <span className="text-xl">👤</span>
                        <span className="text-xs">Profil</span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default CartPage;