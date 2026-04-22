import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      icon: "📖",
      title: "كتب الحديث",
      desc: "تصفّح صحيح البخاري ومسلم وغيرهما بعارض PDF متكامل",
      link: "/books",
      label: "تصفّح الكتب",
    },
    {
      icon: "🎓",
      title: "دروس مصطلح الحديث",
      desc: "سلسلة دروس مرئية شاملة في علم مصطلح الحديث النبوي الشريف",
      link: "/lessons",
      label: "شاهد الدروس",
    },
    {
      icon: "✏️",
      title: "منشورات علمية",
      desc: "مقالات ومصطلحات في علوم الحديث مع التصنيف والشرح الموجز",
      link: "/posts",
      label: "اقرأ المنشورات",
    },
  ];

  const stats = [
    { value: "٣", label: "كتب متاحة" },
    { value: "٨+", label: "مصطلح حديثي" },
    { value: "١٠٠٪", label: "مجاني وبلا قيود" },
  ];

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-badge">أكاديمية الحويني لعلوم الحديث</div>
        <h1 className="hero-title">
          تعلَّم علوم الحديث النبوي
          <span className="hero-highlight"> الشريف</span>
        </h1>
        <p className="hero-subtitle">
          منصة علمية متخصصة في تقريب علوم الحديث النبوي الشريف، تضم كتباً
          أصيلة ودروساً مرئية ومقالات منهجية
        </p>
        <div className="hero-quote">
          <span className="quote-mark">❝</span>
          <p>مَن سلَك طريقًا يلتمس فيه علمًا سهَّل اللهُ له طريقًا إلى الجنة</p>
          <span className="quote-source">صحيح مسلم</span>
        </div>
        <div className="hero-actions">
          <Link to="/books" className="btn-primary">تصفّح الكتب</Link>
          <Link to="/lessons" className="btn-secondary">شاهد الدروس</Link>
        </div>
      </section>

      <section className="stats-bar">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      <section className="features">
        <h2 className="section-title">ماذا تجد في الأكاديمية؟</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <Link to={f.link} className="feature-link">{f.label} ←</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2>عن الأكاديمية</h2>
          <p>
            أكاديمية الحويني لعلوم الحديث منصة تعليمية تهدف إلى نشر علوم
            الحديث النبوي الشريف وتقريبها للطالب العربي؛ عبر مكتبة رقمية
            مختارة، ودروس مرئية منهجية، ومقالات علمية موثّقة.
          </p>
          <p>
            نسعى إلى أن يكون طالب العلم قادرًا على التمييز بين الصحيح
            والضعيف، ومعرفة مصطلحات المحدّثين وأسانيدهم، في بيئة رقمية
            سهلة وميسّرة.
          </p>
        </div>
        <div className="about-decoration">
          <div className="deco-circle"></div>
          <span className="deco-text">علم الحديث</span>
        </div>
      </section>

    </div>
  );
}
