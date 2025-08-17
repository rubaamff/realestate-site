import { dbConnect } from '@/src/lib/db';
import Property from '@/src/models/Property';

export const dynamic = 'force-dynamic';

export default async function PropertyPage({ params }: { params: { id: string }}) {
  await dbConnect();
  const p = await Property.findById(params.id).lean();
  if (!p) return <div className="container">العقار غير موجود</div>;
  return (
    <div className="container">
      <h1>{p.title}</h1>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
        <img src={p.images?.[0] || 'https://placehold.co/800x500?text=Property'} alt={p.title} style={{width:'100%', borderRadius:12}}/>
        <div>
          <p>{p.description}</p>
          <p>السعر: {p.price?.toLocaleString()} ريال</p>
          <p>المساحة: {p.area || '-'} م²</p>
          <p>الموقع: {p.city} - {p.district || '-'}</p>
          <p>{p.isFinancable ? 'التمويل متاح' : 'بدون تمويل'}</p>
          <a className="btn" href={`/contact?property=${p._id}`}>حجز موعد معاينة</a>
        </div>
      </div>
    </div>
  );
}
