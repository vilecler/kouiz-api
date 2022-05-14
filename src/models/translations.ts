export enum Lang {
  en = "en",
  es = "es",
  fr = "fr",
  it = "it",
  pt = "pt"
};

export type Translations = Map<Lang, number>;

// Example:
// { "fr": "Fromage", "en": "Cheese", "it": "Formaggio"}
