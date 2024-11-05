import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type ExperienceType = {
  title: string;
  employmentType: string;
  companyName: string;
  companyDescription: string;
  location: string;
  locationType: string;
  startDate: Date;
  endDate: Date | null;
  description: Array<string>;
};

const Block = ({ children }: PropsWithChildren) => {
  return <div className="pb-[.5rem]">{children}</div>;
};

const H1 = ({
  children,
  className,
}: PropsWithChildren & { className: string }) => {
  return (
    <div
      className={cn(
        "tracking-normal self-center mb-0 text-[1.5rem] font-semibold leading-[1.5]",
        className
      )}
    >
      {children}
    </div>
  );
};

const H2 = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={cn(
        "tracking-normal whitespace-normal object-contain self-center mb-0 text-base font-medium leading-[1.5]",
        className
      )}
    >
      {children}
    </div>
  );
};

const H3 = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={cn(
        "tracking-normal opacity-50 self-center mb-0 text-[0.75rem] font-medium leading-[1.5]",
        className
      )}
    >
      {children}
    </div>
  );
};

const ContactInfo = ({ children }: PropsWithChildren) => {
  return (
    <div className="gap-x-2 gap-y-0 flex flex-wrap text-[0.825rem]">
      {children}
    </div>
  );
};

const Text = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={cn(
        "object-contain text-sm font-normal leading-loose",
        className
      )}
    >
      {children}
    </div>
  );
};

const SpacerSmall = () => {
  return <div className="w-full pt-4" />;
};

const SectionHeading = ({
  children,
  className,
}: PropsWithChildren & { className: string }) => {
  return (
    <div
      className={cn("uppercase text-base font-light leading-loose", className)}
    >
      {children}
    </div>
  );
};

const WeHeading = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={cn(
        "object-contain flex flex-nowrap justify-between text-[0.75rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

const RTB = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-[.75rem] [&_ul]:leading-[1.2] [&_li]:font-light [&_li]:list-disc">
      {children}
    </div>
  );
};

