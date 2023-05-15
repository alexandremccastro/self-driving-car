import { Controls } from './controls'

export class Car {
  private controls = new Controls()
  private width = 40
  private height = 80

  private x = 100
  private y = 200

  private angle = 0

  private speed = 0

  private MAX_SPEED = 2
  private FRICTION = 0.01
  private ACELLERATION = 0.03

  constructor(x: number) {
    this.x = x
  }

  public getX() {
    return this.x
  }

  public getY() {
    return this.y
  }

  private move() {
    if (this.controls.up) {
      if (this.speed < this.MAX_SPEED) this.speed += this.ACELLERATION
    }

    if (this.controls.down) {
      if (this.speed > -this.MAX_SPEED) this.speed -= this.ACELLERATION
    }

    if (this.controls.right) this.angle += 0.02

    if (this.controls.left) this.angle -= 0.02

    if (this.speed > 0) {
      this.speed -= this.FRICTION
    } else if (this.speed < 0) {
      this.speed += this.FRICTION
    }

    if (Math.abs(this.speed) < this.FRICTION) {
      this.speed = 0
    }

    this.x += Math.sin(this.angle) * this.speed
    this.y -= Math.cos(this.angle) * this.speed
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.move()

    ctx.save()

    const centerX = this.x + this.width / 2
    const centerY = this.y + this.height / 2

    ctx.translate(centerX, centerY)
    ctx.rotate(this.angle)
    ctx.fillStyle = '#212121'
    ctx.fillRect(-(this.width / 2), -(this.height / 2), this.width, this.height)

    ctx.fillStyle = '#FF3D00'
    ctx.fillRect(-5, -5, 10, 10)

    ctx.restore()
    ctx.resetTransform()
  }
}
