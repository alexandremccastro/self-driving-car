import { Car } from "./vehicle/car"

export default class Simulator {
  private ctx: CanvasRenderingContext2D
  private car: Car
  private width: number
  private height: number

  constructor(ctx: CanvasRenderingContext2D, width, height) {
    this.ctx = ctx
    this.car = new Car()
    this.width = width
    this.height = height
  }

  run = () => {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.fillStyle = "#fff"
    this.ctx.fillRect(0, 0, this.width, this.height)
    this.car.draw(this.ctx)

    requestAnimationFrame(this.run)
  }
}
