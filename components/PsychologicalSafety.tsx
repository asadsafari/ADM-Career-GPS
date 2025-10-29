
import React, { useState } from 'react';
import { ShieldCheckIcon, AcademicCapIcon, UserGroupIcon, MegaphoneIcon, CheckCircleIcon, LightBulbIcon } from './Icons';

const PageHeader = () => (
    <header className="pb-6 border-b border-slate-200 text-right" dir="rtl">
        <h1 className="text-4xl font-bold text-brand-primary">ایجاد امنیت روانی (Psychological Safety)</h1>
        <p className="mt-2 text-text-secondary max-w-4xl">سنگ بنای تیم‌های با عملکرد بالا. این راهنما استراتژی‌های عملی را برای مدیران تحویل چابک (ADM) فراهم می‌کند تا محیطی را پرورش دهند که در آن اعضای تیم برای بیان نظرات، اشتباه کردن و بروز کامل خود احساس امنیت کنند.</p>
    </header>
);

const ImportanceSection = () => (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-right" dir="rtl">
        <h2 className="text-2xl font-bold text-brand-secondary">چرا این موضوع اهمیت دارد؟</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6 text-text-secondary">
            <div>
                <p>در سال ۲۰۱۲، گوگل پروژه‌ای به نام ارسطو (Project Aristotle) را آغاز کرد؛ یک مطالعه عظیم چندساله برای کشف رازهای مؤثرترین تیم‌هایش. پس از تجزیه و تحلیل صدها تیم و متغیر، نتایج به طرز شگفت‌آوری واضح بود.</p>
                <p className="mt-2">مهم این نبود که چه کسانی در تیم بودند، بلکه چگونگی همکاری اعضای تیم با یکدیگر اهمیت داشت.</p>
            </div>
            <div className="bg-brand-primary/5 border-r-4 border-brand-primary p-4 rounded-l-lg">
                <p className="text-lg font-semibold text-brand-primary">«امنیت روانی با اختلاف زیاد، مهم‌ترین عامل در میان پنج پویایی بود که ما پیدا کردیم.»</p>
                <p className="text-sm text-left mt-2">- از پروژه re:Work گوگل</p>
            </div>
        </div>
        <p className="mt-4 text-text-secondary">تیم‌هایی با امنیت روانی بالا، نوآورتر هستند، سریع‌تر یاد می‌گیرند و در نهایت موفق‌ترند. برای یک مدیر تحویل چابک (ADM)، ایجاد این فضا یک مزیت جانبی نیست، بلکه یک شایستگی اصلی برای توانمندسازی عملکرد تیم است.</p>
    </div>
);

const stages = [
    {
        icon: UserGroupIcon,
        title: "۱. امنیت تعلق (Inclusion Safety)",
        description: "اعضای تیم احساس امنیت می‌کنند تا خودشان باشند و به عنوان بخشی از گروه پذیرفته شوند. این پایه و اساس است.",
        color: "blue",
        actions: [
            "اعضای تیم را به صورت شخصی بشناسید.",
            "اطمینان حاصل کنید که همه در جلسات فرصت صحبت دارند.",
            "از شوخی‌های داخلی که باعث محروم شدن دیگران می‌شود، خودداری کنید."
        ]
    },
    {
        icon: AcademicCapIcon,
        title: "۲. امنیت یادگیری (Learner Safety)",
        description: "اعضای تیم برای پرسیدن سؤال، آزمایش کردن و اعتراف به ندانستن موضوعی بدون ترس از بی‌کفایت به نظر رسیدن، احساس امنیت می‌کنند.",
        color: "green",
        actions: [
            "یادگیری و کنجکاوی را تشویق کنید.",
            "کار را به عنوان چالش‌های یادگیری ببینید، نه فقط اجرای وظایف.",
            "با گفتن «نمی‌دانم، بیایید با هم بفهمیم» آسیب‌پذیری را الگو قرار دهید."
        ]
    },
    {
        icon: MegaphoneIcon,
        title: "۳. امنیت مشارکت (Contributor Safety)",
        description: "اعضای تیم برای به کارگیری ایده‌ها و مهارت‌های خود برای ایجاد تفاوت، احساس امنیت می‌کنند و حس می‌کنند که مشارکتشان ارزشمند است.",
        color: "purple",
        actions: [
            "به تیم برای تصمیم‌گیری استقلال بدهید.",
            "مشارکت‌ها را به صورت عمومی قدردانی کنید.",
            "کار هر فرد را به وضوح به اهداف تیم مرتبط سازید."
        ]
    },
    {
        icon: ShieldCheckIcon,
        title: "۴. امنیت به چالش کشیدن (Challenger Safety)",
        description: "بالاترین سطح. اعضای تیم برای به چالش کشیدن وضعیت موجود، زیر سؤال بردن تصمیمات (حتی تصمیمات رهبر) و پیشنهاد تغییرات اساسی، احساس امنیت می‌کنند.",
        color: "red",
        actions: [
            "به صراحت نظرات مخالف را جویا شوید.",
            "هنگام به چالش کشیده شدن، با قدردانی پاسخ دهید، نه با حالت تدافعی.",
            "هنگام بحث، ایده را از شخص جدا کنید."
        ]
    }
];

