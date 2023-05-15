import './assets/styles/index.css'
import Simulator from './core/simulator'

window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement

  canvas.width = window.innerWidth / 4
  canvas.height = window.innerHeight

  new Simulator(canvas).run()
})
