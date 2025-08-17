'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function ContactPage() {
  const sp = useSearchParams();
  const property = sp.get('property');
  const [form, setForm] = useState({ name:'', phone:'', email:'', message:'' });

  function submit(e:any){
    e.preventDefault();
    alert('سيتم ربط هذا النموذج لاحقًا بنقطة API لتخزين Lead');
  }

  return (
    <div className="container">
      <h1>تواصل معنا</h1>
      {property ? <div className="badge">بخصوص عقار: {property}</div> : null}
      <form onSubmit={submit} style={{display:'grid', gap:12, maxWidth:480}}>
        <input placeholder="الاسم" value={form.name} onChange={e=>setForm({...form, name:e.target.value})}/>
        <input placeholder="رقم الجوال" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})}/>
        <input placeholder="الإيميل" value={form.email} onChange={e=>setForm({...form, email:e.target.value})}/>
        <textarea placeholder="رسالتك" value={form.message} onChange={e=>setForm({...form, message:e.target.value})}/>
        <button className="btn" type="submit">إرسال</button>
      </form>
    </div>
  );
}
