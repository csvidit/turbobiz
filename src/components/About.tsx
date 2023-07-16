import e from "express";
import Subtitle from "./Subtitle";
import Title from "./Title";

const About = () => {
  return (
    <div className="flex flex-col space-y-8">
      <Title>
        Turbobiz is a full-stack Next.js web application made by Vidit
        Khandelwal. It utilizes the power of cutting-edge generative artificial
        intelligence to accelerate your entrepreneurial spririt.
      </Title>
      <div className="flex flex-col space-y-4"></div>
      <Title>terms of use</Title>
      <div className="flex flex-col space-y-4">
        <p>
          Turbobiz (the &quot;project&quot;, &quot;product&quot;,
          &quot;service&quot;) is made as a hobby project, free for public use.
          It is not meant for production or heavy usage, and does not claim to
          be suitable for such applications.
        </p>
        <p>
          The results provided by Turbobiz are parsed by custom code, and are
          based on the results given by OpenAI&apos; Generative Pretrained
          Tranformer (GPT) 3.5 Turbo Large Language Model (LLM). Any resemblance
          to real life existing businesses, products, ideas, or entities is
          purely coincidental, unintentional, and an occassional occurence due
          to the very nature of generative artificial intelligence. Neither
          Turbobiz nor Vidit Khandelwal take any responsibility for such
          results. Turbobiz or Vidit Khandelwal will not act as an intermediary
          between the product and OpenAI should any end user have any complaints
          with the results produced by the product.
        </p>
        <p>
          All results and services are provided as-is without any warranty or
          support of any kind. There is no guarantee that user data or search
          history will be available at all times or stored perpetually. The
          product can be taken offline at any time without any explanation or
          cause. The product&apos;s features can be modified, removed, added, or
          made unavailable without prior notice for any amount of time.
        </p>
        <div className="flex flex-col space-y-2">
          <p className="flex">
            The only sign in method available in this product is Sign in with
            Google (Google OAuth). This does not give the product or Vidit
            Khandelwal acccess to any personal data of the user, other than
            information required for normal satisfactory functioning of all the
            currently available features of the product. Irrespective of the
            data provided to the product as a result of Google sign-in, these
            are the account identifiers used by the product:
          </p>
          <ul className="">
            <li>
              Display Name as on the Google Account: Used for personalization of
              the product&apos;s user interface (UI).
            </li>
            <li>UID:</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
