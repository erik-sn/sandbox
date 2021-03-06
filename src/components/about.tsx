import { WSAETOOMANYREFS } from 'constants';
import * as React from 'react';
import { childOfKind, isCombinedModifierFlagSet } from 'tslint/lib';

const python = <a href="https://www.python.org/">Python</a>;
const react = <a href="https://facebook.github.io/react/">React</a>;
const typescript = <a href="https://www.typescriptlang.org/">TypeScript</a>;
const django = <a href="https://www.djangoproject.com/">Django</a>;
const drf = <a href="http://www.django-rest-framework.org/">Django REST framework</a>;

const About = (): JSX.Element => (
  <section className="about__container">
    <div className="about__profile-picture">
      <img src="https://res.cloudinary.com/dvr87tqip/image/upload/v1461600642/me_coz7xt.png" />
    </div>
    <p>
    My name is Erik Niehaus, I am a chemical/process engineer working in manufacturing.
      My goal for this website is a place to learn, test and share the
    things I am working on.</p>
    <p>
      As a developer I primarily work in {python} and JavaScript.
      In the JavaScript world I mostly work in {react} and {typescript}. In
      python I make heavy use of {django} and {drf} as well as data analysis
      packages like numpy, scipy and scikit-learn. My development
      work revolves around creating rich user interfaces and data analysis in a
      manufacturing environment, so the tools I use reflect that.
    </p>
    <p>
      My other interests that I spend a lot of time on are cooking and archery. I am always looking to combine any
      of my hobbies together so if you have any ideas let me know!
    </p>
  </section>
);

export default About;
