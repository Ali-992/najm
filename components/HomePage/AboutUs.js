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
                ? 'is a construction company that focuses heavily on leasing heavy and light equipment for construction and building purposes, event services, festivals and celebrations, as well as sports racing services and logistical services in all regions of the Kingdom of Saudi Arabia and the Arab Gulf states.'
                : 'هي شركة إنشاءات تركز بشكل كبير على تأجير المعدات الثقيلة والخفيفة للأغراض الإنشائية و البناء و خدمات الفعاليات و المهرجانات و الاحتفالات و كذلك خدمات السباقات الرياضية و الخدمات اللوجستية في جميع مناطق المملكة العربية السعودية و دول الخليج العربي'}
            </p>
            <div className="mx-4 mt-8">
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
          <div className="mx-4 mt-8 flex flex-1 flex-col justify-center">
            <AchievmentItem
              icon={<BsFillBookmarkCheckFill fill="#ffd188" size={36} />}
              number="12 +"
              text={en ? 'Years in Business' : 'سنوات في العمل'}
            />
            <AchievmentItem
              icon={<FaMedal fill="#ffd188" size={36} />}
              number="1600 +"
              text={en ? 'Project Finished' : 'عدد المشاريع المنجزة'}
            />
            <AchievmentItem
              icon={<FaSmileBeam fill="#ffd188" size={36} />}
              number="210 +"
              text={en ? 'Satisfied Client' : 'عملاء راضون'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
