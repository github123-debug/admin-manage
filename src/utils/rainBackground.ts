export const rainBackground = ():void => {
    let canvas: HTMLCanvasElement = document.querySelector('canvas') as HTMLCanvasElement
    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    canvas.width = window.innerWidth // 整个屏幕宽度
    canvas.height = window.innerHeight
    canvas.style.position = 'fixed'
    canvas.style.zIndex = '-1'
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth // 整个屏幕宽度
        canvas.height = window.innerHeight
    })
    let str: string[] = '01010100101111abcdefg'.split('')
    let Arr = Array(Math.ceil(canvas.width / 10)).fill(0) // 向上取整Arr有多少个，并填充0

    const rain = () => {
        ctx.fillStyle = 'rgba(0,0,0,0.05)' // 绘制整个canvas背景为黑色
        ctx.fillRect(0, 0, canvas.width, canvas.height) // 以坐标轴（0，0）左上角 绘制矩形 长宽为canvas长宽
        ctx.fillStyle = '#0f0' // canvas内文字颜色
        Arr.forEach((item, index) => {
            ctx.fillText(str[Math.floor(Math.random() * str.length)], index * 10, item + 10) // 在指定的(x,y)位置填充指定的文本.
            Arr[index] = item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10 // item从0开始不断+10，直到大于屏幕高度或随机数返回0
        })
    }
    setInterval(rain, 40)
}