const FourStagesSection = () => (
    <div dir="rtl">
        <h2 className="text-2xl font-bold text-brand-secondary mb-4 text-right">چهار مرحله امنیت روانی</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map(stage => (
                <div key={stage.title} className={`bg-white p-6 rounded-lg border-t-4 border-${stage.color}-500 shadow-sm text-right`}>
                    <stage.icon className={`w-10 h-10 text-${stage.color}-500 mb-3`} />
                    <h3 className="font-bold text-lg text-text-primary">{stage.title}</h3>
                    <p className="text-sm text-text-secondary mt-1 mb-4">{stage.description}</p>
                    <ul className="text-xs space-y-2 text-text-secondary">
                        {stage.actions.map(action => (
                            <li key={action} className="flex items-start">
                                <CheckCircleIcon className="w-4 h-4 ml-2 mt-0.5 text-green-500 flex-shrink-0" />
                                {action}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

const scenarios = [
    {
        scenario: "در جلسه مرور اسپرینت (Retrospective)، یک توسعه‌دهنده تازه‌کار اشاره می‌کند که یک تصمیم فنی گرفته شده توسط یک توسعه‌دهنده ارشد (و تأیید شده توسط شما) باعث دوباره‌کاری زیادی شده است. سکوت اتاق را فرا می‌گیرد.",
        options: [
            { text: "از تصمیم اولیه دفاع کنید و شرایط آن زمان را توضیح دهید.", isCorrect: false, feedback: "این کار می‌تواند چالش‌های آینده را سرکوب کند و این پیام را می‌دهد که زیر سؤال بردن رهبری پذیرفته نیست." },
            { text: "از توسعه‌دهنده تازه‌کار برای شجاعت و صداقتش تشکر کنید، سپس بحث را برای یادگیری تیم از این موقعیت باز کنید.", isCorrect: true, feedback: "این یک پاسخ عالی است. این کار چالش را تأیید می‌کند، بر یادگیری متمرکز می‌شود و فضا را برای دیگران امن می‌کند تا در آینده نظرات خود را بیان کنند." },
            { text: "حرف او را تأیید کنید اما پیشنهاد دهید که برای جلوگیری از معذب شدن توسعه‌دهنده ارشد، موضوع را خصوصی مطرح کنید.", isCorrect: false, feedback: "هرچند نیت خوبی است، اما این پیام را می‌دهد که گفتگوهای دشوار در تیم تابو هستند. بهتر است موضوع به صورت شفاف و محترمانه مدیریت شود." }
        ]
    },
    {
        scenario: "شتاب (Velocity) تیم برای دومین اسپرینت متوالی کاهش یافته است. یکی از ذی‌نفعان در جلسه تیمی از شما می‌پرسد: «چرا سرعت تیم کم شده است؟»",
        options: [
            { text: "به ذی‌نفع قول دهید که موضوع را «ریشه‌یابی» کرده و اطمینان حاصل می‌کنید که تیم به مسیر اصلی بازمی‌گردد.", isCorrect: false, feedback: "این کار موقعیت را به عنوان یک مشکل عملکردی از سوی تیم قاب‌بندی می‌کند و به جای ایجاد فضایی امن برای بررسی دلایل، فشار و ترس ایجاد می‌کند." },
            { text: "توضیح دهید که شتاب متغیر است و تیم بر تحویل ارزش متمرکز است، سپس از تیم دعوت کنید تا دیدگاه خود را در مورد اسپرینت به اشتراک بگذارند.", isCorrect: true, feedback: "عالی. این پاسخ هم ذی‌نفع را آموزش می‌دهد، هم تیم را از سرزنش محافظت می‌کند و هم آن‌ها را توانمند می‌سازد تا روایت کار خود را در دست بگیرند." },
            { text: "بلافاصله از تیم دلایل این کاهش را بپرسید و آن‌ها را در موقعیتی قرار دهید که عملکرد خود را توجیه کنند.", isCorrect: false, feedback: "این کار می‌تواند مانند یک بازجویی باشد و امنیت روانی را به شدت تضعیف کند. این فرصت یادگیری را به یک بازی سرزنش تبدیل می‌کند." }
        ]
    }
];

const ScenarioSimulator = () => {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleSelect = (index: number) => {
        if (selectedOption === null) {
            setSelectedOption(index);
        }
    };

    const handleNext = () => {
        setSelectedOption(null);
        setCurrentScenario(prev => (prev + 1) % scenarios.length);
    };

    const s = scenarios[currentScenario];

    return (
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-right" dir="rtl">
            <h2 className="text-2xl font-bold text-brand-secondary mb-1 flex items-center justify-end"><LightBulbIcon className="w-6 h-6 ml-2"/>شبیه‌ساز سناریو</h2>
            <p className="text-sm text-text-secondary mb-4">غریزه خود را بیازمایید. در این موقعیت‌های رایج برای ایجاد امنیت چگونه پاسخ می‌دهید؟</p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="font-semibold text-text-primary">{s.scenario}</p>
            </div>
            <div className="mt-4 space-y-3">
                {s.options.map((opt, index) => (
                    <button
                        key={index}
                        onClick={() => handleSelect(index)}
                        disabled={selectedOption !== null}
                        className={`w-full text-right p-3 rounded-md border-2 transition-all text-sm
                            ${selectedOption === null
                                ? 'bg-white border-slate-300 hover:border-brand-primary hover:bg-brand-primary/5'
                                : opt.isCorrect
                                    ? 'bg-green-100 border-green-400 text-green-900'
                                    : index === selectedOption
                                        ? 'bg-red-100 border-red-400 text-red-900'
                                        : 'bg-slate-100 border-slate-300 text-slate-500'
                            }`}
                    >
                        {opt.text}
                    </button>
                ))}
            </div>
            {selectedOption !== null && (
                 <div className={`mt-4 p-4 rounded-lg ${s.options[selectedOption].isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                    <h4 className="font-bold">{s.options[selectedOption].isCorrect ? 'انتخاب عالی!' : 'شاید رویکرد دیگری بهتر باشد.'}</h4>
                    <p className="text-sm mt-1">{s.options[selectedOption].feedback}</p>
                    <button onClick={handleNext} className="mt-3 text-sm font-semibold text-brand-primary hover:underline">&larr; سناریوی بعدی</button>
                </div>
            )}
        </div>
    );
};


export const PsychologicalSafety: React.FC = () => {
    return (
        <div className="space-y-8">
            <PageHeader />
            <ImportanceSection />
            <FourStagesSection />
            <ScenarioSimulator />
        </div>
    );
};
