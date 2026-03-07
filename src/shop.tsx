import React, { useState } from 'react';
import collection from './assets/images/collection nouvelle saison.png';
import maillot from './assets/images/Maillot de foot.jpg';
import sweat from './assets/images/sweat.jpg';
import casquette from './assets/images/casquette.jpg';
import fond from './assets/images/fond couleur.jpg';

const ShopPage: React.FC = () => {
    // --- ÉTATS ---
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [activeCategory, setActiveCategory] = useState('TOUS');
    const [searchQuery, setSearchQuery] = useState('');

    // --- LOGIQUE D'AJOUT ---
    const addToCart = (product: any) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.name === product.name);
            if (existing) {
                return prev.map(item =>
                    item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, id: Date.now(), quantity: 1, desc: "Taille: Unique" }];
        });
        // Feedback visuel au lieu d'une alerte (plus moderne)
        console.log(`${product.name} ajouté !`);
    };

    const allProducts = [
        { img: maillot, name: "EA SPORTS '24 TEAM JERSEY", price: '85.00', category: 'MAILLOTS' },
        { img: sweat, name: "CORE ICONIC HOODIE", price: '55.00', oldPrice: '75.00', category: 'SWEATS' },
        { img: casquette, name: "PRO SERIES ADJUSTABLE CAP", price: '32.00', category: 'ACCESSOIRES' },
        { img: fond, name: "XL PERFORMANCE MOUSEPAD", price: '45.00', category: 'ACCESSOIRES' }
    ];

    const filteredProducts = allProducts.filter(p => {
        const matchesCategory = activeCategory === 'TOUS' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Calcul du nombre total d'articles pour le badge
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div style={{ backgroundColor: '#070d14', color: '#ffffff', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'Segoe UI, sans-serif' }}>
            <style>{`
                .menu-icon div { width: 20px; height: 2px; margin: 4px 0; background: #0D7FF2; }
                .logo { font-weight: 900; font-size: 1.1rem; letter-spacing: -1px; }
                .logo span { color: #0D7FF2; }
                .header-icons { display: flex; gap: 15px; align-items: center; }
                .badge { position: absolute; top: -5px; right: -8px; background: #0D7FF2; font-size: 10px; width: 15px; height: 15px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: white; border: 2px solid #070d14; }
                .search-bar { width: 100%; background: #111d2b; border: none; border-radius: 10px; padding: 12px 15px 12px 40px; color: white; font-size: 0.9rem; }
                .categories { display: flex; gap: 10px; padding: 15px; overflow-x: auto; scrollbar-width: none; }
                .cat-btn { padding: 8px 20px; border-radius: 20px; border: none; font-size: 0.75rem; font-weight: bold; background: #1a2942; color: #8a99af; white-space: nowrap; cursor: pointer; transition: 0.3s; }
                .cat-btn.active { background: #0D7FF2; color: white; }
                .hero { margin: 0 15px; height: 180px; border-radius: 20px; padding: 25px; display: flex; flex-direction: column; justify-content: center; }
                .products-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; padding: 15px; }
                .product-card { background: #111d2b; border-radius: 20px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.03); transition: transform 0.2s; }
                .product-card:active { transform: scale(0.98); }
                .product-img { height: 140px; background: rgba(255,255,255,0.05); overflow: hidden; }
                .price { color: #0D7FF2; font-weight: 900; }
                .add-btn { background: #0D7FF2; border: none; width: 35px; height: 35px; border-radius: 10px; color: white; cursor: pointer; transition: 0.2s; }
                .add-btn:hover { background: #0a66c2; }
                .add-btn:active { transform: scale(0.9); }
                .newsletter { margin: 30px 15px; background: linear-gradient(to bottom, #111d2b, #070d14); padding: 30px 20px; border-radius: 25px; text-align: center; border: 1px solid rgba(13, 127, 242, 0.1); }
                .newsletter input { width: 100%; background: #070d14; border: 1px solid #1a2942; padding: 12px; border-radius: 12px; color: white; margin-bottom: 12px; outline: none; }
                .newsletter button { width: 100%; background: #0D7FF2; color: white; border: none; padding: 14px; border-radius: 12px; font-weight: 900; cursor: pointer; }

            `}</style>

            {/* --- HEADER --- */}
            <header style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="menu-icon"><div></div><div></div><div></div></div>
                <div className="logo">EA SPORTS<span>.</span>SHOP</div>
                <div className="header-icons">
                    <span>🔍</span>
                    {/* Le badge affiche maintenant le nombre réel d'articles */}
                    <div style={{ position: 'relative', cursor: 'pointer' }}>
                        🛒{totalItems > 0 && <span className="badge">{totalItems}</span>}
                    </div>
                </div>
            </header>

            {/* --- SEARCH --- */}
            <div style={{ padding: '15px' }}>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Rechercher des Maillots..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* --- CATEGORIES --- */}
            <div className="categories">
                {['TOUS', 'MAILLOTS', 'SWEATS', 'ACCESSOIRES'].map((cat) => (
                    <button key={cat} className={`cat-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>
                        {cat}
                    </button>
                ))}
            </div>

            {/* --- HERO --- */}
            <div className="hero" style={{
                backgroundImage: `linear-gradient(to right, rgba(26, 41, 66, 0.9), rgba(10, 22, 40, 0.4)), url(${collection})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <span style={{ color: '#38bdf8', fontSize: '0.6rem', fontWeight: 'bold' }}>NOUVEAUTÉS</span>
                <h2 style={{ fontSize: '1.5rem', margin: '5px 0' }}>COLLECTION NOUVELLE SAISON</h2>
                <button style={{ background: '#0D7FF2', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', width: 'fit-content', cursor: 'pointer' }}>
                    ACHETER &rarr;
                </button>
            </div>

            {/* --- GRID --- */}
            <div className="products-grid">
                {filteredProducts.map((p, i) => (
                    <div key={i} className="product-card">
                        <div className="product-img">
                            <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="product-info" style={{ padding: '12px' }}>
                            <div style={{ color: '#0D7FF2', fontSize: '9px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '4px' }}>Vêtements officiels</div>
                            <div style={{ fontSize: '11px', fontWeight: 'bold', minHeight: '32px' }}>{p.name}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '10px' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    {p.oldPrice && <span style={{ color: '#4b5563', textDecoration: 'line-through', fontSize: '10px' }}>${p.oldPrice}</span>}
                                    <span className="price" style={{ fontSize: '1.2rem' }}>${p.price}</span>
                                </div>
                                {/* CLIC SUR LE BOUTON D'AJOUT */}
                                <button className="add-btn" onClick={() => addToCart(p)}>🛒</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- NEWSLETTER --- */}
            <div className="newsletter">
                <h3>REJOIGNEZ LE CLUB PRIVÉ</h3>
                <p style={{ marginBottom: '20px', fontSize: '0.8rem', opacity: 0.8 }}>Accès prioritaire et -15% sur votre première commande.</p>
                <input type="email" placeholder="votre@email.com" />
                <button>S'INSCRIRE MAINTENANT</button>
            </div>

            {/* Bottom Navigation */}
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

export default ShopPage;