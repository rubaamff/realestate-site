import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="container">
      <h1>لوحة التحكم</h1>
      <div style={{display:'flex', gap:12}}>
        <Link className="btn" href="/dashboard/properties">إدارة العقارات</Link>
        <Link className="btn" href="/dashboard/auctions">إدارة المزادات</Link>
      </div>
    </div>
  );
}
