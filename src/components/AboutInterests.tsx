function RainierLandscape() {
  return (
    <svg viewBox="0 0 720 330" fill="none" aria-hidden="true">
      <path fill="#c9ed91" d="M0 0h720v330H0z" />
      <circle cx="562" cy="71" r="34" fill="#f1f4ed" />
      <path d="m0 223 91-45 68 20 114-91 81-62 67 59 89 96 83-22 127 54v98H0Z" fill="#58927b" />
      <path d="m214 154 59-47 81-62 67 59 58 64-61-24-26 8-29-38-25 24-23-9-20 29-29-7Z" fill="#f1f4ed" />
      <path d="m354 45-16 63-23 21m48-15 15 45 40-15" stroke="#92bca7" strokeWidth="2" />
      <path d="M0 264c97-68 156-39 238-4s175-67 266-37 153 25 216-3v110H0Z" fill="#2d6551" />
      <path d="M0 303c136-48 225 31 360 0s214-49 360-14v41H0Z" fill="#153e30" />
      <path d="M378 330c-64-26-62-40-11-54s71-31 35-46" stroke="#c9ed91" strokeWidth="7" />
      {[35,68,104,595,630,667].map((x,index) => <path key={x} d={`M${x} ${280-index%3*8}v-54m-15 35 15-26 15 26m-12-16 12-23 12 23`} stroke="#153e30" strokeWidth="3" />)}
    </svg>
  );
}

function CrochetStudy() {
  return (
    <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
      <path d="M26 156c36 28 53 40 86 19s50-11 53 8" stroke="#503784" strokeWidth="2" strokeLinecap="round" />
      <circle cx="140" cy="107" r="56" fill="#ded5f6" stroke="#503784" strokeWidth="2" />
      <g stroke="#503784" strokeWidth="2">
        <path d="M86 94c27 4 63 29 83 61M88 81c33 5 71 33 91 64M95 68c36 5 74 33 91 64M107 60c30 2 62 22 84 54M124 52c27 6 51 19 70 43" />
        <path d="M105 151c-1-32 21-64 64-94M119 159c-3-35 20-70 60-95M133 162c-2-29 18-62 53-86M148 162c1-25 19-52 44-72" />
      </g>
      <path d="m223 164 31-106c3-11 16-8 13 2l-2 7" stroke="#503784" strokeWidth="4" strokeLinecap="round" />
      <path d="m225 158 12-39" stroke="#503784" strokeWidth="10" strokeLinecap="round" />
      <g stroke="#503784" strokeWidth="2" strokeLinecap="round">
        {[0,1,2,3,4].map((i) => <path key={i} d={`M${178+i*17} 191q-8-14 0-21 8 7 0 21q8 6 17 0`} />)}
      </g>
    </svg>
  );
}

function CelestialStudy() {
  return (
    <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
      <ellipse cx="160" cy="110" rx="126" ry="63" transform="rotate(-26 160 110)" stroke="#e1d5fa" strokeOpacity=".3" strokeWidth=".8" />
      <circle cx="123" cy="108" r="33" fill="#ffb75b" />
      <circle cx="123" cy="108" r="42" stroke="#ffb75b" strokeOpacity=".35" strokeWidth=".8" />
      <g className="about-solar-rays" stroke="#ffb75b" strokeWidth=".8">
        {Array.from({length:16},(_,i) => <path key={i} d="M123 53v8" transform={`rotate(${i*22.5} 123 108)`} />)}
      </g>
      <path d="M227 63a35 35 0 1 0 25 59 33 33 0 0 1-25-59Z" fill="#e1d5fa" />
      <g fill="#e1d5fa">
        {[[38,48],[74,170],[267,34],[282,154],[194,189],[154,31],[28,133]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="1.3" />)}
      </g>
      <path d="M260 170v10m-5-5h10M56 85v8m-4-4h8" stroke="#e1d5fa" strokeWidth=".8" />
    </svg>
  );
}

function GuitarStudy() {
  return (
    <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
      <g transform="rotate(24 160 110)">
        <path d="M137 101c-26-7-43 18-26 35-26 27-11 66 24 66s50-39 24-66c17-17 0-42-22-35Z" fill="#77a6e1" stroke="#183e70" strokeWidth="1.2" />
        <path d="M134 104V37h9v67" fill="#183e70" />
        <path d="M130 18h17v25h-17Z" fill="#77a6e1" stroke="#183e70" strokeWidth="1.2" />
        <circle cx="137" cy="130" r="12" fill="#183e70" stroke="#e6f0ff" strokeWidth="3" />
        <path d="M124 167h26" stroke="#183e70" strokeWidth="5" />
        {[134,137,140].map(x => <path key={x} d={`M${x} 25v142`} stroke="#e6f0ff" strokeWidth=".6" />)}
        <path d="M126 24h-5m5 10h-5m30-10h5m-5 10h5" stroke="#183e70" strokeWidth="2" />
      </g>
      <g stroke="#183e70" strokeWidth="1" strokeLinecap="round">
        <path d="M242 66q15 17 0 34M251 58q23 25 0 50M78 69q-13 14 0 28" />
      </g>
    </svg>
  );
}

export default function AboutInterests() {
  return (
    <section className="about-interests" aria-labelledby="about-interests-title">
      <div className="detail-section-title"><h2 id="about-interests-title">Things I make time for.</h2><p>Mountains, music, making things, and looking up.</p></div>
      <div className="interest-collection">
      <article className="interest-landscape">
        <div className="interest-art"><RainierLandscape /></div>
        <div className="interest-copy"><h3>Mount Rainier & hiking</h3><p>I love Mount Rainier, hiking, and spending time outside. There’s something about a mountain view that makes me want to keep exploring.</p></div>
      </article>
      <div className="interest-studies">
        <article className="interest-crochet"><div className="interest-art"><CrochetStudy /></div><div className="interest-copy"><h3>Crochet</h3><p>Crochet is how I slow down. I love making something with my hands, one small stitch after another.</p></div></article>
        <article className="interest-cosmos"><div className="interest-art"><CelestialStudy /></div><div className="interest-copy"><h3>Sun, moon & space</h3><p>I love the sun and the moon, and the endless curiosity of space. There’s always something more to wonder about.</p></div></article>
        <article className="interest-music"><div className="interest-art"><GuitarStudy /></div><div className="interest-copy"><h3>Mariachi & guitar</h3><p>I grew up around mariachi music and still love it. Playing guitar gives me a different kind of practice away from the keyboard.</p></div></article>
      </div>
      </div>
      <p className="interest-footnote">And in between: good coffee, time with my three dogs, and plans for the next trip.</p>
    </section>
  );
}
