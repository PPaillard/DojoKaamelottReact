import React from 'react'
import Quote from './Quote'

const quotes = [
   {
      "quote": "Hé ben, si un jour j'oublie que je suis boniche, vous serez gentil de me le rappeler !",
      "actor": "Vanessa Guedj",
      "author": "Alexandre Astier",
      "season": "Livre I",
      "title": "La Romance de Lancelot",
      "episode": "37"
  },
  {
      "quote": "Si Monsieur et Madame préfèrent s'envoyer des fions dans l'intimité, je peux aussi me retirer.",
      "actor": "Vanessa Guedj",
      "author": "Alexandre Astier",
      "season": "Livre II",
      "title": "La Joute Ancillaire",
      "episode": "37"
  },
  {
      "quote": "(À Arthur et à Mevanwi ensemble dans leur lit) Entre le calme plat du temps de Madame et la guérilla de cette nuit, je me permets de dire à Monsieur que Monsieur n'a pas bien le sens de la mesure. Monsieur est en dents de scie...",
      "actor": "Vanessa Guedj",
      "author": "Alexandre Astier",
      "season": "Livre IV",
      "title": "La chambre de la Reine",
      "episode": "26"
  },
  {
      "quote": "(À Arthur au sujet de Mevanwi) Je dois avouer que la chose a du bon, si c'est pour m'éviter la vue de la grande décarade, le défilé des nouvelles têtes, la parade des amoureuses à calcul, les poids lourds de la jambe légère, le festival de la morue, en somme...",
      "actor": "Vanessa Guedj",
      "author": "Alexandre Astier",
      "season": "Livre IV",
      "title": "Les Bonnes",
      "episode": "30"
  }
 ]

const QuoteList = () => {
  return (
    <div>
    <h2>QuoteList</h2>
    <ul>
      {
      quotes.map((quote,index)=><Quote key={index} {...quote} />)
      }
    </ul>
    </div>
  )
}

export default QuoteList