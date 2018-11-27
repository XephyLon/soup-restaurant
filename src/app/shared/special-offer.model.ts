import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Checklist {
  icon: boolean
  text: string
}

export interface SpecialOffer {
  image: string
  title: string
  subTitle: string
  checklist: Array<Checklist>
}
