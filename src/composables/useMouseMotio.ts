
interface Coordinatas {
  x: number
  y: number
}



export const useMouseMotio = () => {

 const mousePositione = ref<Coordinatas>({ x:0, y:0 })

 const cumMouseMove = (e: MouseEvent)  => {
  const rect = (e.target as HTMLElement).getBoundingClientRect()
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  mousePositione.value = {
    x: (centerX - mouseX) * 0.1,
    y: (centerY - mouseY) * 0.1,
  }
}

 const cumMouseLeave = () => {
  mousePositione.value = {x:0, y:0}

}



    return {

        mousePositione,
        cumMouseMove,
        cumMouseLeave,


    }
}