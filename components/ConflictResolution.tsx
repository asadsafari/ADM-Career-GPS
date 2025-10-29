
import React from 'react';
import { HandshakeIcon, CheckCircleIcon, ChatBubbleLeftRightIcon, LightBulbIcon } from './Icons';

const PageHeader = () => (
    <header className="pb-6 border-b border-slate-200 text-right" dir="rtl">
        <h1 className="text-4xl font-bold text-brand-primary">تکنیک‌های مدیریت تعارضات سازنده</h1>
        <p className="mt-2 text-text-secondary max-w-4xl">تیم‌های با عملکرد بالا از تعارض دوری نمی‌کنند؛ بلکه به صورت سازنده با آن درگیر می‌شوند. بیاموزید که چگونه اختلافات را از یک منبع اصطکاک به یک کاتالیزور برای نوآوری و انسجام تیمی قوی‌تر تبدیل کنید.</p>
    </header>
);

const MindsetShift = () => (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm text-right" dir="rtl">
        <h2 className="text-2xl font-bold text-brand-secondary">تغییر ذهنیت: تعارض به عنوان یک سرمایه</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-red-50 p-6 rounded-lg border-r-4 border-red-400">
                 <h3 className="font-bold text-lg text-red-800 mb-2">تعارض مخرب (شخص-محور)</h3>
                 <ul className="space-y-1 text-sm text-red-900 list-disc pr-5">
                    <li>بر سرزنش و حملات شخصی متمرکز است</li>
                    <li>منجر به کینه و حالت تدافعی می‌شود</li>
                    <li>امنیت روانی را از بین می‌برد</li>
                    <li>هدف: برنده شدن در بحث</li>
                 </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-400">
                 <h3 className="font-bold text-lg text-green-800 mb-2">تعارض سازنده (کار-محور)</h3>
                 <ul className="space-y-1 text-sm text-green-900 list-disc pr-5">
                    <li>بر مشکل یا ایده متمرکز است، نه شخص</li>
                    <li>منجر به راه‌حل‌های بهتر و درک عمیق‌تر می‌شود</li>
                    <li>از طریق بحث محترمانه، اعتماد ایجاد می‌کند</li>
                    <li>هدف: یافتن بهترین نتیجه</li>
                 </ul>
            </div>
        </div>
        <p className="mt-4 text-text-secondary">نقش شما به عنوان یک ADM، به حداقل رساندن تعارض مخرب و در عین حال تشویق و تسهیل فعالانه تعارض سازنده است.</p>
    </div>
);

