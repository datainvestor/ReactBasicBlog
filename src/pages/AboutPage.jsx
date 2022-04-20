import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

const aboutPage = {
  textAlign: "center",
  padding: "30px",
};

function AboutPage() {
  return (
    <DefaultLayout>
      <div style={aboutPage}>
        <h1>This is my absolutely fantastic "About Me" Page!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit,
          numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt
          aspernatur commodi?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit,
          numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt
          aspernatur commodi?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit,
          numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt
          aspernatur commodi?
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          officiis ab voluptatibus assumenda error quas deleniti eius? Suscipit,
          numquam? Quis aliquid non animi numquam amet voluptas dolorum sunt
          aspernatur commodi?
        </p>
      </div>
    </DefaultLayout>
  );
}

export default AboutPage;
