import { Road } from './road'
import { Car } from './vehicle/car'

export default class Simulator {
  private ctx: CanvasRenderingContext2D

  private width: number
  private height: number

  private car: Car
  private road: Road

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height

    this.road = new Road(canvas.width)
    this.car = new Car(this.road.getLaneCenter(1))
  }

  run = () => {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.ctx.save()
    this.ctx.translate(0, -this.car.getY() + this.height * 0.7)
    this.road.draw(this.ctx)
    this.car.draw(this.ctx)
    this.ctx.restore()
    requestAnimationFrame(this.run)
  }
}
