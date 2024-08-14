import { sys } from "typescript"

class Food {
  description: string
  image: string
  title: string
  button: string
  id: number

  constructor(
    description: string,
    image: string,
    title: string,
    button: string,
    id: number
  ) {
    this.id = id
    this.image = image
    this.description = description
    this.title = title
    this.button = button
  }
}

export default Food
