import { Override, Data, Color } from "framer"

// [1]
const data = Data({
    isZooming: false,
})

export function Image(): Override {
    return {
        onZoomChange(previousScale, scale, positionX, positionY, options) {
            data.isZooming = positionY < 0
        },
    }
}

export function Ad(): Override {
    console.log(data.isZooming)
    return {
        visible: !data.isZooming,
    }
}
