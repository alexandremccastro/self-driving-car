export class Controls {
  public up = false
  public left = false
  public right = false
  public down = false

  constructor() {
    this.registerListeners()
  }

  private registerListeners() {
    document.addEventListener('keydown', (e) => this.handleKeys(e.key, true))
    document.addEventListener('keyup', (e) => this.handleKeys(e.key, false))
  }

  private handleKeys(key: string, value: boolean) {
    if (key == 'ArrowUp') this.up = value
    if (key == 'ArrowDown') this.down = value
    if (key == 'ArrowLeft') this.left = value
    if (key == 'ArrowRight') this.right = value
  }
}
