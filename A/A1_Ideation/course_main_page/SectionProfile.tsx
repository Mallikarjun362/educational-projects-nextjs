import { Nanum_Myeongjo, Titillium_Web } from 'next/font/google';
import ir_data from '@/data/information_retrieval';
import ir_img from '../../data/ir1.png';

const main_title_font_family = Nanum_Myeongjo({
  weight: '400',
  subsets: ['latin'],
});

const subtitle_font_family = Titillium_Web({
  weight: '300',
  subsets: ['latin'],
});

interface ISectionProfile {
  title?: String;
  description?: String;
  code?: String;
  subtitle?: String;
}

const default_args: ISectionProfile = {
  title: ir_data.course_title,
  description: 'lorem',
  code: ir_data.course_code,
  subtitle: ir_data.course_purpose_subtitle,
};

export default function SectionProfile(props: ISectionProfile) {
  props = {
    ...default_args,
    ...props,
  };
  return (
    <div style={{ width: '100%', padding: '20px', backgroundColor: '#AAE7E7' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <div className="left">
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'normal',
              lineHeight: '60px',
            }}
            className={`${main_title_font_family.className}`}
          >
            {props.code} : {props.title}
          </h1>
          <span
            className={`${subtitle_font_family.className}`}
            style={{
              fontSize: '22px',
              letterSpacing: '3px',
              wordSpacing: '10px',
            }}
          >
            {props.subtitle}
          </span>
        </div>
        <div className="right">
          <img src={ir_img.src} alt="" style={{ width: '200px' }} />
        </div>
      </div>
      <hr style={{ borderColor: 'black', borderWidth: '1px' }} />
    </div>
  );
}
