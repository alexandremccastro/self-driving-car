import { Car } from './vehicle/car'

export default class Simulator {
  private ctx: CanvasRenderingContext2D

  private width: number
  private height: number

  private car: Car

  constructor(ctx: CanvasRenderingContext2D, width, height) {
    this.ctx = ctx
    this.width = width
    this.height = height
    this.car = new Car()
  }

  run = () => {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.fillStyle = '#fff'
    this.ctx.fillRect(0, 0, this.width, this.height)
    this.car.draw(this.ctx)

    requestAnimationFrame(this.run)
  }
}
