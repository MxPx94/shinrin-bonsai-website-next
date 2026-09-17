import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <main>
    <section className="container hero" id="start">
      <div>
        <span className="eyebrow">Handgezogen, Baum für Baum</span>
        <h1>Geduld, die wächst.<br /><em>Bonsai mit Herz gezogen.</em></h1>
        <p className="lede">Jeder Baum hier hat Jahre der Pflege hinter sich — und noch viele vor sich. Von der Auswahl bis zur Pflege: persönliche Beratung mit echter Sorgfalt.</p>
        <div className="actions"><Link className="btn btn-primary" href="#produkte">Bäume entdecken →</Link><Link className="btn btn-ghost" href="/geschichte">Geschichte</Link></div>
        <div className="grid-3" style={{ marginTop: 40 }}><div><strong>12+</strong><br /><small>Jahre Erfahrung</small></div><div><strong>100%</strong><br /><small>Persönliche Beratung</small></div><div><strong>DE</strong><br /><small>Aufzucht & Versand</small></div></div>
      </div>
      <div className="hero-image"><Image src="/assets/images/hero-baum.jpg" alt="Bonsai-Baum mit freiliegenden Wurzeln in einer flachen Schale, warmes natürliches Licht" width={800} height={1000} priority /></div>
    </section>

    <section className="section paper" id="kurzvorstellung"><div className="container split"><div className="portrait"><Image src="/assets/images/atelier-detail.jpg" alt="Minimalistisch fotografierter Bonsai in ruhigem, warmem Licht" width={800} height={960} /></div><div><span className="eyebrow">Wer dahintersteckt</span><p className="quote">„Die Ruhe, die in der Arbeit mit Bonsai liegt, lässt einen nicht mehr los — Jahr für Jahr aufs Neue.“</p><p>Jeder Baum, den Sie hier finden, ist über Jahre von Hand gezogen, geschnitten und begleitet — mit Geduld statt Eile und mit echtem Respekt vor dem, was wächst. Diese Seite steht für Qualität, die man spürt, und für Beratung, die ehrlich ist, nicht verkäuferisch.</p><Link href="/geschichte" className="btn btn-ghost">Die Geschichte dahinter lesen →</Link></div></div></section>

    <section className="section" id="produkte"><div className="container"><div><span className="eyebrow">Das Angebot</span><h2>Bäume, Schalen und das richtige Werkzeug</h2><p>Eine kleine, sorgfältig zusammengestellte Auswahl — alles, was Sie für den Anfang oder zum Weiterpflegen brauchen.</p><Link href="/produkte" className="btn btn-ghost">Alle Produkte ansehen →</Link></div><div className="grid-4" style={{ marginTop: 32 }}>{[["Japanische Schwarzkiefer","Kräftiger Wuchs, ca. 9 Jahre alt — ideal für Einsteiger:innen mit Geduld.","129 €","/assets/images/produkte/schwarzkiefer.jpg"],["Chinesisches Ulmenbäumchen","Feine Blattstruktur, sehr pflegeleicht — auch für die Wohnung geeignet.","79 €","/assets/images/produkte/ulme.jpg"],["Handgetöpferte Schale, Erdton","Unglasierte Keramik, in kleiner Werkstatt gefertigt — Unikat-Charakter.","38 €","/assets/images/produkte/schale-erdton.jpg"],["Schneide-Set, 3-teilig","Rostfreier Stahl, präzise für Triebe, Wurzeln und feine Verzweigungen.","54 €","/assets/images/produkte/schneideset.jpg"]].map(([name,desc,price,img])=><article className="card" key={name}><div className="card-media"><Image src={img} alt={name} width={700} height={875} /></div><div className="card-body"><h3>{name}</h3><p>{desc}</p><p className="price">{price}</p></div></article>)}</div></div></section>

    <section className="section paper" id="vertrauen"><div className="container"><span className="eyebrow">Warum hier kaufen</span><h2>Was jeden Baum begleitet</h2><div className="grid-3"><div><h3>Qualitätsversprechen</h3><p>Jeder Baum wird vor dem Versand sorgfältig geprüft — auf Wuchsform, Gesundheit und Vitalität.</p></div><div><h3>Pflegehinweise inklusive</h3><p>Jede Bestellung kommt mit klaren, verständlichen Hinweisen zu Gießen, Schnitt und Standort.</p></div><div><h3>Persönliche Beratung</h3><p>Fragen vor oder nach dem Kauf werden direkt und ohne Umwege beantwortet — kein Callcenter.</p></div></div></div></section>

    <section className="section"><div className="container"><span className="eyebrow">Einblick</span><h2>Aus dem Garten und der Werkstatt</h2><p>Handwerk braucht Zeit und einen Ort, an dem sie vergehen darf — ein kleiner Einblick in den Entstehungsprozess.</p><div className="atmosphere"><Image src="/assets/images/werkstatt-startseite-1.jpg" alt="Bonsai-Baum in ruhigem Licht vor einem Fenster" width={800} height={1000} /><Image src="/assets/images/werkstatt-startseite-2.jpg" alt="Nahaufnahme eines gepflegten Bonsai-Bäumchens" width={600} height={800} /><div className="dark-panel" style={{ padding: 24, display: "grid", placeItems: "center" }}><span className="quote" style={{ fontSize: "1.1rem", color: "var(--bg)" }}>„Geduld ist kein Warten — sie ist tägliche, aufmerksame Pflege.“</span></div></div></div></section>

    <section className="section"><div className="container dark-panel"><h2>Fragen zu einem Baum, zur Pflege — oder einfach nur Hallo sagen?</h2><p>Eine kurze Nachricht genügt. Antworten kommen persönlich und meist innerhalb weniger Tage.</p><Link href="/kontakt" className="btn" style={{ background: "var(--terra)" }}>Nachricht schreiben →</Link></div></section>
  </main>;
}
