import type { Dictionary, Locale } from "@/core/interfaces/i18n.interface";
import { DEFAULT_LOCALE } from "@/core/constants/i18n.constant";
import { esDictionary } from "@/core/i18n/dictionaries/es";
import { enDictionary } from "@/core/i18n/dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = {
  es: esDictionary,
  en: enDictionary,
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const dictionary = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
  return Promise.resolve(dictionary);
}
