import React from "react";
import "./about.css";
import BackButton from "./BackButton";
import Button from "@material-ui/core/Button/";

export const About = props => (
  <div className="aboutWrapperStyle">
    <div
      className="leftPane"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.863)" }}
    >
      <div className="text">
        <div className="animate">
          <h1 style={{ color: "white", fontSize:"3rem", paddingLeft:"30px"}}>Michel</h1>
        </div>
      </div>
      <div className="text">
        <div className="animate">
          <h1 style={{ color: "white", fontSize:"3rem", paddingLeft:"30px"}}>Ferrer</h1>
        </div>
      </div>
      <Button onClick={() => props.history.push("/Portfolio")}>
        <BackButton  style={{onHover:"text-shadow: 2px 6px 8px rgba(255, 0, 0, 0.438)"}}/>
      </Button>
    </div>
    <div className="rightPane">
      <div className="sprawlContainer">
        <div className="headerText">
          <h1 style={{ color: "red", padding: "80px" }}> hi im the header </h1>
        </div>
        <div className="bodyText">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            cum quos quibusdam praesentium libero pariatur velit, modi est
            suscipit aperiam ex adipisci aut, rerum placeat architecto impedit
            animi iusto maxime. Provident, inventore. Deleniti excepturi
            inventore ullam, ipsam eum itaque, omnis esse vero incidunt ipsum
            obcaecati. Eos nostrum odio culpa impedit ea sequi porro, placeat
            exercitationem atque corrupti doloremque assumenda numquam
            accusantium veniam. Dolor cupiditate nisi perferendis in similique
            asperiores exercitationem, quaerat adipisci minus iste quam? Odit
            aliquid aperiam et iste illum atque, nobis esse eius in soluta
            veniam molestiae, delectus nostrum ab ad! Vitae consequuntur,
            tempore cum praesentium autem et fuga culpa, hic tempora quo
            asperiores voluptatum reprehenderit?
          </h2>
          <h2>
            Eveniet officiis, non magnam unde saepe iste voluptatibus odio. Esse
            numquam neque architecto dolores natus dolorum asperiores voluptate
            quisquam ipsam temporibus voluptatem quibusdam eos illum accusamus
            ipsum, itaque ut est error at ad harum odio non aspernatur?
            Quibusdam nulla neque odit quos. Aliquam dolor ea laboriosam nulla?
            Sint at mollitia voluptas sapiente minima eius eum provident unde
            cum nesciunt harum, ipsum architecto inventore consectetur.
          </h2>
          <h2>
            {" "}
            Est quisquam ad nihil suscipit, id velit vel, blanditiis
            exercitationem, illo ea alias nostrum natus atque quaerat laborum
            veritatis nesciunt qui sapiente quia quis deleniti nisi voluptas
            aliquam magni. Distinctio quidem et voluptatum quae quo voluptatibus
            eius, sequi aut in laudantium tempore sit error reprehenderit esse
            at suscipit quibusdam ipsum, cum expedita nam? Impedit eveniet
            laudantium eum laborum atque quidem cum itaque cumque repellendus
            tempora. Sit, quo, maxime odit totam ea aperiam deleniti, temporibus
            nesciunt enim veritatis maiores quisquam commodi molestias deserunt.
            Tenetur consequuntur quas necessitatibus voluptatem excepturi
            dolorem maxime sequi sit fugiat. Nemo ratione qui eveniet officiis,
            fugiat quos corrupti dolorum ipsam dicta, vero reiciendis
            dignissimos suscipit voluptatibus nesciunt!
          </h2>
          <h2>
            {" "}
            Sit nesciunt porro repudiandae voluptate exercitationem error
            excepturi dolorum, cum iste itaque nemo, non esse illum?
            Perspiciatis odio, laborum in eaque possimus minima enim reiciendis
            earum obcaecati, facere quod sunt maxime aliquid facilis nostrum
            harum doloremque ratione mollitia esse sit a omnis fuga culpa
            veniam! Recusandae quibusdam eos deleniti odio distinctio vel nulla
            assumenda quod, officiis hic, ipsa quaerat cumque odit, repellat
            itaque fugit aperiam obcaecati consequuntur iste. Aliquam omnis
            incidunt dolorem. Nulla placeat illum qui, in et doloremque pariatur
            id tempore sunt incidunt voluptatem quia deserunt iure?{" "}
          </h2>
          <h2>
            Tempora illo quibusdam necessitatibus accusantium culpa numquam eum
            mollitia ea exercitationem et dolorem nisi quis voluptas totam quos
            dicta, odio eveniet dolore neque repudiandae sequi voluptate.
            Inventore labore consequuntur aut repellat eius! Maiores aliquid aut
            error magni! Et, omnis. Et delectus ea velit quasi? Cum earum
            delectus voluptates explicabo dicta et neque tenetur veniam
            recusandae amet, harum nam quis sit cupiditate illum ex voluptas
            quia rem aspernatur reiciendis. Maiores, tempore dignissimos?
            Tempore eius quae, a provident cupiditate facere ducimus incidunt
            et, ut omnis facilis culpa. Totam deleniti placeat quia laudantium
            praesentium quas minus vel, atque, architecto optio facilis
            doloribus inventore dicta, porro aliquam eos non assumenda soluta
            ducimus tempora? Vero nam veniam amet sequi vitae facere nulla quis
            similique repudiandae? Quos molestias quibusdam hic iure, iusto
            deleniti officia velit exercitationem.
          </h2>
        </div>
      </div>
    </div>
  </div>
);
