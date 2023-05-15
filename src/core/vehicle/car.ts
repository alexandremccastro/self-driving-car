import { Controls } from "./controls"

export class Car {
  private controls = new Controls()

  private x = 20
  private y = 20

  private move() {
    if (this.controls.right) this.x += 1
    if (this.controls.left) this.x -= 1
    if (this.controls.up) this.y -= 1
    if (this.controls.down) this.y += 1
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.move()
    ctx.save()
    ctx.fillStyle = "#000"
    ctx.beginPath()
    ctx.fillRect(this.x, this.y, 40, 80)
    ctx.closePath()
    ctx.restore()
  }
}
