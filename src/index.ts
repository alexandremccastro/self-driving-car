import './assets/styles/index.css'
import Simulator from './core/simulator'

window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement

  canvas.width = window.innerWidth / 4
  canvas.height = window.innerHeight

  const ctx = canvas.getContext('2d')

  new Simulator(ctx, canvas.width, canvas.height).run()
})