const ThomasKilmannModel = () => (
     <div dir="rtl">
        <h2 className="text-2xl font-bold text-brand-secondary mb-2 text-right">مدل‌های تعارض توماس-کیلمن</h2>
        <p className="text-text-secondary mb-6 max-w-3xl text-right">این مدل پنج سبک رایج برای مواجهه با تعارض را بر اساس دو بعد توصیف می‌کند: <strong className="text-text-primary">قاطعیت</strong> (پیگیری منافع خود) و <strong className="text-text-primary">همکاری</strong> (پیگیری منافع دیگران). هیچ سبک «بهترینی» وجود ندارد؛ اثربخشی به موقعیت بستگی دارد.</p>
        <div className="relative p-4 md:p-8 bg-white border border-slate-200 rounded-lg shadow-sm">
            {/* Axes */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center text-xs font-bold text-text-secondary">&larr; قاطعیت</div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 rotate-90 text-center text-xs font-bold text-text-secondary">&larr; همکاری</div>
            
            <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 h-80 md:h-96">
                {/* Top Row */}
                <div className="flex items-start justify-start">
                     <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center text-sm w-32">
                        <h4 className="font-bold">همکاری</h4>
                        <p className="text-xs">برد/برد</p>
                    </div>
                </div>
                <div></div>
                <div className="flex items-start justify-end">
                    <div className="bg-red-100 text-red-800 p-3 rounded-lg text-center text-sm w-32">
                        <h4 className="font-bold">رقابت</h4>
                        <p className="text-xs">برد/باخت</p>
                    </div>
                </div>
                {/* Middle Row */}
                <div></div>
                <div className="flex items-center justify-center">
                     <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg text-center text-sm w-32">
                        <h4 className="font-bold">مصالحه</h4>
                        <p className="text-xs">حد وسط</p>
                    </div>
                </div>
                <div></div>
                {/* Bottom Row */}
                <div className="flex items-end justify-start">
                     <div className="bg-blue-100 text-blue-800 p-3 rounded-lg text-center text-sm w-32">
                        <h4 className="font-bold">سازش</h4>
                        <p className="text-xs">باخت/برد</p>
                    </div>
                </div>
                <div></div>
                <div className="flex items-end justify-end">
                     <div className="bg-slate-100 text-slate-800 p-3 rounded-lg text-center text-sm w-32">
                        <h4 className="font-bold">اجتناب</h4>
                        <p className="text-xs">باخت/باخت</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
);

const MediationFramework = () => {
    const steps = [
        {
            icon: HandshakeIcon,
            title: "مرحله ۱: آماده‌سازی فضا",
            description: "یک فضای امن برای گفتگو ایجاد کنید.",
            actions: [
                "از همه طرف‌ها برای گفتگو رضایت بگیرید.",
                "زمان و مکان بی‌طرفی را انتخاب کنید.",
                "قوانین پایه را تعیین کنید: حرف یکدیگر را قطع نکنید، روی مشکل تمرکز کنید، نیت خیر داشته باشید."
            ]
        },
        {
            icon: ChatBubbleLeftRightIcon,
            title: "مرحله ۲: درک دیدگاه‌ها",
            description: "اطمینان حاصل کنید که همه احساس می‌کنند شنیده و درک شده‌اند.",
            actions: [
                "به هر شخص اجازه دهید بدون وقفه دیدگاه خود را توضیح دهد.",
                "از گوش دادن فعال استفاده کنید: آنچه را می‌شنوید بازتاب دهید («پس، به نظر می‌رسد شما احساس کردید که...»).",
                "روی منافع (آنچه نیاز دارم) تمرکز کنید، نه مواضع (آنچه می‌خواهم)."
            ]
        },
        {
            icon: LightBulbIcon,
            title: "مرحله ۳: یافتن نقاط مشترک",
            description: "ذهنیت را از «من در مقابل تو» به «ما در مقابل مشکل» تغییر دهید.",
            actions: [
                "بپرسید: «روی چه چیزی هر دو توافق داریم؟» یا «هدف مشترک ما در اینجا چیست؟»",
                "هدف مشترکی که دیدگاه‌های متفاوت را متحد می‌کند، شناسایی کنید.",
                "اعتبار هر دو دیدگاه را تأیید کنید."
            ]
        },
        {
            icon: CheckCircleIcon,
            title: "مرحله ۴: بررسی راه‌حل‌ها و توافق",
            description: "به سمت یک نتیجه عینی و قابل اجرا حرکت کنید.",
            actions: [
                "با هم و بدون قضاوت، راه‌حل‌های بالقوه را ایده‌پردازی کنید.",
                "گزینه‌ها را بر اساس هدف مشترک مرحله ۳ ارزیابی کنید.",
                "روی یک اقدام مشخص، مسئول آن و زمان‌بندی توافق کنید. آن را بنویسید."
            ]
        },
    ];
    return (
        <div dir="rtl">
            <h2 className="text-2xl font-bold text-brand-secondary mb-2 text-right">یک چارچوب میانجی‌گری ۴ مرحله‌ای برای ADMها</h2>
            <p className="text-text-secondary mb-6 max-w-3xl text-right">زمانی که یک تعارض آنقدر ریشه‌دار است که تیم به تنهایی نمی‌تواند آن را حل کند، ممکن است لازم باشد شما به عنوان یک تسهیلگر بی‌طرف وارد شوید. از این رویکرد ساختاریافته برای هدایت گفتگو استفاده کنید.</p>
            <div className="space-y-6">
                {steps.map(step => (
                     <div key={step.title} className="flex items-start">
                        <div className={`bg-brand-primary/10 text-brand-primary w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center ml-6`}>
                            <step.icon className="w-8 h-8" />
                        </div>
                        <div className="text-right">
                            <h3 className="text-lg font-bold text-text-primary">{step.title}</h3>
                            <p className="text-sm text-text-secondary mt-1">{step.description}</p>
                            <ul className="mt-3 space-y-2 text-sm">
                                {step.actions.map(action => (
                                    <li key={action} className="flex items-start">
                                        <span className="text-brand-secondary ml-2 font-bold">&larr;</span>
                                        <span>{action}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export const ConflictResolution: React.FC = () => {
    return (
        <div className="space-y-8">
            <PageHeader />
            <MindsetShift />
            <ThomasKilmannModel />
            <MediationFramework />
        </div>
    );
};
