import * as React from "react"
import { addPropertyControls, ControlType, Frame } from "framer"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

export function PinchPanZoom({
    width,
    height,
    sourceType,
    image,
    url,
    position,
    onTap,
    onZoomChange,
    ...props
}) {
    return (
        <TransformWrapper
            onZoomChange={(object) => {
                const {
                    previousScale,
                    scale,
                    positionX,
                    positionY,
                    options,
                } = object
                const isZoomed = scale > 1

                onZoomChange(
                    previousScale,
                    scale,
                    positionX,
                    positionY,
                    options,
                    isZoomed
                )
            }}
            options={{
                centerContent: true,
            }}
            wheel={{ step: 70 }}
            pan={{ paddingSize: 0, velocityEqualToMove: true }}
            scalePadding={{ disabled: false }}
            doubleClick={{ mode: "reset" }}
        >
            <TransformComponent>
                <img
                    src={sourceType ? url : image}
                    alt="image"
                    style={{
                        width,
                        height,
                        objectFit: "contain",
                        objectPosition: "center",
                    }}
                />
            </TransformComponent>
        </TransformWrapper>
    )
}

PinchPanZoom.defaultProps = {
    width: 320,
    height: 640,
    sourceType: true,
    image: "https://cloud.funda.nl/valentina_media/131/490/641_720x480.jpg",
    url: "https://cloud.funda.nl/valentina_media/131/490/641_720x480.jpg",
    onTap: () => null,
    onZoomChange: () => null,
}

addPropertyControls(PinchPanZoom, {
    sourceType: {
        type: ControlType.Boolean,
        enabledTitle: "URL",
        disabledTitle: "Local",
    },
    image: {
        type: ControlType.Image,
        defaultValue:
            "https://cloud.funda.nl/valentina_media/131/490/641_720x480.jpg",
        hidden(props) {
            return props.sourceType === true
        },
    },
    url: {
        type: ControlType.String,
        title: "URL",
        defaultValue:
            "https://cloud.funda.nl/valentina_media/131/490/641_720x480.jpg",
        hidden(props) {
            return props.sourceType === false
        },
    },
    onTap: { type: ControlType.EventHandler },
    onZoomChange: { type: ControlType.EventHandler },
})
