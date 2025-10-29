
import React, { useState } from 'react';
import { UserGroupIcon, QuestionMarkCircleIcon, ArrowPathIcon, CheckCircleIcon } from './Icons';

const PageHeader = () => (
    <header className="pb-6 border-b border-slate-200 text-right" dir="rtl">
        <h1 className="text-4xl font-bold text-brand-primary">کوچینگ تیم‌ها به سمت خودسازمان‌دهی</h1>
        <p className="mt-2 text-text-secondary max-w-4xl">از یک مدیر دستوردهنده به یک کوچ توانمندساز تبدیل شوید. این راهنما به بررسی ذهنیت، مدل‌ها و روش‌هایی می‌پردازد که به تیم شما کمک می‌کند تا مسئولیت‌پذیری را بر عهده گرفته و پتانسیل کامل خود را آزاد کند.</p>
    </header>
);

const ShuHaRiModel = () => (
    <div dir="rtl">
        <h2 className="text-2xl font-bold text-brand-secondary mb-2 flex items-center justify-end"><ArrowPathIcon className="w-7 h-7 ml-2" />مدل شو-ها-ری (Shu-Ha-Ri): تطبیق رویکرد شما</h2>
        <p className="text-text-secondary mb-6 max-w-3xl text-right">شو-ها-ری مفهومی از هنرهای رزمی ژاپنی است که مراحل یادگیری تا رسیدن به استادی را توصیف می‌کند. به عنوان یک ADM، شما باید سبک کوچینگ خود را با سطح بلوغ تیمتان تطبیق دهید.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Shu */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center shadow-sm">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <h3 className="font-black text-2xl">Shu (守)</h3>
                </div>
                <h4 className="font-bold text-lg mt-4 text-text-primary">پیروی از قانون</h4>
                <p className="text-sm text-text-secondary mt-2">تیم با مفاهیم چابک (Agile) تازه آشنا شده است. آن‌ها به دستورالعمل‌های واضح و راهنمایی عملی نیاز دارند. شما یک معلم هستید.</p>
                <div className="mt-4 text-right bg-slate-50 p-3 rounded-lg text-xs">
                    <p className="font-semibold text-slate-700">رویکرد شما: هدایت‌گر</p>
                    <ul className="list-disc pr-5 mt-1 space-y-1">
                        <li>«بیایید مطمئن شویم که جلسه روزانه ما طبق ۳ سؤال پیش می‌رود.»</li>
                        <li>«این روش نوشتن یک داستان کاربر (User Story) است.»</li>
                        <li>ارائه قالب‌ها و مثال‌های واضح.</li>
                    </ul>
                </div>
            </div>
            {/* Ha */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center shadow-sm">
                <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                     <h3 className="font-black text-2xl">Ha (破)</h3>
                </div>
                <h4 className="font-bold text-lg mt-4 text-text-primary">شکستن قانون</h4>
                <p className="text-sm text-text-secondary mt-2">تیم اصول اولیه را درک کرده است. آن‌ها برای آزمایش و تطبیق فرآیندها آماده‌اند. شما یک کوچ هستید.</p>
                 <div className="mt-4 text-right bg-slate-50 p-3 rounded-lg text-xs">
                    <p className="font-semibold text-slate-700">رویکرد شما: کوچینگ</p>
                    <ul className="list-disc pr-5 mt-1 space-y-1">
                        <li>«جلسات مرور اسپرینت ما تکراری شده. چه چیزی را می‌توانیم امتحان کنیم؟»</li>
                        <li>«بزرگترین مانعی که با آن روبرو هستید چیست؟»</li>
                        <li>به جای دادن پاسخ، سؤالات قدرتمند بپرسید.</li>
                    </ul>
                </div>
            </div>
            {/* Ri */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 text-center shadow-sm">
                 <div className="bg-red-100 text-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                     <h3 className="font-black text-2xl">Ri (離)</h3>
                </div>
                <h4 className="font-bold text-lg mt-4 text-text-primary">تبدیل شدن به قانون</h4>
                <p className="text-sm text-text-secondary mt-2">تیم خودسازمان‌ده و در حال بهبود مستمر است. آن‌ها روش‌های خود را ابداع می‌کنند. شما یک مشاور هستید.</p>
                 <div className="mt-4 text-right bg-slate-50 p-3 rounded-lg text-xs">
                    <p className="font-semibold text-slate-700">رویکرد شما: مشاوره / تفویض اختیار</p>
                    <ul className="list-disc pr-5 mt-1 space-y-1">
                        <li>«من به قضاوت شما برای حل این مشکل اعتماد دارم.»</li>
                        <li>«چه موانع سازمانی را می‌توانم برای شما برطرف کنم؟»</li>
                        <li>از تیم محافظت کرده و ارتباطات خارجی را مدیریت کنید.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const GrowModel = () => {
    const [state, setState] = useState({ G: '', R: '', O: '', W: '' });
    const handleChange = (key: 'G' | 'R' | 'O' | 'W', value: string) => {
        setState(prev => ({ ...prev, [key]: value }));
    };
    return (
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-right" dir="rtl">
            <h2 className="text-2xl font-bold text-brand-secondary mb-2 flex items-center justify-end"><QuestionMarkCircleIcon className="w-7 h-7 ml-2" />مدل GROW: یک چارچوب کوچینگ ساده</h2>
            <p className="text-text-secondary mb-6 max-w-3xl">وقتی یکی از اعضای تیم مشکلی را با شما در میان می‌گذارد، در برابر وسوسه حل کردن آن برای او مقاومت کنید. از این مدل پرسش چهار مرحله‌ای استفاده کنید تا او را به سمت راه‌حل خودش هدایت کنید و مهارت حل مسئله و احساس مالکیت او را تقویت نمایید.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Interactive Tool */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 order-2 md:order-1">
                    <h4 className="font-semibold text-text-primary mb-3">امتحان کنید: خودتان را کوچ کنید</h4>
                    <div className="space-y-3">
                        <textarea value={state.G} onChange={e => handleChange('G', e.target.value)} placeholder="G: هدفت چیست؟" className="w-full text-sm p-2 border rounded-md" rows={2}></textarea>
                        <textarea value={state.R} onChange={e => handleChange('R', e.target.value)} placeholder="R: واقعیت فعلی چیست؟" className="w-full text-sm p-2 border rounded-md" rows={2}></textarea>
                        <textarea value={state.O} onChange={e => handleChange('O', e.target.value)} placeholder="O: گزینه‌هایت چیست؟" className="w-full text-sm p-2 border rounded-md" rows={2}></textarea>
                        <textarea value={state.W} onChange={e => handleChange('W', e.target.value)} placeholder="W: اقدام بعدی‌ات چه خواهد بود؟" className="w-full text-sm p-2 border rounded-md" rows={2}></textarea>
                    </div>
                </div>
                 {/* Explanation */}
                 <div className="space-y-4 order-1 md:order-2">
                    <div>
                        <h3 className="font-bold text-lg text-text-primary">G - هدف (Goal)</h3>
                        <p className="text-sm text-text-secondary">می‌خواهی به چه چیزی برسی؟ موفقیت چه شکلی است؟</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-lg text-text-primary">R - واقعیت (Reality)</h3>
                        <p className="text-sm text-text-secondary">وضعیت فعلی چیست؟ تا به حال چه کارهایی را امتحان کرده‌ای؟</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-lg text-text-primary">O - گزینه‌ها (Options)</h3>
                        <p className="text-sm text-text-secondary">تمام کارهای ممکنی که می‌توانی انجام دهی چیست؟ دیگر چه گزینه‌هایی وجود دارد؟</p>
                    </div>
                     <div>
                        <h3 className="font-bold text-lg text-text-primary">W - اراده (Will)</h3>
                        <p className="text-sm text-text-secondary">چه کاری انجام خواهی داد؟ تا کی؟ به چه حمایتی نیاز داری؟</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SelfOrganizationSection = () => (
    <div dir="rtl">
        <h2 className="text-2xl font-bold text-brand-secondary mb-4 text-right">خودسازمان‌دهی چه شکلی است؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-400 text-right">
                <h3 className="font-bold text-lg text-green-800 mb-3">نشانه‌های یک تیم خودسازمان‌ده</h3>
                <ul className="space-y-2 text-sm text-green-900">
                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 ml-2 mt-0.5 flex-shrink-0"/>اعضای تیم کار را از بک‌لاگ (Backlog) برمی‌دارند؛ کار به آن‌ها «تخصیص» داده نمی‌شود.</li>
                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 ml-2 mt-0.5 flex-shrink-0"/>مشکلات روزمره خود را بدون ارجاع به شما حل می‌کنند.</li>
                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 ml-2 mt-0.5 flex-shrink-0"/>آن‌ها یکدیگر را در قبال تعهدات و کیفیت مسئول می‌دانند.</li>
                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 ml-2 mt-0.5 flex-shrink-0"/>در صورت نیاز، هر کسی در تیم می‌تواند جلسات (Ceremonies) را تسهیلگری کند.</li>
                    <li className="flex items-start"><CheckCircleIcon className="w-5 h-5 ml-2 mt-0.5 flex-shrink-0"/>آن‌ها به طور فعال فرآیندهای خود را آزمایش کرده و بهبود می‌بخشند.</li>
                </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-400 text-right">
                <h3 className="font-bold text-lg text-red-800 mb-3">باورهای غلط رایج</h3>
                 <ul className="space-y-2 text-sm text-red-900">
                    <li className="flex items-start"><span className="ml-2 mt-1 font-bold">&times;</span>به این معنا نیست که اعضای تیم می‌توانند هر کاری که می‌خواهند انجام دهند. آن‌ها حول یک هدف مشترک سازماندهی می‌شوند.</li>
                    <li className="flex items-start"><span className="ml-2 mt-1 font-bold">&times;</span>به این معنا نیست که هیچ رهبری وجود ندارد. رهبری سیال است و بر اساس نیاز پدیدار می‌شود.</li>
                    <li className="flex items-start"><span className="ml-2 mt-1 font-bold">&times;</span>این به معنای هرج و مرج نیست. برای موفقیت به مرزهای روشن، اهداف مشخص و ساختارهای پاسخگویی نیاز دارد.</li>
                    <li className="flex items-start"><span className="ml-2 mt-1 font-bold">&times;</span>چیزی نیست که بتوانید آن را «نصب» کنید. باید در طول زمان رشد کرده و پرورش یابد.</li>
                </ul>
            </div>
        </div>
    </div>
);


export const TeamCoaching: React.FC = () => {
    return (
        <div className="space-y-8">
            <PageHeader />
            <ShuHaRiModel />
            <GrowModel />
            <SelfOrganizationSection />
        </div>
    );
};
