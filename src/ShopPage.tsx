import React, { useState } from 'react';
import collection from './assets/images/collection nouvelle saison.png';
import maillot from './assets/images/Maillot de foot.jpg';
import sweat from './assets/images/sweat.jpg';
import casquette from './assets/images/casquette.jpg';
import fond from './assets/images/fond couleur.jpg';

const ShopPage: React.FC = () => {
    // 1. On ajoute l'état pour basculer entre 'home' et 'all'
    const [view, setView] = useState('home');
    const [activeCategory, setActiveCategory] = useState('TOUS');
    const [searchQuery, setSearchQuery] = useState('');

    const allProducts = [
        { img: maillot, name: "EA SPORTS '24 TEAM JERSEY", price: '85.00', category: 'MAILLOTS' },
        { img: sweat, name: "CORE ICONIC HOODIE - BLACK", price: '55.00', oldPrice: '75.00', category: 'SWEATS' },
        { img: casquette, name: "PRO SERIES ADJUSTABLE CAP", price: '32.00', category: 'ACCESSOIRES', isNew: true },
        { img: fond, name: "XL PERFORMANCE MOUSEPAD", price: '45.00', category: 'ACCESSOIRES' },
        { img: maillot, name: "JERSEY AWAY EDITION", price: '75.00', category: 'MAILLOTS' },
        { img: sweat, name: "GAMER ZIP HOODIE", price: '65.00', category: 'SWEATS' },
    ];

    const filteredProducts = allProducts.filter(p => {
        const matchesCategory = activeCategory === 'TOUS' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Composant Carte pour éviter la répétition
    const ProductCard = ({ p }: { p: any }) => (
        <div className="product-card">
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
                    <button className="add-btn">🛒</button>
                </div>
            </div>
        </div>
    );

    return (
        <div style={{ backgroundColor: '#070d14', color: '#ffffff', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'Segoe UI, sans-serif' }}>

            <style>{`
        .menu-icon div { width: 20px; height: 2px; margin: 4px 0; background: #0D7FF2; }
        .logo { font-weight: 900; font-size: 1.1rem; letter-spacing: -1px; cursor: pointer; }
        .logo span { color: #0D7FF2; }
        .search-bar { width: 100%; background: #111d2b; border: none; border-radius: 10px; padding: 12px 15px; color: white; font-size: 0.9rem; }
        .categories { display: flex; gap: 10px; padding: 15px; overflow-x: auto; scrollbar-width: none; }
        .cat-btn { padding: 8px 20px; border-radius: 20px; border: none; font-size: 0.75rem; font-weight: bold; background: #1a2942; color: #8a99af; white-space: nowrap; cursor: pointer; }
        .cat-btn.active { background: #0D7FF2; color: white; }
        .hero { margin: 0 15px; height: 180px; border-radius: 20px; padding: 25px; display: flex; flex-direction: column; justify-content: center; }
        .section-header { display: flex; justify-content: space-between; align-items: center; padding: 20px 15px 10px 15px; }
        .section-title { font-size: 1.2rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; }
        .view-all { color: #0D7FF2; font-size: 0.85rem; font-weight: 600; cursor: pointer; }
        .products-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; padding: 15px; }
        .product-card { background: #111d2b; border-radius: 20px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.03); }
        .product-img { height: 140px; background: rgba(255,255,255,0.05); }
        .price { color: #0D7FF2; font-weight: 900; }
        .add-btn { background: #0D7FF2; border: none; width: 35px; height: 35px; border-radius: 10px; color: white; cursor: pointer; }
        .back-btn { background: none; border: none; color: #0D7FF2; cursor: pointer; font-weight: bold; padding: 15px; }
      `}</style>

            {/* --- HEADER --- */}
            <header style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="menu-icon"><div></div><div></div><div></div></div>
                <div className="logo" onClick={() => setView('home')}>EA SPORTS<span>.</span>SHOP</div>
                <div style={{ position: 'relative' }}>🛒</div>
            </header>

            {/* --- SWITCH ENTRE LES VUES --- */}
            {view === 'home' ? (
                <>
                    {/* --- CONTENU ACCUEIL --- */}
                    <div className="hero" style={{ backgroundImage: `linear-gradient(to right, rgba(26, 41, 66, 0.9), rgba(10, 22, 40, 0.4)), url(${collection})`, backgroundSize: 'cover' }}>
                        <span style={{ color: '#38bdf8', fontSize: '0.6rem', fontWeight: 'bold' }}>NOUVEAUTÉS</span>
                        <h2 style={{ fontSize: '1.5rem', margin: '5px 0' }}>COLLECTION<br />NOUVELLE SAISON</h2>
                        <button onClick={() => setView('all')} style={{ background: '#0D7FF2', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', width: 'fit-content', cursor: 'pointer' }}>ACHETER &rarr;</button>
                    </div>

                    <div className="section-header">
                        <h2 className="section-title">MEILLEURES VENTES</h2>
                        {/* ICI : On ajoute le onClick pour changer de page */}
                        <span className="view-all" onClick={() => setView('all')}>Voir Tout</span>
                    </div>

                    <div className="products-grid">
                        {allProducts.slice(0, 4).map((p, i) => <ProductCard key={i} p={p} />)}
                    </div>
                </>
            ) : (
                <>
                    {/* --- CONTENU CATALOGUE (La "nouvelle" page) --- */}
                    <button className="back-btn" onClick={() => setView('home')}>← Retour à l'accueil</button>

                    <div style={{ padding: '0 15px' }}>
                        <input
                            type="text"
                            className="search-bar"
                            placeholder="Rechercher un produit..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="categories">
                        {['TOUS', 'MAILLOTS', 'SWEATS', 'ACCESSOIRES'].map((cat) => (
                            <button key={cat} className={`cat-btn ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="products-grid">
                        {filteredProducts.map((p, i) => <ProductCard key={i} p={p} />)}
                    </div>
                </>
            )}

            {/* Barre de navigation fixe en bas */}
            <nav style={{ position: 'fixed', bottom: 0, width: '100%', background: '#0d1b2e', padding: '12px 0', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #1a2942' }}>
                <span onClick={() => setView('home')} style={{ color: view === 'home' ? '#0D7FF2' : '#8a99af', cursor: 'pointer' }}>🏠</span>
                <span onClick={() => setView('all')} style={{ color: view === 'all' ? '#0D7FF2' : '#8a99af', cursor: 'pointer' }}>🔍</span>
                <span>👥</span>
                <span>👤</span>
            </nav>
        </div>
    );
};

export default ShopPage;