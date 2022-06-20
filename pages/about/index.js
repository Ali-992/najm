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
      <div className={en ? '' : 'rtl'}>
        <main className="mt-16  text-white ">
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
                  <p className="mx-4  mb-6 w-5/6 leading-6 text-gray-300">
                    <span className="text-lg font-bold text-heading">
                      {en ? 'Najm Al Mashriq' : 'نجم المشرق'}
                    </span>{' '}
                    {en
                      ? 'is a construction company that heavily focused in the rental of heavy and light equipment for construction purposes. We have a team of highly skilled and experienced workers who are dedicated to providing the best service to our clients.'
                      : 'هي شركة إنشاءات تركز بشكل كبير على تأجير المعدات الثقيلة والخفيفة لأغراض البناء. لدينا فريق من العمال ذوي المهارات العالية والخبرة المتفانين لتقديم أفضل خدمة لعملائنا'}
                  </p>
                  <h3 className="mb-3  ml-4 w-5/6 text-lg tracking-wide underline underline-offset-4">
                    {en ? 'Our Goal' : 'هدفنا'}
                  </h3>
                  <p className="mx-4 mb-6  w-5/6 leading-6 text-gray-300">
                    {en
                      ? 'Our continual aim is to provide the best products and services to our customers as a leading heavy equipment rental company, while staying cost-effective. We continue to use the most efficient, current technology while adhering to the strictest safety initiatives.'
                      : 'هدفنا المستمر هو تقديم أفضل المنتجات والخدمات لعملائنا كشركة رائدة في تأجير المعدات الثقيلة ، مع الحفاظ على التكلفة. نواصل استخدام أحدث التقنيات وأكثرها كفاءة مع الالتزام بمبادرات السلامة الأكثر صرامة'}
                  </p>
                  <h3 className="mb-3  ml-4 w-5/6 text-lg tracking-wide underline underline-offset-4">
                    {en
                      ? 'COMMITTED TO PROVIDING THE BEST'
                      : 'ملتزمون بتقديم الأفضل'}
                  </h3>
                  <p className="mx-4  w-5/6 leading-6 text-gray-300">
                    {en
                      ? 'With years of industry experience as a specialist heavy equipment rental company along with a team of highly skilled and qualified personnel, you can rely on us to provide you with an exceptional array of tools, knowledge and advice to get the job done - no matter the scale of the project. We also understand the individual needs and requirements of our clients and even offer the most competitive prices for all equipment and machinery throughout the country. safety initiatives.'
                      : 'مع سنوات من الخبرة في الصناعة كمتخصص ثقيل شركة تأجير المعدات مع فريق من ذوي المهارات العالية والموظفين المؤهلين ، يمكنك الاعتماد علينا لتزويدك مع مجموعة استثنائية من الأدوات والمعرفة والمشورة ل إنجاز المهمة - بغض النظر عن حجم المشروع. نحن أيضا فهم الاحتياجات والمتطلبات الفردية لدينا العملاء وحتى تقديم أكثر الأسعار تنافسية للجميع المعدات والآلات في جميع أنحاء البلاد. سلامة المبادرات.'}
                  </p>
                </div>
                <div className=" mx-4 mt-8 grid  items-center gap-y-4 md:grid-cols-2 md:gap-x-20">
                  <ListItem
                    text={
                      en
                        ? 'Construction and building equipment rental with operator'
                        : 'تأجير معدات البناء والتشييد مع مشغل'
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
                        ? 'General construction of residential building'
                        : 'انشاء المباني السكنية'
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
                  icon={<BsFillBookmarkCheckFill fill="#ffd188" size={36} />}
                  number="15 +"
                  text={en ? 'Years in Business' : 'سنوات في العمل'}
                />
                <AchievmentItem
                  icon={<FaMedal fill="#ffd188" size={36} />}
                  number="2000 +"
                  text={en ? 'Project Finished' : 'عدد المشاريع المنجزة'}
                />
                <AchievmentItem
                  icon={<FaSmileBeam fill="#ffd188" size={36} />}
                  number="240 +"
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
