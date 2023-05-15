import { IBorder } from './interfaces/border.interface'
import { lerp } from './utils'

export class Road {
  private width: number

  private left: number
  private right: number

  private borders: Array<Array<IBorder>>

  private infinity = 100000

  private lanesCount: number

  constructor(width: number, lanesCount = 3) {
    this.width = width
    this.lanesCount = lanesCount

    this.left = 10
    this.right = width - 10

    const topRight = {
      x: this.left,
      y: -this.infinity,
    }

    const bottomRight = {
      x: this.left,
      y: this.infinity,
    }

    const topLeft = {
      x: this.right,
      y: -this.infinity,
    }

    const bottomLeft = {
      x: this.right,
      y: this.infinity,
    }

    this.borders = [
      [topRight, bottomRight],
      [topLeft, bottomLeft],
    ]
  }

  public getLaneCenter(index) {
    const langeWidth = this.width / this.lanesCount

    return (
      Math.min(index, this.lanesCount - 1) * langeWidth +
      langeWidth / this.lanesCount
    )
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.save()

    ctx.strokeStyle = '#546E7A'

    ctx.beginPath()
    ctx.lineWidth = this.width
    ctx.moveTo(this.width / 2, this.infinity)
    ctx.lineTo(this.width / 2, -this.infinity)
    ctx.stroke()
    ctx.closePath()

    ctx.lineWidth = 4
    ctx.strokeStyle = '#f5f5f5'

    for (let i = 1; i < this.lanesCount; i++) {
      ctx.save()

      const x = lerp(this.left, this.right, i / this.lanesCount)

      ctx.beginPath()
      ctx.setLineDash([20, 20])
      ctx.moveTo(x, -this.infinity)
      ctx.lineTo(x, this.infinity)
      ctx.stroke()
      ctx.closePath()
      ctx.restore()
    }

    this.borders.forEach((borders) => {
      ctx.beginPath()
      ctx.moveTo(borders.at(0).x, borders.at(0).y)
      ctx.lineTo(borders.at(1).x, borders.at(1).y)
      ctx.stroke()
      ctx.closePath()
    })

    ctx.restore()
  }
}
