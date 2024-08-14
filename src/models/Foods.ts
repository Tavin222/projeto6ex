import { sys } from "typescript"

class Foods {
  more: string
  description: string
  image: string
  title: string
  infos: string[]
  id: number

  constructor(
    more: string,
    description: string,
    image: string,
    title: string,
    infos: string[],
    id: number
  ) {
    this.id = id
    this.more = more
    this.image = image
    this.description = description
    this.title = title
    this.infos = infos
  }
}

export default Foods
