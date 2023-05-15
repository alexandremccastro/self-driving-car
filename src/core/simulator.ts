import { Car } from './vehicle/car'

export default class Simulator {
  private ctx: CanvasRenderingContext2D

  private width: number
  private height: number

  private car: Car

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height
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
