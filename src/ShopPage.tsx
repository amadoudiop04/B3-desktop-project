import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import collection from './assets/images/collection nouvelle saison.png';
import maillot from './assets/images/Maillot de foot.jpg';
import sweat from './assets/images/sweat.jpg';
import casquette from './assets/images/casquette.jpg';
import fond from './assets/images/fond couleur.jpg';

const ShopPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('TOUS');
    const [searchQuery, setSearchQuery] = useState('');
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(prev => prev + 1);
    };

    const allProducts = [
        { img: maillot, name: "EA SPORTS '24 TEAM JERSEY", price: '85.00', category: 'MAILLOTS' },
        { img: sweat, name: "CORE ICONIC HOODIE - BLACK", price: '55.00', oldPrice: '75.00', category: 'SWEATS' },
        { img: casquette, name: "PRO SERIES ADJUSTABLE CAP", price: '32.00', category: 'ACCESSOIRES', isNew: true },
        { img: fond, name: "XL PERFORMANCE MOUSEPAD", price: '45.00', category: 'ACCESSOIRES' },
        { img: maillot, name: "JERSEY AWAY EDITION", price: '75.00', category: 'MAILLOTS' },
        { img: sweat, name: "GAMER ZIP HOODIE", price: '65.00', category: 'SWEATS' },
        { img: maillot, name: "EA SPORTS '24 TEAM JERSEY", price: '85.00', category: 'MAILLOTS' },
        { img: sweat, name: "CORE ICONIC HOODIE - BLACK", price: '55.00', oldPrice: '75.00', category: 'SWEATS' },
        { img: casquette, name: "PRO SERIES ADJUSTABLE CAP", price: '32.00', category: 'ACCESSOIRES', isNew: true },
        { img: fond, name: "XL PERFORMANCE MOUSEPAD", price: '45.00', category: 'ACCESSOIRES' },
        { img: maillot, name: "JERSEY AWAY EDITION", price: '75.00', category: 'MAILLOTS' },
        { img: sweat, name: "GAMER ZIP HOODIE", price: '65.00', category: 'SWEATS' },
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

    const ProductCard = ({ p, onAdd }: { p: any, onAdd: () => void }) => (
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
                    <button className="add-btn" onClick={onAdd}>🛒</button>
                </div>
            </div>
        </div>
    );

    return (
        <div style={{ backgroundColor: '#070d14', color: '#ffffff', minHeight: '100vh', paddingBottom: '100px', fontFamily: 'Segoe UI, sans-serif' }}>

            <style>{`
                .menu-icon div { width: 20px; height: 2px; margin: 4px 0; background: #0D7FF2; }
                .logo { font-weight: 900; font-size: 1.1rem; letter-spacing: -1px; text-decoration: none; color: white; }
                .logo span { color: #0D7FF2; }
                .search-bar { width: 100%; background: #111d2b; border: none; border-radius: 10px; padding: 12px 15px; color: white; font-size: 0.9rem; outline: none; }
                .categories { display: flex; gap: 10px; padding: 15px; overflow-x: auto; scrollbar-width: none; }
                .cat-btn { padding: 8px 20px; border-radius: 20px; border: none; font-size: 0.75rem; font-weight: bold; background: #1a2942; color: #8a99af; white-space: nowrap; cursor: pointer; }
                .cat-btn.active { background: #0D7FF2; color: white; }
                .products-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; padding: 15px; }
                .product-card { background: #111d2b; border-radius: 20px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.03); }
                .product-img { height: 140px; background: rgba(255,255,255,0.05); }
                .price { color: #0D7FF2; font-weight: 900; }
                .add-btn { background: #0D7FF2; border: none; width: 35px; height: 35px; border-radius: 10px; color: white; cursor: pointer; }
                .back-btn { background: none; border: none; color: #0D7FF2; cursor: pointer; font-weight: bold; padding: 15px; text-decoration: none; display: inline-block; }
                .badge { position: absolute; top: -8px; right: -10px; background: #0D7FF2; color: white; font-size: 10px; width: 16px; height: 16px; border-radius: 50%; display: flex; justify-content: center; align-items: center; border: 2px solid #070d14; font-weight: bold; }
                .nav-item { display: flex; flex-direction: center; flex-direction: column; align-items: center; text-decoration: none; color: #8a99af; font-size: 1.2rem; }
                .nav-item.active { color: #0D7FF2; }
            `}</style>

            <header style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="menu-icon"><div></div><div></div><div></div></div>
                <Link to="/" className="logo">EA SPORTS<span>.</span>SHOP</Link>

                <Link to="/panier" style={{ position: 'relative', fontSize: '1.2rem', cursor: 'pointer', textDecoration: 'none' }}>
                    🛒
                    {cartCount > 0 && <span className="badge">{cartCount}</span>}
                </Link>
            </header>

            <main>
                <Link to="/" className="back-btn">← Retour à l'accueil</Link>

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
                    {filteredProducts.map((p, i) => (
                        <ProductCard key={i} p={p} onAdd={handleAddToCart} />
                    ))}
                </div>
            </main>

            <nav style={{ position: 'fixed', bottom: 0, width: '100%', background: '#0d1b2e', padding: '12px 0', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #1a2942' }}>
                <Link to="/" className="nav-item">🏠<span style={{ fontSize: '10px' }}>Accueil</span></Link>
                <div className="nav-item">📊<span style={{ fontSize: '10px' }}>Stats</span></div>
                <div className="nav-item">👥<span style={{ fontSize: '10px' }}>Équipes</span></div>
                <Link to="/shop" className="nav-item active">🎲<span style={{ fontSize: '10px' }}>Shop</span></Link>
                <div className="nav-item">👤<span style={{ fontSize: '10px' }}>Profil</span></div>
            </nav>
        </div>
    );
};

export default ShopPage;