import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'المصادر العقارية',
  description: 'وساطة وتسويق عقاري — مزادات — تمويل',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <header style={{padding:'12px 16px', borderBottom:'1px solid #eee', display:'flex', gap:16, alignItems:'center'}}>
          <a href="/" style={{fontWeight:700}}>المصادر العقارية</a>
          <nav style={{display:'flex', gap:12}}>
            <a href="/about">من نحن</a>
            <a href="/services">خدماتنا</a>
            <a href="/properties">العقارات</a>
            <a href="/auctions">المزادات</a>
            <a href="/contact">تواصل معنا</a>
            <a href="/dashboard">لوحة التحكم</a>
          </nav>
        </header>
        <main style={{maxWidth:1200, margin:'0 auto', padding:'24px 16px'}}>
          {children}
        </main>
        <footer style={{padding:'24px 16px', borderTop:'1px solid #eee', marginTop:48}}>
          <div>© {new Date().getFullYear()} المصادر العقارية — جميع الحقوق محفوظة</div>
        </footer>
      </body>
    </html>
  );
}
