import { Override, Data, Color } from "framer"

// [1]
const data = Data({
    isZoomed: false,
})

export function Image(): Override {
    return {
        onZoomChange(
            previousScale,
            scale,
            positionX,
            positionY,
            options,
            isZoomed
        ) {
            data.isZoomed = isZoomed
        },
    }
}

export function Ad(): Override {
    return {
        visible: !data.isZoomed,
    }
}

export function Page(): Override {
    return {
        dragEnabled: !data.isZoomed,
    }
}
