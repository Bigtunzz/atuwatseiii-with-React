import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Arrow } from "../../a
// import slideImg from "../../../assets/abejeoye.jpg";
import { Arrow, BtnSliderNext, BtnSliderPrev,MenuBtn,Overlay } from "../../atoms";
import { FloatingNav,HambugerMenu } from "../../molecules";
import "./style.css";
const images = [
  "akengbuwa",
  "abejeoye",
  "atogbuwa",
  "atuwatse_ii",
  "atuwatse_iii",
  "erejuwa_ii",
  "interregnum",
];
export const History = () => {
  const [slide, setSlide] = useState(6);
  useEffect(() => {
    const interval = setInterval(() => {
      slide < images.length - 1 ? setSlide((slide) => slide + 1) : setSlide(0);
      // slide === 0
      //   ? setSlide((slide) => (slide = images.length - 1))
      //   : setSlide((slide) => slide - 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [slide]);
  const nextSlide = () => {
    slide < images.length - 1 ? setSlide((slide) => slide + 1) : setSlide(0);
  };
  const prevSlide = () => {
      slide === 0
        ? setSlide((slide) => (slide = images.length - 1))
        : setSlide((slide) => slide - 1);
  };
      const [moveNav, setMoveNav] = useState(false);
      const lowerNav = () => {
        setMoveNav((moveNav) => !moveNav);
      };
      let checkMoveNav = moveNav ? "active" : "";

  return (
    <>
      <section className="history-container">
        <Overlay activate={checkMoveNav} />
        {/* <Arrow/> */}
        <HambugerMenu
          activate={checkMoveNav}
          func={lowerNav}
          className="centralize"
        />
        <div className="historySlider">
          <Arrow />

          <div className="carousel">
            <div className="slide">
              <img
                src={require(`../../../assets/${images[slide]}.jpg`)}
                alt="1"
                className="carouselImg"
              />
            </div>

            <BtnSliderPrev moveSlide={prevSlide} />
            <BtnSliderNext moveSlide={nextSlide} />
          </div>
        </div>
        <FloatingNav m={'centralize'} />
        <div className="container">
          <div className="history_container">
            <h2 className="history_text">History</h2>
          </div>
          <div className="scroll_container">
            <div className="history_content">
              <div className="paragraph">
                <h5 className="before-the-monarchy">Before The Monarchy</h5>

                <p className="para-text">
                  Available information about this period has been quite sketchy
                  and derived mainly from oral tradition that has existed since
                  before records. What has been established, however, is that
                  some people groups of Yoruba, Nupe and Igala origins came at
                  different times and were the core groups that constituted the
                  Itsekiri nation.
                </p>

                <p className="para-text">
                  Research still has to be done to provide more information in
                  this area. This is more so when we consider that the Ebu
                  people in Delta North of Nigeria have words and language
                  formations similar to those of the Itsekiri language.
                  Likewise, the Oworo people of Kogi State in the North of
                  Nigeria also have a similar linguistic affinity.
                </p>

                <p className="para-text">
                  These are no neighbours at all but are far removed from one
                  another and with several other and very different ethnic
                  nationalities between them and us. It cannot be said that such
                  traces of linguistic affinity was derived from proximity or
                  other forms of contact and interaction over an extended period
                  for that to have been developed.
                </p>

                <p className="para-text">
                  It is instructive to note that such linguistic affinity does
                  not exist between Edo and Itsekiri even though the Edo group,
                  which was the last of the people group, came and joined us
                  since from over five centuries ago. This means that by the
                  time they arrived that long ago, the Itsekiri language had
                  been set and was well established already. The only traces of
                  Edo in the Itsekiri language are in royal and chieftaincy
                  matters and references. This is understandable because those
                  institutions came from the Benin Kingdom.
                </p>

                <p className="para-text">
                  One thing that can be firmly stated is that by the fifteenth
                  century, the core of the Itsekiri nation had been established.
                  It was only to be affected by the factors of growth dynamics.
                </p>
              </div>
              <div className="paragraph">
                <h5 className="the-monarchy">The Monarchy</h5>

                <p className="para-text">
                  The monarchical era covered from 1480 to 1848 AD, about 360
                  years of an uninterrupted period when kings ruled the kingdom.
                  Sixteen (16 kings) Olus reigned in succession during this
                  period.
                </p>

                <p className="para-text">
                  As this era progressed, so did the Iwere Kingdom grow in the
                  development of our governance, world view, socio-cultural
                  values and practices and religion. The result was greatly
                  enhanced through our early contact with Europeans, some of
                  whom lived among us as Industrialists and international
                  businessmen. For instance, the place called JAMANI (our name
                  for Germany), which is very close to the mouth of the OLERO
                  River in Warri North Local Government Area, got that name from
                  being an Industrial Base of some German industrialists who had
                  settled there.
                </p>

                <p className="para-text">
                  This was when Christian missionaries came, most from Portugal
                  and lived among us at the request of the Olu of Iwere (as the
                  Olu of Warri was then known) who did so in a letter to the
                  Pope. This was also when we subsequently had the then Crown
                  Prince, who went at his father’s instance to Portugal for his
                  University education and as a guest of the Royal Court of
                  Portugal.
                </p>

                <p className="para-text">
                  He was the one who gave the commission for the Warri Monarch’s
                  Crown to be made with the Cross of Jesus Christ at its top to
                  signify that his kingdom (The Iwere Kingdom as it was then
                  known) was under the Lordship of Jesus Christ. His Majesty
                  Atuwatse, brought materials of the Order of Christ which have
                  since been part of the regalia of the Olu of Warri. These were
                  made and have been in use for over 350 years. The concept and
                  the mode of the regalia of the Chiefs of Warri Kingdom were
                  also derived from this source.
                </p>

                <p className="para-text">
                  There is a sense in which it could be rightly said that this
                  era was like the golden age for us as a people. This is
                  because we were on our own, under our king and followed our
                  system of governance. We related with others as equals,
                  whether they be Europeans or fellow Africans. We enslaved
                  others who had a good measure of life, making them proud to be
                  part of us. Our territory was intact. No people invaded us to
                  take our land, nor did we fight any expansionist war to take
                  other people’s land.
                </p>
              </div>
              <div className="paragraph">
                <h5 className="the-interregnum">The Interregnum</h5>

                <p className="para-text">
                  This is a period of eighty-eight (88) years which began in
                  1848 AD after the demise of Olu Akengbuwa. All attempts to
                  have a succeeding Olu failed, one after the other. We then had
                  Governors who were appointed. We had four of them in
                  succession, which began with Diare, an Omajaja. He was
                  succeeded by Tsaninomi (also spelt Chaninomi), an Otonolu, who
                  succeeded Olomu, another Omajaja. Finally, he was succeeded by
                  Nanna (real name is EREOMALA which was corrupted by Europeans
                  to Nanna), who was one of his sons.
                </p>

                <p className="para-text">
                  The Governors knew they were appointed to govern in trust for
                  the kingdom on behalf of the Olu and conducted themselves as
                  such. Among other duties, they collected customs and
                  additional revenues from foreigners who came on business and
                  handled all external affairs on behalf of the throne.
                  Moreover, they knew they would cease functioning as soon as an
                  Olu was crowned. Therefore, they were also accountable in that
                  regard.
                </p>
              </div>
              <div className="paragraph">
                <h5 className="colonial-incursion">Colonial Incursion</h5>

                <p className="para-text">
                  During the time of Nanna (Ereomala) as Governor, the war with
                  the British Colonialists broke out in 1894 A D. The battle was
                  fierce, and the British could not make any headway despite
                  their superior firepower. However, through the betrayal of
                  Nanna by someone who gave some vital intelligence information
                  to the British, they adjusted their tactics and were then
                  enabled to start gaining the upper hand against him. He was
                  quick to rightly read the decisive turn of the tide against
                  him and left through the creeks and some canals he had his men
                  dug so that he could divert his movement from some parts of
                  the existing waterways he wanted to avoid for strategic
                  reasons.
                </p>

                <p className="para-text">
                  He finally arrived in Lagos, where he first met his friend,
                  Akitoye, the then Oba of Lagos. After discussing with his
                  friend, he turned himself into the British in Lagos, which was
                  already a British Colony at the time.
                </p>
              </div>
              <div className="paragraph">
                <h5 className="our-fusion">Our Fusion with Others</h5>

                <p className="para-text">
                  Although that war ended the era of the Governors, the
                  interregnum continued. This time, however, Warri Kingdom was
                  fused into what became The Southern Protectorate under
                  colonial Britain. Chief Dure Numa (real name is Omadoghogbone
                  which the British corrupted to Dure) was appointed by the
                  British as a Paramount Chief who ruled under colonial Britain.{" "}
                </p>

                <p className="para-text">
                  On the demise of Dure Numa in 1932, the clamour for the return
                  to our Monarchy finally gained ground and brought the 88 years
                  of the interregnum to its end. By this time, Iwere had since
                  become Warri, and Itsekiri had become Jekri, as the British
                  preferred to call them. Warri was then the Headquarters of
                  Warri Province under the British Colonial Administration.
                </p>

                <p className="para-text">
                  Although the Monarchy returned in 1936 with the crowning of
                  his Majesty Ginuwa II, it was no longer the same. This was
                  because the Iwere Kingdom was now part of Warri Province over
                  which Chief Dure Numa exercised authority no longer on behalf
                  of the Olu of Iwereland as the four Itsekiri Governors were
                  and did, but now on behalf of the British colonial Crown.
                </p>
              </div>
              <div className="paragraph">
                <h5 className="nigeria">A Part of Nigeria</h5>

                <p className="para-text">
                  By the time we returned to the Monarchy in 1936 with the
                  crowning of His Majesty Ogiame Ginuwa II, Nigeria had existed
                  as an entity for twenty-two (22) years with the amalgamation
                  of the Northern and Southern Protectorates in 1914 which
                  brought this about.
                </p>

                <p className="para-text">
                  As we became part of Nigeria, we ceased to be entirely on our
                  own, just like the other component ethnic nationalities that
                  constitute the Nigerian nation-state. This is why the return
                  of the Monarchy did not amount to the system we had from the
                  beginning. Instead, our fortunes had become tied to that of
                  the others as well.
                </p>
              </div>
            </div>
          </div>
        </div>
        <MenuBtn hamburgerFunc={lowerNav}/>
      </section>
    </>
  );
};
