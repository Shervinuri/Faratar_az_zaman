
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-8 py-16 font-sans">
      <header className="mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          فراتر از زمان
        </h1>
        <p className="text-center text-xl max-w-2xl mx-auto text-gray-300">
          آموزش روانشناسی، توسعه فردی، و رشد ذهنی با تیمی از متخصصان و روانشناسان برجسته کشور
        </p>
      </header>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">درباره ما</h2>
        <p className="text-gray-300 leading-loose">
          تیم فراتر از زمان با هدف ارائه‌ی خدمات آموزشی روان‌شناسی با کیفیت، متشکل از عارف کیانمهر، علی مهرابی، سارا روئینیان و نگین طاهری، فعالیت می‌کند.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">دوره‌ها</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">دوره هنر سخنوری</h3>
            <p className="text-gray-400 mb-2">مدرس: علی مهرابی</p>
            <p className="text-gray-300">یادگیری تکنیک‌های حرفه‌ای برای صحبت‌کردن با اعتماد به نفس در جمع.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">دوره رایگان تست</h3>
            <p className="text-gray-400 mb-2">مدرس: تیم فراتر از زمان</p>
            <p className="text-gray-300">نمونه‌ای از دوره‌های رایگان جهت آشنایی با ساختار آموزشی ما.</p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">تماس با ما</h2>
        <p className="text-gray-300">شماره تماس: ۰۹۹۳۵۱۷۹۵۴۹</p>
        <p className="text-gray-300">ایمیل: info@faratarazman.ir</p>
        <p className="text-gray-300">آدرس: یاسوج – خیابان شهدای جهاد فرعی یازده</p>
      </section>

      <footer className="text-center text-gray-500 mt-24 text-sm">
        © {new Date().getFullYear()} FaratarAzZaman.ir | همه حقوق محفوظ است
      </footer>
    </main>
  );
}
