import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const SectionTitle = ({ icon, title }) => (
  <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
    {icon && <span className="text-lg">{icon}</span>}
    <h2 className="text-base font-bold text-brand-green uppercase tracking-wide">{title}</h2>
  </div>
);

const TechnicalProposal = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-brand-dark text-white py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="bg-brand-card border border-brand-green/20 rounded-2xl p-6">
          <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 px-3 py-1 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
            <span className="text-brand-green text-xs font-semibold">عرض تقني رسمي</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">مشروع Corporate Website</h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            عرض تقني شامل لتطوير موقع مؤسسي متكامل يشمل الواجهات، الخدمات، الوظائف، ولوحة إدارة متطورة.
          </p>
        </motion.div>

        {/* ── About Team ── */}
        <motion.div {...fadeUp(0.1)} className="bg-brand-card border border-white/10 rounded-2xl p-6">
          <SectionTitle icon="👥" title="فريق AMG Tech للتطوير" />
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">من نحن</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                فريق تقني متخصص في تطوير البرمجيات، مكون من مطورين محترفين في
                Full-Stack Development وUI/UX Design وإدارة المشاريع.
                نركز على تقديم حلول تقنية متكاملة للشركات والمؤسسات.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-2">تخصصاتنا</h3>
              <ul className="space-y-1.5">
                {[
                  'تطوير المواقع المؤسسية والتطبيقات',
                  'أنظمة إدارة المحتوى (CMS)',
                  'تصميم واجهات المستخدم (UI/UX)',
                  'التكامل مع الأنظمة الخارجية',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── Scope of Work ── */}
        <motion.div {...fadeUp(0.15)} className="bg-brand-card border border-white/10 rounded-2xl p-6">
          <SectionTitle icon="📋" title="نطاق العمل" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-2 px-3 text-brand-green font-semibold text-xs">#</th>
                  <th className="py-2 px-3 text-brand-green font-semibold text-xs">البند</th>
                  <th className="py-2 px-3 text-brand-green font-semibold text-xs">التفاصيل</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { num: '01', title: 'تصميم الواجهات (UI/UX)', detail: 'تصميم كامل للصفحات بهوية بصرية متناسقة على Figma' },
                  { num: '02', title: 'تطوير الفرونت إند', detail: 'React.js + Tailwind CSS — متجاوب مع جميع الأجهزة' },
                  { num: '03', title: 'تطوير الباك إند', detail: 'Node.js + Express + قاعدة بيانات MongoDB أو PostgreSQL' },
                  { num: '04', title: 'لوحة التحكم الإدارية', detail: 'إدارة المحتوى، الموظفين، الطلبات، والتقارير' },
                  { num: '05', title: 'SEO & الأداء', detail: 'تحسين محركات البحث وسرعة التحميل' },
                  { num: '06', title: 'النشر والتسليم', detail: 'رفع على السيرفر + دومين + شهر دعم فني مجاني' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-2.5 px-3 text-brand-green font-mono text-xs">{row.num}</td>
                    <td className="py-2.5 px-3 text-white font-medium">{row.title}</td>
                    <td className="py-2.5 px-3 text-gray-400">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── Timeline ── */}
        <motion.div {...fadeUp(0.2)} className="bg-brand-card border border-white/10 rounded-2xl p-6">
          <SectionTitle icon="🗓️" title="الجدول الزمني (10 أيام)" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-2 px-3 text-brand-green font-semibold text-xs">المرحلة</th>
                  <th className="py-2 px-3 text-brand-green font-semibold text-xs">المهمة</th>
                  <th className="py-2 px-3 text-brand-green font-semibold text-xs">المدة</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { phase: 'الأولى', task: 'التصميم على Figma وموافقة العميل', duration: 'يوم ١–٢' },
                  { phase: 'الثانية', task: 'تطوير الفرونت إند والصفحات الرئيسية', duration: 'يوم ٣–٦' },
                  { phase: 'الثالثة', task: 'الباك إند ولوحة التحكم', duration: 'يوم ٥–٨' },
                  { phase: 'الرابعة', task: 'الاختبار والتعديلات النهائية', duration: 'يوم ٩' },
                  { phase: 'الخامسة', task: 'النشر والتسليم الرسمي', duration: 'يوم ١٠' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-2.5 px-3 text-white font-medium">المرحلة {row.phase}</td>
                    <td className="py-2.5 px-3 text-gray-400">{row.task}</td>
                    <td className="py-2.5 px-3">
                      <span className="text-xs bg-brand-green/10 text-brand-green border border-brand-green/20 px-2 py-0.5 rounded-full">
                        {row.duration}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── Pricing ── */}
        <motion.div {...fadeUp(0.25)} className="bg-brand-card border border-white/10 rounded-2xl p-6">
          <SectionTitle icon="💰" title="التسعير وطريقة الدفع" />

          <div className="flex items-center justify-between bg-brand-green/10 border border-brand-green/20 rounded-xl px-5 py-4 mb-6">
            <span className="text-sm text-gray-300 font-medium">السعر الإجمالي للمشروع</span>
            <span className="text-2xl font-bold text-brand-green">25,000 ج.م</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-2 px-3 text-brand-green font-semibold text-xs">الدفعة</th>
                  <th className="py-2 px-3 text-brand-green font-semibold text-xs">النسبة</th>
                  <th className="py-2 px-3 text-brand-green font-semibold text-xs">المبلغ</th>
                  <th className="py-2 px-3 text-brand-green font-semibold text-xs">التوقيت</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'الأولى', pct: '30%', amount: '7,500 ج', timing: 'مقدم عند البدء', color: 'text-brand-green' },
                  { name: 'الثانية', pct: '20%', amount: '5,000 ج', timing: 'عند تسليم التصميم', color: 'text-orange-400' },
                  { name: 'الأخيرة', pct: '50%', amount: '12,500 ج', timing: 'عند التسليم النهائي', color: 'text-blue-400' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-2.5 px-3 text-white font-medium">الدفعة {row.name}</td>
                    <td className={`py-2.5 px-3 font-bold ${row.color}`}>{row.pct}</td>
                    <td className="py-2.5 px-3 text-white font-semibold">{row.amount}</td>
                    <td className="py-2.5 px-3 text-gray-400">{row.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ── Previous Work ── */}
        <motion.div {...fadeUp(0.3)} className="bg-brand-card border border-white/10 rounded-2xl p-6">
          <SectionTitle icon="🗂️" title="أمثلة من أعمالنا السابقة" />
          <div className="space-y-4">

            {/* BaBa */}
            <div className="border border-white/10 rounded-xl p-4">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>📱</span> تطبيق BaBa — Super App
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    تطبيق محمول متعدد الخدمات يربط المستخدمين بالبائعين مع تتبع التوصيل في الوقت الفعلي ولوحة تحكم إدارية شاملة.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-brand-dark/40 rounded-lg p-2.5">
                  <span className="text-gray-500 block mb-1">التقنيات</span>
                  <span className="text-gray-300">React Native + Node.js + MongoDB</span>
                </div>
                <div className="bg-brand-dark/40 rounded-lg p-2.5">
                  <span className="text-gray-500 block mb-1">المنصات</span>
                  <span className="text-gray-300">iOS · Android · Huawei AppGallery</span>
                </div>
              </div>
            </div>

            {/* AUREVIA */}
            <div className="border border-white/10 rounded-xl p-4">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>🌐</span> موقع AUREVIA — العلامة التجارية
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    موقع علامة تجارية راقية بهوية بصرية مميزة وتصميم أنيق وحديث مع تحسين كامل لمحركات البحث.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-brand-dark/40 rounded-lg p-2.5">
                  <span className="text-gray-500 block mb-1">التقنيات</span>
                  <span className="text-gray-300">Next.js + Tailwind CSS</span>
                </div>
                <div className="bg-brand-dark/40 rounded-lg p-2.5">
                  <span className="text-gray-500 block mb-1">الموقع</span>
                  <a href="https://aurevia-brand.com/" target="_blank" rel="noopener noreferrer"
                    className="text-brand-green hover:underline">
                    aurevia-brand.com
                  </a>
                </div>
              </div>
            </div>

            {/* Others */}
            <div className="bg-brand-dark/30 rounded-xl p-4">
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-white font-semibold">أعمال أخرى: </span>
                Yala Match لحجز الملاعب · Core Academy التعليمية · مؤتمرات كلية طب طنطا · وكالة Wahaj التسويقية · نظام POS للمطاعم · Islamic Brand للأزياء المحتشمة
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div {...fadeUp(0.35)} className="pb-4">
          <div className="bg-brand-card border border-white/10 rounded-2xl p-6 space-y-4">
            <div>
              <h2 className="text-sm font-bold text-white mb-1">جاهزون للبدء فوراً</h2>
              <p className="text-xs text-gray-500">التسليم خلال 10 أيام من تاريخ الاتفاق وتوقيع العقد.</p>
            </div>

            <div className="space-y-2">
              {[
                { label: 'التواصل', value: 'فريقنا متاح لمناقشة أي تفاصيل أو تعديل المتطلبات في أي وقت.' },
                { label: 'البداية السريعة', value: 'تصميم الواجهات من اليوم الأول مع تطوير الباك إند بشكل متوازي.' },
                { label: 'الضمان', value: 'المشروع مضمون 100% مع شهر دعم فني مجاني بعد التسليم.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-xs">
                  <div className="w-1.5 h-1.5 bg-brand-green rounded-full flex-shrink-0 mt-1" />
                  <p className="text-gray-400">
                    <span className="text-white font-medium">{item.label}: </span>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-4">
              <a
                href="https://wa.me/201275835080"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-green hover:underline"
              >
                <div className="w-1.5 h-1.5 bg-brand-green rounded-full animate-pulse" />
                تواصل معنا على واتساب
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TechnicalProposal;
