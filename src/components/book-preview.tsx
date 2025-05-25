"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    id: 1,
    content: `- bulutlar orasiga tiqilib qoldimi varragimiz? 
    shundayga o'xshaydi.
uzoqdan,
bulutga qarmoq solgan baliqchiga o'xshaysan.
- nima deb o'ylaysan, tortsammikin,
ilindi ekanmi biror qush,
biror salqin havo?
menimcha yo'q.
- balki oyga yetgandir u varrak?
balki yulduzlarga yetgandir?
- balki, o'zga sayyoradan salqin havo izlayotgandir?
balki, qanoti og'rib qolgan va unga tez yordam kelgan koinot tarafdan?
- balki osmonimiz allaqachon unga yerdir?
bo'ldi endi, ketdik.
- balki, u joydan, osmondan, yaxshi qo'nim topib, bizni unutib yuborgandir?
oyligim chiqsa,
osh olib beraman.
- pul bersang, varrak sho'rva qilib beraman.
menga tovuqli somsa yaxshi.
- mayli, senga tovuqli va sariq varrakli somsa qilib beraman.
ishda oyligimni oshirishlariga besh oy qoldi.
- yomg'irda uchgan varrakni ko'rmasdan o'lish yo'q, qishda ham uchsin,
oppoq qorlar bilan raqs ham tushsin osmonda.
kecha majlisda ismim aytib,
rag'batlantirishdi,
arang chidab berdim qarsaklariga.
- balki varragimiz, sen sevgan yulduzdadir rostdan ham,
cho'mich yulduzlaridan birida?
tushlik qilamiz,
keyin beo'xshov bir loy o'choq qilishimiz kerak.
- varrak yelpig'ich ham.
varrakli tom qilamiz.
- varrakli uy bo'lsin.
ishdan haydalishga doim tayyorman
men,
o'ylab qarasam, ish bizni ajratayapti ekan.`,
    location: "Nosirov",
    date: "2025",
  },
];

export default function BookPreview() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextPage = () => {
    if (currentPage < articles.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 400);
    }
  };

  const currentArticle = articles[currentPage];

  return (
    <div className="min-h-screen bg-[#f3f3f4] relative">
      {/* Navigation Buttons */}
      {currentPage > 0 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={prevPage}
          className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-stone-200/50 hover:bg-stone-200/80 border-0"
        >
          <ChevronLeft className="w-6 h-6 text-stone-600" />
        </Button>
      )}

      {currentPage < articles.length - 1 && (
        <Button
          variant="ghost"
          size="icon"
          onClick={nextPage}
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-stone-200/50 hover:bg-stone-200/80 border-0"
        >
          <ChevronRight className="w-6 h-6 text-stone-600" />
        </Button>
      )}

      {/* Page Content */}
      <div className="max-w-2xl mx-auto px-16 py-20">
        <div
          className={`transition-all duration-400 ease-in-out ${
            isFlipping
              ? "opacity-0 transform translate-x-8"
              : "opacity-100 transform translate-x-0"
          }`}
        >
          {/* Decorative Initial Letter */}
          <div className="flex items-start mb-8">
            <div className="flex-1">
              {/* Content */}
              <div className="text-stone-700 leading-relaxed">
                {currentArticle.content
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="mb-6 font-semibold whitespace-pre-line text-lg leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>

          {/* Location and Date */}
          <div className="text-right mt-16 pt-8">
            <p className="text-stone-500 text-sm font-light italic">
              {currentArticle.date}. {currentArticle.location}.
            </p>
          </div>
        </div>
      </div>

      {/* Page Indicators */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {/* {articles.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index !== currentPage) {
                setIsFlipping(true);
                setTimeout(() => {
                  setCurrentPage(index);
                  setIsFlipping(false);
                }, 400);
              }
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentPage ? "bg-stone-600" : "bg-stone-300"
            }`}
          />
        ))} */}
      </div>
    </div>
  );
}
