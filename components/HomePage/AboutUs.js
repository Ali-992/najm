import React, { useContext } from 'react'
import Title from '../../components/ui/Title'
import ListItem from '../ui/ListItem'
import AchievmentItem from '../ui/AchievmentItem'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'
import { FaMedal, FaSmileBeam } from 'react-icons/fa'
import LanguageContext from '../../utils/store'

export default function AboutUs() {
  const { en } = useContext(LanguageContext)
  return (
    <div
      className={`section-height px-4 py-2 sm:px-6 md:py-8 lg:px-8 ${
        en ? '' : 'rtl'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <Title>{en ? 'About Us' : 'من نحن'}</Title>
        <div className="flex flex-col items-start justify-center md:flex-row">
          <div className="flex-1 md:mt-10">
            <p className="mx-4 w-5/6 leading-8 text-gray-300">
              <span className="text-lg font-bold text-heading">
                {en ? 'Najm Al Mashriq' : 'نجم المشرق'}
              </span>{' '}
              {en
                ? 'is a construction company that heavily focused in the rental of heavy and light equipment for construction purposes. We have a team of highly skilled and experienced workers who are dedicated to providing the best service to our clients.'
                : 'هي شركة إنشاءات تركز بشكل كبير على تأجير المعدات الثقيلة والخفيفة لأغراض البناء. لدينا فريق من العمال ذوي المهارات العالية والخبرة المتفانين لتقديم أفضل خدمة لعملائنا'}
            </p>
            <div className="mx-4 mt-8">
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
          <div className="mx-4 mt-8 flex flex-1 flex-col justify-center">
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
    </div>
  )
}
