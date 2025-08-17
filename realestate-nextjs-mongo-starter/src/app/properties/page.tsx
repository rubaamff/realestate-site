'use client';
import { useEffect, useState } from 'react';

export default function PropertiesPage() {
  const [items, setItems] = useState<any[]>([]);
  const [city, setCity] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    const params = new URLSearchParams();
    if (city) params.set('city', city);
    if (type) params.set('type', type);
    fetch('/api/properties?' + params.toString()).then(r => r.json()).then(setItems);
  }, [city, type]);

  return (
    <div className="container">
      <h1>العقارات المعروضة للبيع</h1>
      <div style={{display:'flex', gap:12, marginBottom:16}}>
        <input placeholder="المدينة" value={city} onChange={e=>setCity(e.target.value)} />
        <select value={type} onChange={e=>setType(e.target.value)}>
          <option value="">النوع</option>
          <option value="سكني">سكني</option>
          <option value="تجاري">تجاري</option>
        </select>
      </div>
      <div className="grid grid-3">
        {items.map(p => (
          <a key={p._id} className="card" href={`/properties/${p._id}`}>
            <img src={p.images?.[0] || 'https://placehold.co/600x400?text=Property'} alt={p.title}/>
            <div style={{padding:12}}>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                <strong>{p.title}</strong>
                <span className="badge">{p.type}</span>
              </div>
              <div>السعر: {p.price?.toLocaleString()} ريال</div>
              <div>المساحة: {p.area || '-'} م²</div>
              <div>المدينة: {p.city}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
