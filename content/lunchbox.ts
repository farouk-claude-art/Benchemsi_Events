/**
 * Menu de la semaine de la Lunch Box — à modifier chaque semaine.
 * Les jours sans menu ne sont pas affichés.
 */
export const lunchbox = {
  hashtags: ["#LunchBoxScolaire", "#FaitMaison"],
  menu: [
    {
      day: "Mardi",
      dishes: [
        "Zaalouk marocain",
        "Boulettes de kefta aux oignons",
        "Purée de pommes de terre onctueuse",
        "Pancakes, sauce chocolat",
      ],
    },
  ] as { day: string; dishes: string[] }[],
  // TODO: formules et prix, jours et horaires de commande, retrait/livraison, commande minimale.
  pricing: undefined as string | undefined,
  orderDays: undefined as string | undefined,
  delivery: undefined as string | undefined,
  minimumOrder: undefined as string | undefined,
};
