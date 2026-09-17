"use client";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "./site-shell";

type Product = { category: string; name: string; desc: string; price: number; image: string };
const products: Product[] = [
  { category: "Bonsai-Baum", name: "Japanische Schwarzkiefer", desc: "Kräftiger, charakterstarker Wuchs — ein klassischer Einstiegsbaum für alle, die Geduld mitbringen.", price: 129, image: "/assets/images/produkte/schwarzkiefer.jpg" },
  { category: "Bonsai-Baum", name: "Chinesisches Ulmenbäumchen", desc: "Feine Blattstruktur, sehr pflegeleicht — eignet sich auch gut für die Wohnung.", price: 79, image: "/assets/images/produkte/ulme.jpg" },
  { category: "Bonsai-Baum", name: "Bonsai am Fenster, Ulme", desc: "Ruhiger, ausgewogener Wuchs — fotografiert im natürlichen Licht der Werkstatt.", price: 95, image: "/assets/images/produkte/fenster-ulme.jpg" },
  { category: "Schale", name: "Handgetöpferte Schale, Erdton", desc: "Unglasierte Keramik, in kleiner Werkstatt gefertigt — jedes Stück ein Unikat.", price: 38, image: "/assets/images/produkte/schale-erdton.jpg" },
  { category: "Schale", name: "Flache Schale, Moosgrün glasiert", desc: "Dezente Glasur in Moosgrün, passend zu kräftigeren Baumformen mit breiter Krone.", price: 44, image: "/assets/images/produkte/schale-moosgruen.jpg" },
  { category: "Werkzeug", name: "Schneide-Set, 3-teilig", desc: "Rostfreier Stahl, präzise für Triebe, Wurzeln und feine Verzweigungen.", price: 54, image: "/assets/images/produkte/schneideset.jpg" },
];
const formatPrice = (price: number) => `${price.toLocaleString("de-DE")} €`;

export function Products() {
  const [filter, setFilter] = useState("Alle");
  const { items, count, subtotal, add } = useCart();
  const shown = filter === "Alle" ? products : products.filter(product => product.category === filter);
  return <>
    <div className="filter-bar">{["Alle", "Bonsai-Baum", "Schale", "Werkzeug"].map(item => <button key={item} className={`filter-pill ${filter === item ? "active" : ""}`} onClick={() => setFilter(item)}>{item === "Werkzeug" ? "Werkzeug & Substrat" : item === "Bonsai-Baum" ? "Bonsai-Bäume" : item}</button>)}</div>
    <div style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "center", flexWrap: "wrap" }}><p>{shown.length} Produkte</p><strong>Warenkorb: {count} Artikel · {formatPrice(subtotal)}</strong></div>
    <div className="grid-4">{shown.map(product => <article className="card" key={product.name}><div className="card-media"><Image src={product.image} alt={product.name} width={700} height={875} /></div><div className="card-body"><small>{product.category}</small><h3>{product.name}</h3><p>{product.desc}</p><div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}><span className="price">{formatPrice(product.price)}</span><button className="btn btn-primary" style={{ padding: "9px 14px", fontSize: ".82rem" }} onClick={() => add(product)} aria-label={`${product.name} in den Warenkorb legen`}>+ Warenkorb</button></div></div></article>)}</div>
    {items.length > 0 && <p style={{ marginTop: 24, color: "var(--grey)" }}>Der Warenkorb ist über das Warenkorb-Symbol oben rechts erreichbar.</p>}
  </>;
}
