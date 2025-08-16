'use client';
import { useEffect, useState } from 'react';

export default function AdminProperties() {
  const [items, setItems] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [city, setCity] = useState('');
  const [type, setType] = useState('سكني');

  async function load(){ const r = await fetch('/api/properties'); setItems(await r.json()); }
  useEffect(()=>{ load(); }, []);

  async function add(){
    const r = await fetch('/api/properties', { method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ title, price, city, type, images: [] })});
    if (r.ok) { setTitle(''); setPrice(0); setCity(''); load(); }
  }

  return (
    <div className="container">
      <h1>إدارة العقارات</h1>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
        <div>
          <h3>إضافة عقار</h3>
          <div style={{display:'grid', gap:8}}>
            <input placeholder="العنوان" value={title} onChange={e=>setTitle(e.target.value)} />
            <input placeholder="السعر" type="number" value={price} onChange={e=>setPrice(parseInt(e.target.value||'0'))} />
            <input placeholder="المدينة" value={city} onChange={e=>setCity(e.target.value)} />
            <select value={type} onChange={e=>setType(e.target.value)}>
              <option value="سكني">سكني</option>
              <option value="تجاري">تجاري</option>
            </select>
            <button className="btn" onClick={add}>حفظ</button>
          </div>
        </div>
        <div>
          <h3>العقارات الحالية</h3>
          <ul>
            {items.map(p => (<li key={p._id}>{p.title} — {p.city} — {p.price?.toLocaleString()} ر.س</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}
