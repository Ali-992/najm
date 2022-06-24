import React, { useContext } from 'react'
import Page from '../../components/layout/Page'
import Title from '../../components/ui/Title'
import ListItem from '../../components/ui/ListItem'
import AchievmentItem from '../../components/ui/AchievmentItem'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { FaMedal, FaSmileBeam } from 'react-icons/fa'
import LangContext from '../../utils/store'

export default function About() {
  const { en } = useContext(LangContext)

  return (
    <Page title="About Us">
      <div className={`${en ? '' : 'rtl'} mt-24 bg-zinc-100`}>
        <main className="mt-16  ">
          <div className="section-height   px-4 py-2 sm:px-6 md:py-8 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <Title>{en ? 'About Us' : 'من نحن'}</Title>
              <div className="flex flex-col items-start justify-center ">
                <div>
                  <h3 className="mb-3  ml-4 w-5/6 text-lg tracking-wide underline underline-offset-4">
                    {en
                      ? 'Najm Al Mashriq provides rental of heavy and light equipements'
                      : ' نجم المشرق للمقاولات و تأجير المعدات'}
                  </h3>
                  <p className="mx-4  mb-6 w-5/6 leading-6 ">
                    <span className="text-lg font-bold text-heading">
                      {en ? 'Najm Al Mashriq' : 'نجم المشرق'}
                    </span>{' '}
                    {en
                      ? 'is a construction company that focuses heavily on leasing heavy and light equipment for construction and building purposes, event services, festivals and celebrations, as well as sports racing services and logistical services in all regions of the Kingdom of Saudi Arabia and the Arab Gulf states.'
                      : 'هي شركة إنشاءات تركز بشكل كبير على تأجير المعدات الثقيلة والخفيفة للأغراض الإنشائية و البناء و خدمات الفعاليات و المهرجانات و الاحتفالات و كذلك خدمات السباقات الرياضية و الخدمات اللوجستية في جميع مناطق المملكة العربية السعودية و دول الخليج العربي'}
                  </p>
                  <h3 className="mb-3  ml-4 w-5/6 text-lg tracking-wide underline underline-offset-4">
                    {en ? 'Our Goal' : 'هدفنا'}
                  </h3>
                  <p className="mx-4 mb-6  w-5/6 leading-6 ">
                    {en
                      ? 'Our continual aim is to provide the best products and services to our customers as a leading heavy equipment rental company, while staying cost-effective. We continue to use the most efficient, current technology while adhering to the strictest safety initiatives.'
                      : 'هدفنا المستمر هو تقديم أفضل المنتجات والخدمات لعملائنا كشركة رائدة في تأجير المعدات الثقيلة ، مع الحفاظ على التكلفة. نواصل استخدام أحدث التقنيات وأكثرها كفاءة مع الالتزام بمبادرات السلامة الأكثر صرامة'}
                  </p>
                  <h3 className="mb-3  ml-4 w-5/6 text-lg tracking-wide underline underline-offset-4">
                    {en
                      ? 'COMMITTED TO PROVIDING THE BEST'
                      : 'ملتزمون بتقديم الأفضل'}
                  </h3>
                  <p className="mx-4  w-5/6 leading-6 ">
                    {en
                      ? 'With years of industry experience as a specialist heavy equipment rental company along with a team of highly skilled and qualified personnel, you can rely on us to provide you with an exceptional array of tools, knowledge and advice to get the job done - no matter the scale of the project. We also understand the individual needs and requirements of our clients and even offer the most competitive prices for all equipment and machinery throughout the country. safety initiatives.'
                      : 'مع سنوات من الخبرة في الصناعة كمتخصص ثقيل شركة تأجير المعدات مع فريق من ذوي المهارات العالية والموظفين المؤهلين ، يمكنك الاعتماد علينا لتزويدك مع مجموعة استثنائية من الأدوات والمعرفة والمشورة ل إنجاز المهمة - بغض النظر عن حجم المشروع. نحن أيضا فهم الاحتياجات والمتطلبات الفردية لدينا العملاء وحتى تقديم أكثر الأسعار تنافسية للجميع المعدات والآلات في جميع أنحاء البلاد. سلامة المبادرات.'}
                  </p>
                  <p className="mx-4 mt-4 w-5/6 leading-8 ">
                    <span className="text-lg font-bold ">
                      {en
                        ? 'We are committed to the creation of long lasting relationships :'
                        : 'نحن نؤمن بإنشاء علاقات طويلة الامد : '}
                    </span>{' '}
                    {en
                      ? 'With our customers, our staff and our suppliers. We respect all of them in our business and will never disadvantage them to secure short-term gain. We will keep the promises we make to our clients'
                      : 'مع عملائنا وموظفينا وموردينا. نحن نحترم جميعاً في أعمالنا ولن تضر بهم لتأمين مكاسب قصيرة المدى. سنفي بالوعود التي قطعناها على أنفسنا لعملائنا '}
                  </p>
                  <p className="mx-4 mt-4 w-5/6 leading-8 ">
                    <span className="text-lg font-bold ">
                      {en
                        ? 'We are passionate about our work:'
                        : 'نحن شغوفون بعملنا:'}
                    </span>{' '}
                    {en
                      ? 'Passion drives our commitment to continuous improvement and excellence in delivery, which generates happy customers and healthy profits'
                      : 'يقود الشغف التزامنا بالتحسين المستمر و التميز في التسليم مما يولد عملاء سعداء وأرباح جيدة'}
                  </p>
                </div>
                <div className=" mx-4 mt-8 grid  items-center gap-y-4 md:grid-cols-2 md:gap-x-20">
                  <ListItem
                    text={
                      en
                        ? 'Construction and building equipment rental with and without operator'
                        : 'تأجير معدات البناء والتشييد مع مشغل و بدون مشغل'
                    }
                  />
                  <ListItem
                    text={
                      en
                        ? 'Rental of cranes for construction purposes'
                        : 'تأجير الرافعات لأغراض البناء'
                    }
                  />
                  <ListItem
                    text={
                      en
                        ? 'General construction of residential and non-residential building'
                        : 'انشاء المباني السكنية و غير السكنية'
                    }
                  />
                  <ListItem
                    text={
                      en
                        ? 'Residential and non-residential building renovations'
                        : 'تجديد المباني السكنية وغير السكنية'
                    }
                  />
                  <ListItem
                    text={
                      en
                        ? 'sports public constrution including stadiums'
                        : 'انشاء المباني الرياضية بما في ذلك الملاعب'
                    }
                  />
                </div>
              </div>
              <div className="mx-4 mt-8  grid flex-1 flex-col justify-center gap-4 md:grid-cols-2">
                <AchievmentItem
                  icon={<BsFillBookmarkCheckFill fill="#d71d1d" size={36} />}
                  number="12 +"
                  text={en ? 'Years in Business' : 'سنوات في العمل'}
                />
                <AchievmentItem
                  icon={<FaMedal fill="#d71d1d" size={36} />}
                  number="1600 +"
                  text={en ? 'Project Finished' : 'عدد المشاريع المنجزة'}
                />
                <AchievmentItem
                  icon={<FaSmileBeam fill="#d71d1d" size={36} />}
                  number="210 +"
                  text={en ? 'Satisfied Client' : 'عملاء راضون'}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </Page>
  )
}
