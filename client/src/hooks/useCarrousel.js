import { useState } from 'react';

export const useCarrousel = (carrousel) => {

    const compiler = {};

    let cardsPosition = {
        card1: "left",
        card2: "center",
        card3: "right",
    }

    const sendCard = (position, direction, selector) => {
        const widthContainer = carrousel.container.current.offsetWidth;

        if (position === "left") {
            selector.style.transform = `perspective(${(widthContainer * 3) / 2
                }px) rotateY(45deg) translate(-110%, 0%)`;
            selector.style.zIndex = direction === "toRight" ? "18" : "19";
            selector.style.opacity = "0.6";
        }
        if (position === "center") {
            selector.style.transform = `perspective(${(widthContainer * 3) / 2
                }px) rotateY(0deg) translateX(00px) scale3d(1.2, 1.2, 1.2)`;
            selector.style.zIndex = "20";
            selector.style.opacity = "1";
        }

        if (position === "right") {
            selector.style.transform = `perspective(${(widthContainer * 3) / 2
                }px) rotateY(-45deg) translate(110%, 0%)`;
            selector.style.zIndex = direction === "toRight" ? "19" : "18";
            selector.style.opacity = "0.6";
        }
    }

    compiler.toggleCarrousel = (event, ref) => {
        const cardSelected = event ? event.currentTarget : ref.current;
        
        const currentPosition = cardsPosition[cardSelected.id];

        const afterPosition = cardsPosition;

        if (currentPosition === "left") {
            for (const key in afterPosition) {
                if (afterPosition[key] === "right") {
                    afterPosition[key] = "left";
                    sendCard("left", "toRight", carrousel[key].current);
                }

                if (afterPosition[key] === "center") {
                    afterPosition[key] = "right";
                    sendCard("right", "toRight", carrousel[key].current);
                }
            }
            afterPosition[cardSelected.id] = "center";
            sendCard("center", "toRight", cardSelected);
        }

        if (currentPosition === "right") {
            for (const key in afterPosition) {
                if (afterPosition[key] === "left") {
                    afterPosition[key] = "right";
                    sendCard("right", "toLeft", carrousel[key].current);
                }

                if (afterPosition[key] === "center") {
                    afterPosition[key] = "left";
                    sendCard("left", "toLeft", carrousel[key].current);
                }
            }
            afterPosition[cardSelected.id] = "center";
            sendCard("center", "toLeft", cardSelected);
        }

        cardsPosition = afterPosition;
    };

    return compiler;

}