import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center p-6 bg-white shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold">Bienvenue chez PerfumeXpress</h1>
        <p className="text-gray-600 text-lg mt-2">Votre distributeur automatique de parfums premium</p>
      </header>

      <section className="mt-10">
        <h2 className="text-3xl font-semibold text-center">Nos Parfums Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {["Bleu de Chanel", "Dior Sauvage", "La Vie Est Belle", "Black Opium", "CK One"].map((parfum, index) => (
            <Card key={index} className="p-4 text-center">
              <CardContent>
                <h3 className="text-xl font-semibold">{parfum}</h3>
                <p className="text-gray-500">Disponible en spray automatique</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-10 bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center">Comment ça fonctionne ?</h2>
        <ol className="list-decimal list-inside mt-4 text-gray-700">
          <li>Approchez votre poignet de l’un des distributeurs.</li>
          <li>Sélectionnez votre parfum préféré.</li>
          <li>Insérez votre moyen de paiement (pièces, CB, sans contact).</li>
          <li>Recevez votre dose de parfum instantanément.</li>
        </ol>
      </section>

      <section className="mt-10 text-center bg-gray-200 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold">Contactez-nous</h2>
        <p className="text-gray-600 mt-2">Besoin d’informations ? Retrouvez-nous ici :</p>
        <div className="mt-4 space-y-3">
          <p className="flex items-center justify-center gap-2 text-gray-700">
            <FaMapMarkerAlt /> 123 Avenue des Parfums, Paris
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-700">
            <FaPhone /> +33 6 12 34 56 78
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-700">
            <FaEnvelope /> contact@perfumeexpress.com
          </p>
        </div>
      </section>

      <footer className="text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} PerfumeXpress - Tous droits réservés.
      </footer>
    </div>
  );
}