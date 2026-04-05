"use client";

import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [noScale, setNoScale] = useState(1);
  const [glitchStyle, setGlitchStyle] = useState({});

  const shrinkNo = () => {
    let count = 0;
    const interval = setInterval(() => {
      const randomX = Math.random() * 40 - 20;
      const randomY = Math.random() * 40 - 20;
      const skewX = Math.random() * 10 - 5;
      
      setGlitchStyle({
        transform: `translate(${randomX}px, ${randomY}px) skewX(${skewX}deg)`,
        filter: `brightness(100) drop-shadow(0 0 20px white) blur(10px)`,
      });
      
      count++;
      if (count > 6) {
        clearInterval(interval);
        setGlitchStyle({});
      }
    }, 25);

    setNoScale((prev) => Math.max(0, prev - 0.25));
  };

  if (answer) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center gradient-bg relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ mixBlendMode: "screen", opacity: 0.5 }}
        >
          <source src="/petals.mp4" type="video/mp4" />
        </video>
        <img
          src="/eminem.png"
          alt="Eminem throwing flowers"
          className="w-96 md:w-[32rem] rounded-2xl mb-10 relative z-10"
        />
        <h3 className="text-2xl md:text-4xl font-bold text-[#d63384] pixel-font relative z-10">
        thank youuuu, tell me on ig when your free to go out.
        </h3>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center gradient-bg relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ mixBlendMode: "screen", opacity: 0.5 }}
      >
        <source src="/petals.mp4" type="video/mp4" />
      </video>
      <div style={glitchStyle} className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-[#d63384] mb-6 pixel-font">
          Maria, i want you to know that i still like you, and also that i need to apologize for the way i mistreated you in the past. I know i gave off mixed signals when i would message you one way but act different in person. I didnt mean to do that on purpose, its just im an overthinker and get kind of nervous when im around you, when that happens i end up doing and saying nothing around you. To you, It mustve felt that i was ignoring  you or that i didnt care about you. But i really do care. please forgive me.
Maria do you remember when we first met?  i asked you out that same day but you weren’t looking to date anyone at that time but You said you would pray for me and i said i would pray for you too...well I’ve been praying for you since November when i saw you for the second time at the thanksgiving youth event, you probably dont remember this but at one point we looked at each other, locked eyes and it was only for a few seconds but it felt like time stopped. Well The same thing happened last sunday when i was supposed to talk to you but again i looked at you, got lost in your eyes and my brain shut down😂.….... I know that i messed things up with you and wont visit your church anymore, at least until i lose feelings for you.
Even though you dont want to talk with me, using work excuse😂, It was nice to look at you and appreciate God’s work before i go. Its going to take time to lose feelings for you but we’ll see eachother again when enough time has passed. You've made a massive impact in my life and hope that God blesses you with the desires of your heart. goodbye maria and sorry for being so awkward around you. i still dont know how to say "ride" in spanish btw🥀.
        </h1>
        <p className="text-[#e891b0] mb-10 pixel-font text-xl">be honest</p>
        <div className="flex gap-6 items-center justify-center">
          <button
            onClick={() => setAnswer("yes")}
            className="neu-button font-bold text-2xl pixel-font"
          >
            Yes
          </button>
          {noScale > 0 && (
            <button
              onClick={shrinkNo}
              className="neu-button font-bold text-2xl pixel-font transition-all duration-300"
              style={{
                transform: `scale(${noScale})`,
                opacity: noScale,
              }}
            >
              No
            </button>
          )}
        </div>
        {noScale === 0 && (
          <p className="mt-6 text-[#d63384] pixel-font animate-pulse text-xl">
            mariaaa pls just say yes
          </p>
        )}
      </div>
    </main>
  );
}