export default function ResumePage() {
  //
  const fullName = "سهیل حسنجانی میر";
  const email = "soheilpcmir@gmail.com";
  const phoneNumber = "09390286828";
  const github = "soheilhasanjani";
  const linkedin = "soheilhasanjani";
  const summery = "lorem";
  //
  const experiences: Array<ExperienceType> = [
    {
      title: "Senior Frontend Developer",
      companyName: "مرکز نوآوری علوم و فناوری های شناختی دانشگاه علم و صنعت",
      companyDescription:
        "مرکز نوآوری علوم و فناوری‌های شناختی دانشگاه علم و صنعت ایران، با تمرکز بر تحقیق و توسعه در حوزه هوش مصنوعی و علوم شناختی، به ارائه راه‌حل‌های عملی و محصولات کاربردی برای سازمان‌های دولتی و غیردولتی می‌پردازد.",
      employmentType: "",
      location: "ایران, تهران, تهران",
      locationType: "",
      startDate: new Date(2021, 0),
      endDate: new Date(2024, 8),
      description: [
        "پیاده‌سازی وب‌اپلیکیشن‌های مبتنی بر هوش مصنوعی برای تحلیل و ارزیابی شبکه‌های اجتماعی و تولید محتوای خودکار",
        "توسعه اپلیکیشن‌های PWA برای بهبود تجربه کاربری و دسترسی سریع",
        "مشارکت در پیاده‌سازی چرخه‌های CI/CD و داکرایز کردن پروژه‌های فرانت‌اند برای بهینه‌سازی فرآیند توسعه و استقرار",
        "منتورینگ و همکاری در پروژه‌های فرانت‌اند برای ارتقای دانش تیم و بهبود کیفیت کد",
      ],
    },
    {
      title: "Senior Frontend Developer",
      companyName: "شرکت ثمین رای",
      companyDescription:
        "شرکت ثمین رای ، به ارائه راه‌حل‌های جامع بانکی و پرداخت، شامل بانکداری اسلامی، بانکداری متمرکز، کارت اعتباری اسلامی و بانکداری مجازی، برای بانک‌های کوچک تا متوسط می‌پردازد.",
      employmentType: "",
      location: "ایران, مازندران, بابل",
      locationType: "",
      startDate: new Date(2021, 4),
      endDate: new Date(2022, 11),
      description: [
        "توسعه وب‌اپلیکیشن صرافی ارز دیجیتال با تمرکز بر امنیت و عملکرد بالا",
        "منتورینگ و همکاری در پروژه‌های فرانت‌اند برای ارتقای دانش تیم و بهبود خروجی نهایی",
        "ایجاد و ارائه قالب‌های پایه برای شروع سریع‌تر و بهینه‌تر پروژه‌های شرکت",
        "ری‌فکتور و بازنویسی کدها برای بهبود کیفیت و کارایی پروژه‌ها",
      ],
    },
    {
      title: "Mid-Level Frontend Developer",
      companyName: "Local Influencers",
      companyDescription:
        "پلتفرم Localinfluencers.io برای ایجاد ارتباط امن و آسان بین اینفلوئنسرها و کسب‌وکارها طراحی شده تا پیشنهادات و همکاری‌ها را بدون نیاز به پیام‌های متعدد مدیریت کنند.",
      employmentType: "",
      location: "Greater Vancouver, British Columbia, Canada",
      locationType: "",
      startDate: new Date(2020, 11),
      endDate: new Date(2021, 8),
      description: [
        "توسعه وب‌اپلیکیشن شبکه اجتماعی برای ایجاد ارتباط موثر میان اینفلوئنسرها و کسب‌وکارها",
        "بهینه‌سازی و پیاده‌سازی راهکارهایی برای بهبود سئو و افزایش عملکرد وب‌اپلیکیشن",
      ],
    },
    {
      title: "Frontend Developer",
      companyName: "شرکت راهکارهای ارتباط سبز",
      companyDescription:
        "شرکت پارسیز با تمرکز بر مدیریت سبز و حذف کاغذ از فرایندهای کاری، به ارائه راهکارهای مؤثر و نوآورانه برای بهبود بهره‌وری و چابکی در ارتباطات محیط‌زیستی می‌پردازد.",
      employmentType: "",
      location: "ایران, مازندران, ساری",
      locationType: "",
      startDate: new Date(2020, 2),
      endDate: new Date(2021, 4),
      description: [
        "توسعه وب‌سایت شرکت برای نمایش و معرفی محصولات به‌صورت حرفه‌ای",
        "طراحی و پیاده‌سازی وب‌اپ اتوماسیون اداری با بخش‌های متنوع مانند بایگانی و زمان‌بندی جلسات",
        "پیاده‌سازی وب‌اپ مدیریت جلسات با استفاده از فناوری WebRTC برای ارتباطات آنلاین",
        "طراحی و بازطراحی وب‌اپلیکیشن‌ها با هدف بهبود تجربه کاربری و جذابیت بصری",
      ],
    },
    {
      title: "Frontend Developer",
      companyName: "شرکت ابررایانه طبرستان",
      companyDescription:
        "شرکت دانش‌بنیان ابر رایانه مازندران، با تمرکز بر کیفیت، هزینه مناسب و زمان‌بندی دقیق، به ارائه راه‌حل‌های نوین در صنعت فناوری اطلاعات و ارتباطات برای دستیابی به رضایت حداکثری مشتریان می‌پردازد.",
      employmentType: "",
      location: "ایران, مازندران, بابل",
      locationType: "",
      startDate: new Date(2018, 8),
      endDate: new Date(2020, 2),
      description: [
        "طراحی و پیاده‌سازی وب‌سایت‌های متعدد برای شرکت‌های خصوصی با تمرکز بر نیازهای تجاری",
        "توسعه وب‌سایت‌های خدماتی تخصصی در حوزه وکالت و امور حقوقی",
      ],
    },
    {
      title: "Freelance Frontend Developer",
      companyName: "فریلنسری",
      companyDescription: "",
      employmentType: "",
      location: "",
      locationType: "",
      startDate: new Date(2020, 0),
      endDate: null,
      description: [
        "توسعه وب‌سایت‌های فروشگاهی با امکانات خرید آنلاین و مدیریت محصولات",
        "طراحی و پیاده‌سازی پنل‌های مدیریت (ادمین) برای کنترل کامل وب‌سایت",
        "ایجاد وب‌اپ‌های هوش مصنوعی برای تولید پادکست هوشمند و تشخیص اشیاء بر اساس پرامپت",
        "ساخت فروشگاه سه‌بعدی با استفاده از Three.js برای تجربه بصری تعاملی",
        "توسعه اکستنشن‌های مرورگر برای افزودن قابلیت‌های اختصاصی",
        "پیاده‌سازی وب‌اپ در زمینه ارز دیجیتال",
      ],
    },
  ];
  //
  return (
    <div className="">
      <div className="w-[794px] px-[40px] py-[30px] mx-auto">
        <Block>
          <H1 className="text-[#005149]">{fullName}</H1>
          <ContactInfo>
            <Text>
              {/* {email} */}
              تهران
            </Text>
            <Text>•</Text>
            <Text>{phoneNumber}</Text>
            <Text>•</Text>
            <Text>soheilpcmir@gmail.com</Text>
            <Text>•</Text>
            <Text>linkedin.com/in/soheilhasanjani</Text>
            <Text>•</Text>
            <Text>اتمام سربازی</Text>
          </ContactInfo>
        </Block>
        <SpacerSmall />
        <Block>
          <SectionHeading className="font-semibold text-[#005149]">
            درباره من
          </SectionHeading>
          <hr className="my-1.5" />
          <Text className="text-justify leading-loose">
            توسعه‌دهنده فرانت‌اند با بیش از ۷ سال تجربه تخصصی در React و
            Next.js. مسلط به HTML، CSS، JavaScript و TypeScript. با بینش قوی در
            UI/UX و توانایی ارائه پیشنهادات موثر بر بهبود عملکرد تجربه کاربری.
            سابقه کار به‌عنوان فریلنسر و همکاری تمام‌وقت در پروژه‌های داخلی و
            بین‌المللی، از جمله پروژه‌های فروشگاهی، وب‌اپ‌های مبتنی بر هوش
            مصنوعی، سایت‌های خدماتی و حوزه ارز دیجیتال. همچنین تجربه منتورینگ
            افراد تازه‌ وارد به این حوزه را دارم. اشتیاق به یادگیری و استفاده از
            روش‌های بهینه و تکنولوژی‌های جدید همیشه علاقه من بوده است.
          </Text>
        </Block>
        <SpacerSmall />
        <SectionHeading className="font-semibold text-[#005149]">
          سوابق شغلی
        </SectionHeading>
        <hr className="my-1.5" />
        {/* <SpacerSmall /> */}
        <Block>
          {experiences.map((experience, i) => {
            return (
              <Block key={i}>
                <WeHeading>
                  <H2>{experience.companyName}</H2>
                  <H2>{experience.title}</H2>
                </WeHeading>
                <WeHeading>
                  <H3>{experience.location}</H3>
                  <H3>
                    {new Intl.DateTimeFormat("fa-IR", {
                      year: "numeric",
                      month: "long",
                    }).format(experience.startDate)}{" "}
                    –{" "}
                    {experience.endDate !== null
                      ? new Intl.DateTimeFormat("fa-IR", {
                          year: "numeric",
                          month: "long",
                        }).format(experience.endDate)
                      : "اکنون"}
                  </H3>
                </WeHeading>
                <SpacerSmall />
                <Text className="text-justify leading-loose">
                  {experience.companyDescription}
                </Text>
                <SpacerSmall />
                <RTB>
                  <ul>
                    {experience.description.map((d, i) => {
                      return <li key={i}>{d}</li>;
                    })}
                  </ul>
                </RTB>
                <hr />
              </Block>
            );
          })}
        </Block>
        <SectionHeading className="font-semibold text-[#005149]">
          مهارت ها
        </SectionHeading>
        <SpacerSmall />
        <Block>
          <ul className="columns-3 leading-[1.2]">
            {[
              "HTML/CSS",
              "Javascript",
              "Typescript",
              "React.js",
              "Next.js",
              "React Query",
              "Redux",
              "WebRTC",
              "Three.js",
              "PWA",
              "Tailwindcss",
              "Socket",
              "Mui",
              "Ant",
              "Chakra UI",
              "Shadcn",
              "Axios",
              "NPM / Bun / Pnpm",
            ].map((item, i) => {
              return (
                <li key={i} className="list-disc font-light text-[0.75rem]">
                  {item}
                </li>
              );
            })}
          </ul>
        </Block>
      </div>
    </div>
  );
}
