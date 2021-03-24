import React from "react";
import "./TipsAndTricks.css";

const TipsAndTricks = () => {
  return (
    <div>
      <h2 className="title">
        Practical tips on writing in German to better learn the language
      </h2>

      <div className="writting-tips">
        <div>
          <img
            className="img-tips"
            src="tips-and-tricks.png"
            alt="tipsAndTricks"
          ></img>
        </div>
        <div className="introparag">
          <p>
            It’s common for beginner students to be intimidated when learning
            how to write in German. From complex grammar to unfamiliar
            punctuation, there’s a wide variety of rules you must keep in mind.
            Nonetheless, it’s important that you master German writing skills if
            you wish to be successful in the long run.
          </p>
          <p>Here are some tips:</p>
          <p>1. Capitalization</p>
          <p>
            In the German language, all nouns are capitalized no matter where
            they appear in a sentence. For example, in the sentence, “Die Katze
            geht durch die Tür” (the cat walks through the door), the nouns cat
            and door are both capitalized. What’s more, adjectives describing
            nationality, ethnicity, and religion are not capitalized, whereas in
            English they are.
          </p>
          <p>2. Punctuation</p>
          <p>
            Luckily, most punctuation marks are used the same in German as they
            are in English with the exception of a few. In the English language,
            for example, the typical format for introducing a quote is (“___”).
            In German, however, chevron-style marks (also used in French) and
            colons are used to introduce a quote.
          </p>
          <p>3. Sentence Structure</p>
          <p>
            When writing in English, the subject is placed first in a main
            clause. For example, in the sentence, “The dog catches the ball,”
            the subject (dog) is placed before the verb (catches) and the object
            (ball). In German, however, you can either put the subject or the
            object first. This is because you can oftentimes tell if a noun or
            pronoun is being used as the subject or object in a sentence. Let’s
            say, for instance, you want to write the same sentence above in
            German. You can either do it with the subject or the object first.{" "}
          </p>
          <p>
            These are just a few tips and tricks to remember when writing
            German. It’s important to keep in mind that there are a lot of rules
            you must absorb.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipsAndTricks;
