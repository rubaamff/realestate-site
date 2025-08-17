'use client';
import { useEffect, useState } from 'react';

export default function AdminAuctions() {
  const [items, setItems] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [startsAt, setStartsAt] = useState('');
  const [endsAt, setEndsAt] = useState('');

  async function load(){ const r = await fetch('/api/auctions'); setItems(await r.json()); }
  useEffect(()=>{ load(); }, []);

  async function add(){
    const body = { title, startsAt, endsAt };
    const r = await fetch('/api/auctions', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
    if (r.ok) { setTitle(''); setStartsAt(''); setEndsAt(''); load(); }
  }

  return (
    <div className="container">
      <h1>إدارة المزادات</h1>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
        <div>
          <h3>إضافة مزاد</h3>
          <div style={{display:'grid', gap:8}}>
            <input placeholder="العنوان" value={title} onChange={e=>setTitle(e.target.value)} />
            <input type="datetime-local" value={startsAt} onChange={e=>setStartsAt(e.target.value)} />
            <input type="datetime-local" value={endsAt} onChange={e=>setEndsAt(e.target.value)} />
            <button className="btn" onClick={add}>حفظ</button>
          </div>
        </div>
        <div>
          <h3>المزادات الحالية</h3>
          <ul>
            {items.map(a => (<li key={a._id}>{a.title} — {new Date(a.startsAt).toLocaleString('ar-SA')} → {new Date(a.endsAt).toLocaleString('ar-SA')}</li>))}
          </ul>
        </div>
      </div>
    </div>
  );
}
