import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "כמה זמן העיסוי?",
      answer: "שעת טיפול הינה 50 דקות."
    },
    {
      question: "מה העלות של טיפול?",
      answer: "250₪ - 270₪ (המחיר משתנה בהתאם לסוג העיסוי)."
    },
    {
      question: "באיזה שיטות את מטפלת?",
      answer: (
        <ul className="space-y-3 list-disc list-inside text-slate-300">
          <li><strong className="text-[#c99a6c]">כוסות רוח:</strong> טיפול ממוקד בנקודות עומס.</li>
          <li><strong className="text-[#c99a6c]">עיסוי שוודי:</strong> עיסוי המעניק רגע של רוגע ונשימה, מזרים דם ומביא חמצן לגוף.</li>
          <li><strong className="text-[#c99a6c]">עיסוי רפואי:</strong> עיסוי נקודות טריגר (נקודות עומס) על ידי מגע, נשימה והזרמת דם לנקודות העומס. על ידי כך נוצרת שבירה של מעגל הכאב.</li>
          <li><strong className="text-[#c99a6c]">עיסוי אינטגרטיבי (המומלץ):</strong> עיסוי משולב המשלב טכניקות מהעיסוי השוודי והרפואי.</li>
          <li><strong className="text-[#c99a6c]">נשים בהריון:</strong> הסמכה ייעודית לעיסוי המותאם לנשים בהריון, החל מהחודש השלישי ומעלה.</li>
        </ul>
      )
    },
    {
      question: "האם אפשרי לעשות חבילת עיסויים / לקנות ממך שובר?",
      answer: (
        <div className="space-y-2">
          <p>בהחלט, ניתן לרכוש שובר מתנה.</p>
          <p>בנוסף, אני מציעה חבילות טיפולים משתלמות:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>חבילת עיסויים של 5 מפגשים מעניקה <span className="text-[#c99a6c] font-semibold">5% הנחה</span>.</li>
            <li>חבילת עיסויים של 10 מפגשים מעניקה <span className="text-[#c99a6c] font-semibold">10% הנחה</span>.</li>
          </ul>
        </div>
      )
    },
    {
      question: "כמה זמן את כבר בתחום?",
      answer: "אני בעלת קליניקה פעילה כבר למעלה משנתיים, ומלווה מטופלים רבים בתהליכי שחרור וריפוי."
    },
    {
      question: "האם יש הוראות מיוחדות לפני ההגעה?",
      answer: (
        <ul className="list-decimal list-inside space-y-2 text-slate-300">
          <li>מומלץ להוריד תכשיטים לפני הטיפול.</li>
          <li>כדאי לבוא עם בגדים נוחים וחופשיים.</li>
          <li>יש למלא את טופס השאלון שאשלח אלייך (עם פרטים עלייך ועלי) לפני תחילת העיסוי.</li>
        </ul>
      )
    },
    {
      question: "מה צריך לעשות אחרי טיפול?",
      answer: "עדיף להעניק לעצמך כמה רגעים של שקט ומנוחה לאחר הטיפול כדי להמשיך את השגרה בצורה המיטבית."
    },
    {
      question: "האם יש הסדר ביטוח?",
      answer: "כן, יש לי ביטוח מקיף ומלא על כלל הטיפולים בקליניקה."
    },
    {
      question: "איך ארגיש ביום שאחרי?",
      answer: (
        <div className="space-y-2">
          <p>תרגישי תחושת הקלה ושחרור עמוקה. פתאום תצליחי להזיז בקלות את המקום שעבדנו עליו, לאחר תקופה ארוכה של כיווץ וכאב.</p>
          <p className="text-sm text-slate-400">הערה: לפעמים תיתכן תחושת כאב קלה או רגישות באזור שבו התמקדנו. זהו תהליך טבעי לחלוטין המגיע מתוך ההקלה שהגוף חווה לאחר זמן רב שהמקום לא קיבל זרימת דם וחמצן בריאה.</p>
        </div>
      )
    }
  ];

  return (
    <section className="w-full bg-[#1f2933] text-white py-16 px-4 md:px-8 dir-rtl" dir="rtl">
      <div className="max-w-3xl mx-auto">
        
        {/* כותרת הסקשן */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
            שאלות ותשובות
          </h2>
          <div className="w-24 h-1 bg-[#965e34] mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 text-sm md:text-base">
            כל מה שחשוב לדעת לפני ואחרי שמגיעים לטיפול בקליניקת "מגע לנשמה"
          </p>
        </div>

        {/* רשימת האקורדיון */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border border-slate-700/50 rounded-lg overflow-hidden bg-[#24303c] transition-all duration-300 shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-right font-medium text-lg focus:outline-none hover:bg-[#2b3a48] transition-colors"
                >
                  <span className={`${isOpen ? 'text-[#c99a6c]' : 'text-slate-100'} transition-colors duration-200`}>
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 mr-4 ${
                      isOpen ? 'transform rotate-180 text-[#965e34]' : ''
                    }`}
                  />
                </button>

                {/* תוכן התשובה עם אנמציה חלקה של גובה */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-slate-700/30' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 text-slate-300 leading-relaxed text-base bg-[#1f2933]/40">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* כפתור הנעה לפעולה בתחתית הסקשן בסגנון כפתור ה-Hero */}
        <div className="text-center mt-12">
          <p className="text-slate-400 text-sm mb-4">עדיין יש לך שאלות? אני כאן בשבילך</p>
          <a 
            href="#contact" 
            className="inline-block bg-[#965e34] hover:bg-[#824f2a] text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-lg"
          >
            דברי איתי בוואטסאפ
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;