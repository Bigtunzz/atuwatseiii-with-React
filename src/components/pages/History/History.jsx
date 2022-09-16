import React from "react";
// import { Link } from "react-router-dom";
// import { Arrow } from "../../a
import slideImg from "../../../assets/abejeoye.jpg";
import { Arrow, BtnSliderNext, BtnSliderPrev } from "../../atoms";
import "./style.css";

export const History = () => {
  return (
    <>
      {/* <div className="history d-flex ai-center col-12">
        <div className="section1 d-flex column ai-center  height">
          <Arrow />
          <Slider />
        </div>
        <div className="section2  height">

          <div className="history-text">History</div>
          <div className='text-height'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis magnam architecto numquam consectetur totam quam magni qui facilis? Quo magni natus eius eligendi nisi nobis labore sit non distinctio qui autem recusandae quod hic culpa consequuntur, tenetur quam eaque sint similique exercitationem temporibus, libero quas voluptatem provident. Laborum, debitis! Vitae esse aliquid iusto illo tenetur quia consectetur dignissimos aut in accusantium. Corporis dolores molestiae, a sequi fuga saepe possimus, at amet deleniti quidem sint fugit eos quae nemo hic accusamus, eaque quaerat. Doloremque, eaque animi ea exercitationem qui tempora corporis ipsa velit assumenda, rerum numquam. Necessitatibus reiciendis sequi commodi sunt, repellendus expedita. Commodi quaerat pariatur ipsam, vel soluta voluptatum sint natus libero? Iusto est in eos minima omnis suscipit voluptatem quisquam harum odio voluptatum adipisci autem neque blanditiis sed vitae unde, excepturi aliquid? Sed temporibus pariatur excepturi, ipsum asperiores sunt perspiciatis deserunt non nisi a cum maiores modi harum quo eveniet totam hic inventore. Consectetur minus voluptatum voluptatem facilis ratione consequuntur pariatur dolorem, ex, culpa quos incidunt eius ab eaque est porro ullam quas commodi earum dignissimos corrupti asperiores deserunt minima. Ratione repellat at amet provident, animi perferendis reiciendis reprehenderit quis ut blanditiis aut illum dolores velit maxime quas ipsa ipsum excepturi. Rem ipsum voluptatem numquam! Quis totam eaque perspiciatis ad veritatis cupiditate molestias numquam pariatur velit sequi hic, vel exercitationem, obcaecati eveniet culpa neque ducimus officiis, eius suscipit beatae commodi mollitia voluptate similique eum. Asperiores voluptatum accusantium culpa repudiandae dolor perferendis doloremque facere beatae vel ipsa esse ex, porro sunt officia, maiores excepturi eligendi quasi similique, vitae quibusdam optio! Laudantium modi quae fugiat doloremque iure optio qui expedita, impedit voluptatibus. Odit nam itaque eveniet quia totam error quam voluptates, animi, rem consectetur nulla harum incidunt quod ipsum dignissimos! Ipsum quis voluptatem nostrum dolorem illum voluptas eaque non ab mollitia, modi culpa possimus perferendis enim voluptatibus dolorum eius distinctio quo provident porro dolores? Quibusdam quam libero quae, earum, tempora deleniti qui quas facere ea voluptatum non placeat enim. Excepturi consequuntur necessitatibus placeat eos, cupiditate eum temporibus numquam adipisci cumque voluptatum vitae nam, quod dignissimos nesciunt illum, exercitationem perspiciatis commodi sunt! Consequatur exercitationem repellat optio commodi in quaerat culpa quisquam voluptatem, hic libero magnam molestiae sapiente autem voluptate mollitia ea placeat? Repudiandae nobis tempora ex earum assumenda eius obcaecati veniam perferendis optio, consequatur in possimus! Corrupti ratione tempore aliquid libero nemo praesentium fuga aliquam et, aut exercitationem aspernatur nobis quis? Soluta est cum laborum aut nemo accusamus? Autem, eligendi. Natus distinctio aspernatur numquam dicta culpa a dolorum excepturi odit provident nisi necessitatibus pariatur, quaerat magnam saepe illum atque cumque ex. Quam similique vitae blanditiis commodi totam nobis beatae ex, corrupti maiores incidunt quo explicabo deserunt rerum tenetur perferendis laborum quos corporis perspiciatis quas soluta, officiis veritatis inventore. Neque laudantium porro maiores illum tempore amet, incidunt impedit. Iste, quidem provident? Temporibus natus voluptate saepe quo veritatis laborum eveniet, dolorem cum cupiditate quae iure ut reiciendis possimus atque, harum et eum accusantium exercitationem similique in dolorum consequatur inventore? Earum commodi eveniet animi debitis ea aliquid ducimus doloremque enim perferendis soluta deserunt, tempora cum placeat optio aut velit in voluptates. Animi nostrum reprehenderit iste eum soluta. Saepe pariatur fugiat nulla. Esse cumque voluptates ullam architecto quod, modi maiores, itaque est corrupti facere consequuntur dignissimos nam? Amet, odit. Repellat, omnis necessitatibus libero placeat ipsum quibusdam exercitationem similique explicabo velit ipsam, delectus maxime? Deserunt commodi vitae, architecto animi, ut assumenda culpa, est atque voluptatibus dolore consequuntur itaque. Veritatis earum exercitationem inventore. Quod vel commodi optio cumque illo neque id perferendis iure dolore quos sapiente numquam totam, est magni inventore, dignissimos laboriosam cum labore blanditiis porro facere atque eaque ab! Rerum vitae, unde dolores recusandae eos cum excepturi quidem assumenda aspernatur possimus quasi facere nesciunt voluptatibus quibusdam consequatur porro omnis? Esse veniam vel iure dolore reprehenderit. Laudantium atque exercitationem sunt eveniet quisquam? At delectus velit, expedita non asperiores assumenda sunt amet quas ab perferendis praesentium placeat vitae quis necessitatibus pariatur quae dolorum repellat harum omnis. Maiores, placeat quos? Dolore dolores vitae modi ex! Atque sit placeat aliquam incidunt mollitia quae quaerat molestiae asperiores exercitationem ex facilis in sint cum voluptates, consectetur dolorem, dolores expedita nemo? Nulla corporis eveniet quibusdam. Rem maxime est accusamus nihil harum commodi consequatur?
          </div>
        </div>
      </div> */}
      <section className="history-container">
        <div className="historySlider">
          {/* <div className="backArrow">
            <a href="../index.html">
              <div className="arrow">⟵</div>
            </a>
          </div> */}
          <Arrow/>
          <div className="carousel">
            <div className="slide fade">
              <img src={slideImg} alt="" className="carouselImg" />
            </div>

            <BtnSliderPrev/>
            <BtnSliderNext/>
          </div>
        </div>
        <div className="container">
          <div className="history_container">
            <h2 className="history_text">History</h2>
          </div>
          <div className="scroll_container">
            <div className="history_content">
              <div className="paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
                mollitia voluptates iusto consectetur quod quos voluptate. Neque
                officia hic, quos quas consequatur dicta officiis dolores eius
                ullam quisquam nisi odio! Numquam aliquid voluptatibus possimus
                ducimus cumque nihil eum eveniet, accusamus, veritatis
                recusandae soluta esse voluptas dicta! Nam perferendis veniam
                temporibus incidunt perspiciatis repellat amet atque quia. Unde
                maiores commodi accusantium nesciunt optio mollitia tempore
                illum, at quos ipsa libero nulla facere! Amet beatae inventore
                iste pariatur impedit. Assumenda omnis fugiat aut natus. Quia
                voluptate esse nemo ipsa, earum corrupti magnam, deserunt
                provident hic quisquam velit dignissimos veritatis sapiente
                voluptatem cupiditate accusantium sit unde ullam eaque cumque.
                Quasi voluptatibus, laudantium eum ut ipsam odio excepturi iure
                tempore obcaecati. Nam fugiat dicta sint neque maiores laborum
                aspernatur, quo, iusto, fugit officia facere distinctio dolore
                sapiente eligendi nobis ullam voluptate vero minima voluptatum
                accusamus temporibus id provident. Deserunt magnam vel corporis
                necessitatibus alias omnis perspiciatis nam repellendus, commodi
                quod veniam, incidunt debitis quas odit esse tenetur repellat
                nobis expedita! Deserunt error ullam dignissimos quaerat dolorem
                ad atque ducimus temporibus accusantium quibusdam. Dolores
                numquam nam natus dignissimos cum corporis tenetur a eius ut
                necessitatibus in fugit, quos voluptate maxime saepe veniam est
                accusamus ducimus praesentium magnam nulla cupiditate nihil
                autem. Animi non, quibusdam quis natus veritatis, suscipit, iure
                qui nobis reiciendis ullam accusantium unde a assumenda
                corporis? Non harum iure nemo dolorem maxime neque nostrum earum
                eum praesentium cum doloribus est ipsa ut corrupti asperiores
                eveniet porro dignissimos fugit similique dicta, recusandae nam
                aspernatur? Rem omnis at obcaecati dolorum dolores, quo nihil
                deleniti impedit officiis porro, dolorem quos? Officiis
                molestias earum quibusdam, dicta nihil dignissimos et aspernatur
                incidunt architecto, consectetur id odit optio quos quod ut,
                tempora fugit ratione! Atque asperiores perferendis quo enim
                perspiciatis illo voluptas qui libero deserunt molestiae sint
                itaque minima, cupiditate esse dolores laboriosam culpa aliquam
                animi amet omnis ratione! Facilis officia, alias sed quae
                nesciunt consequatur eius voluptas illum praesentium animi
                cumque ullam numquam aut quia facere repudiandae similique fugit
                quos nemo dolorum laboriosam quasi dignissimos esse cum! A neque
                corrupti molestias ad repellendus, nemo porro dolor ducimus?
                Minima ducimus odio et qui doloribus distinctio at suscipit
                nostrum iure quaerat recusandae consequuntur, delectus
                necessitatibus sunt accusamus asperiores nam accusantium minus
                quos aliquid molestias? Dolores nesciunt obcaecati delectus esse
                iusto soluta officiis, ut dignissimos aut, laborum odio eum,
                expedita quas ullam culpa pariatur atque! Laborum mollitia hic
                velit exercitationem minima et sequi, voluptatem aliquam ipsa,
                ex delectus rem soluta tempora cum possimus nobis! Ratione
                nostrum in minima dolorem accusantium laboriosam debitis
                delectus, ad mollitia sunt soluta ex qui, minus, sapiente
                doloremque officia ut. Cum quibusdam molestiae et neque deleniti
                exercitationem ipsam quasi sint qui ipsum consequuntur
                voluptatibus unde odit provident quisquam libero, illum aperiam
                accusantium recusandae non autem alias eum hic quis! Numquam at
                modi nisi, sunt qui, omnis, veritatis placeat odit quaerat
                cupiditate eum nesciunt totam porro vel? Doloremque dolores
                maiores recusandae vel molestiae consectetur iure, enim
                consequuntur suscipit est aperiam minus iusto aliquam sequi non
                ex, sint corporis obcaecati! Cum quia numquam sed. Tempora
                voluptate et, perferendis porro atque consectetur a ea quos
                adipisci, fugiat quia repudiandae libero vero ut? Consectetur
                earum quam cumque adipisci labore in alias nam obcaecati facere
                deserunt culpa autem rerum saepe, placeat suscipit repellat
                natus sunt iure error illo! Enim magnam fugit, nemo doloremque
                consequatur quae velit reprehenderit reiciendis perferendis sit
                assumenda, aspernatur non! Aut explicabo, nisi qui distinctio
                voluptates aperiam veritatis beatae totam perspiciatis numquam
                repellat facilis laboriosam cupiditate accusantium, amet odio
                voluptatibus, iusto debitis! Blanditiis consequatur ipsa
                doloribus fuga nihil magnam sed similique molestiae maxime
                mollitia distinctio eaque veniam, voluptatibus ut, sapiente
                recusandae ratione aliquam beatae unde rerum libero laboriosam.
                Qui voluptate inventore illo numquam veniam sapiente, fuga quas
                assumenda nemo possimus corporis veritatis vel tempore
                consequuntur magnam magni minima corrupti id quos ab? Quibusdam
                officia nobis labore neque doloremque accusamus, sapiente
                numquam vitae harum sit nihil enim molestias possimus
                praesentium ab assumenda quos at optio nam vel iste magni
                consequatur. Sit repudiandae ipsum molestias numquam vero,
                cumque illum dicta officia libero enim suscipit vel quia
                aspernatur aperiam maiores, tempora quo veritatis minima fugit
                temporibus, nihil accusantium illo labore praesentium!
                Dignissimos ratione facilis consequuntur nemo, repellendus quam
                rem praesentium deleniti eveniet?
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
