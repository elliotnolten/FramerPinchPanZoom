import * as React from "react"
import { addPropertyControls, ControlType, Frame } from "framer"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

export function PinchPanZoom({
    width,
    height,
    image,
    position,
    onTap,
    ...props
}) {
    return (
        <Frame
            style={{ width, height, overflow: "hidden" }}
            background="transparent"
            onTap={onTap}
        >
            <TransformWrapper>
                <TransformComponent>
                    <div
                        style={{
                            width,
                            height,
                        }}
                    >
                        <img
                            src={image}
                            style={{
                                objectFit: "cover",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translateX(-50%) translateY(-50%)",
                                maxWidth: "100%",
                                maxHeight: "100%",
                            }}
                        />
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </Frame>
    )
}

PinchPanZoom.defaultProps = {
    width: 320,
    height: 640,
    image: "https://cloud.funda.nl/valentina_media/137/338/405_2160.jpg",
    position: "center",
}

addPropertyControls(PinchPanZoom, {
    image: {
        type: ControlType.Image,
    },
})
